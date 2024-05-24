"use client";
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config'; // Adjust the path as necessary

interface Question {
    id: string;
    question: string;
    date: Date;
}

export default function HistoryPage() {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        async function fetchQuestions() {
            const querySnapshot = await getDocs(collection(db, 'questions'));
            const questionsList: Question[] = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                // Convert timestamp to Date object
                const timestamp = data.date;
                const date = timestamp.toDate();
                questionsList.push({
                    id: doc.id,
                    question: data.question,
                    date: date,
                });
            });
            setQuestions(questionsList);
            setLoading(false);
        }
        fetchQuestions();
    }, []);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (password === 'alexie') {
            setAuthenticated(true);
        } else {
            alert('Incorrect password');
        }
    }

    if (!authenticated) {
        return (
            <div className="flex justify-center items-center h-screen">
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        className="mb-2 px-4 py-2 border rounded"
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
                </form>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="loader">Loading...</div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Question History</h1>
            <ul>
                {questions.map((question) => (
                    <li key={question.id} className="mb-4 p-4 border rounded shadow-sm">
                        <p className="text-lg font-semibold">{question.question}</p>
                        <p className="text-gray-500">{question.date.toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
