// app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from './components/BlogCard'; // Adjust the import path if needed
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

type Post = {
  id: number;
  title: string;
  content: string;
};

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch posts from the backend
    axios.get('http://localhost:3001/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  const handleDelete = (id: number) => {
    // Delete a post by ID
    axios.delete(`http://localhost:3001/posts/${id}`)
      .then(() => {
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting post:', error);
      });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            excerpt={post.content.slice(0, 100)} // Show only the first 100 characters as an excerpt
            onView={() => router.push(`/posts/${post.id}`)}
            onDelete={() => handleDelete(post.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
