import React from 'react';
import Link from 'next/link';
import { blogs, Blog } from "../util/data";

const BlogsPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col items-center">
                {blogs.map((blog: Blog) => (
                    <div key={blog.slug} className="w-full">
                        <div className="flex flex-col bg-white shadow-md rounded-lg p-4 m-4">
                            <Link href={`/blog/${blog.slug}`}>
                                <h2 className="text-xl font-semibold text-blue-600 hover:text-blue-800 mb-2">{blog.title}</h2>
                            </Link>
                            <p className="text-gray-600">{blog.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogsPage;
