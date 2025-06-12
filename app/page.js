'use client';

import React from 'react'
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext'

export default function Home() {

  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <button 
      className="cursor-pointer px-16 py-8 text-2xl bg-gray-300 rounded-lg text-white hover:bg-gray-700 transition"
      onClick={() => router.push('/login')}
      >
        Giriş Yap
      </button>
    </div>
  );
}
