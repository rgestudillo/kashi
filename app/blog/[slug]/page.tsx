"use client";
import React from 'react';
import { Blog, blogs } from "../../util/data";
import { usePathname } from 'next/navigation';

const BlogPost: React.FC<{ blog: Blog }> = ({ blog }) => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-black text-3xl font-bold mb-4">{blog.title}</h1>
            <p className="text-gray-600 mb-4">Date: {blog.date}</p>
            <div className="prose text-black text-justify" style={{ whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
    );
};

const SlugPage: React.FC = () => {
    const pathname = usePathname();
    const slug = pathname.split('/').pop(); // Extracting the slug from the pathname

    const blog: Blog | undefined = blogs.find((b) => b.slug === slug);

    if (!blog) {
        return <p>Blog not found</p>;
    }

    return <BlogPost blog={blog} />;
};

export default SlugPage;
