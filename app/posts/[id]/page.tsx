'use client';

import {  useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardTitle, CardContent, CardHeader } from '@/components/ui/card';

type Post = {
    id: number;
    title: string;
    content: string;
};

export default function PostPage() {
    const { id } = useParams(); // Get the dynamic route parameter
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) {
            return; // Exit if ID is not yet available
        }

        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/posts/${id}`);
                setPost(response.data);
            } catch (error) {
                setError('Error fetching post');
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]); // Depend on ID

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!post) return <div>Post not found</div>;

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>{post.title}</CardTitle>

                </CardHeader>
                <CardContent>
                    <p>{post.content}</p>
                </CardContent>

            </Card>

        </div>
    );
}
