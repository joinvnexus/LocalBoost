// src/app/page.tsx
import { Image } from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold text-white">
          Welcome to Your App
        </h1>
        <p className="text-neutral-400 max-w-md">
          This is a Next.js 16 starter template with authentication and database integration.
        </p>
        <div className="space-y-4">
          <a href="/login" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Sign In
          </a>
          <a href="/login" className="px-6 py-3 border border-neutral-600 text-neutral-200 rounded-md hover:border-neutral-400 transition-colors">
            Sign Up
          </a>
        </div>
      </div>
    </main>
  );
}