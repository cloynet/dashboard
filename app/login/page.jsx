'use client';
import React, { useEffect } from 'react'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user,login } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard')
    }
  }, [user, router])

  if (user) {
    return (
      <div className='p-10 text-red-600 text-center'>
                giriş yapılı
            </div>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login(email, password);
    if (success) {
      router.push('/dashboard');
    }
  };
  
  return (

      <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      <div className='max-w-xl w-full bg-white rounded-xl shadow-lg p-6'>
        <h2 className='text-2xl font-bold text-gray-900 mb-3 text-center'>Giriş Yap</h2>

        <form className='space-y-4' onSubmit={handleSubmit}>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
            <input 
            type="email"
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
          </div>


          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Şifre</label>
            <input 
            type="password"
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all'
            placeholder='******'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
          </div>

          <button className='cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors'>
            Giriş Yap
          </button>

          <button 
          className='cursor-pointer w-32 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors'
          onClick={() => router.push('/register')}
          >
            Üye ol
          </button>

        </form>

      </div>
    </div>

  )
}

export default LoginPage
