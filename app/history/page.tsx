"use client";
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config'; // Adjust the path as necessary

interface Question {
    id: string;
    question: string;
    date: Date;
    answer: string;
    ip: string;
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
                    answer: data.answer,
                    ip: data.ip,
                });
            });

            // Sort questions by date in descending order
            questionsList.sort((a, b) => b.date.getTime() - a.date.getTime());

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
            <h1 className="text-2xl font-bold mb-4 text-blue-800">Question History</h1>
            <ul>
                {questions.map((question) => (
                    <div key={question.id} className="collapse bg-base-200 mb-4 border rounded border-black shadow-sm">
                        <input type="checkbox" />
                        <div className="collapse-title bg-white text-black p-4">
                            {question.question}
                            <p className="text-gray-500">{question.date.toLocaleString()}</p>
                        </div>
                        <div className="collapse-content bg-white">
                            <p className="text-justify text-gray-500">{question.answer}</p>
                            <p className="text-red-500 mt-2">{question.ip}</p>
                        </div>
                    </div>
                ))}

            </ul>
        </div>
    );
}
