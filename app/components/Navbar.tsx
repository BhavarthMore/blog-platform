// app/page.tsx (or your navbar component file)
"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// ... other imports and code

const MyNavbar = () => {
  const router = useRouter();
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <button onClick={() => router.push("/")} className="text-2xl">
        My Blog Platform
      </button>
      <div className="flex space-x-4">
        <Button onClick={() => router.push("/create")} className="mb-6">
          Create New Post
        </Button>
      </div>
    </nav>
  );
};

export default MyNavbar;
