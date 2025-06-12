'use client';
import React, { use } from 'react'

import { useRouter } from 'next/navigation';
import { useState } from 'react';

function RegisterPage() {

    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        const newUser = {
            name,
            email,
            password,
        };

        const existingUser = JSON.parse(localStorage.getItem('users')) || [];

        const alreadyExist = existingUser.some(user => user.email === email);


        if (alreadyExist) {
            alert('bu email kullanımda');
            return
        }

        existingUser.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUser));

        alert('Kayıt başarılı!');
        router.push('/login');

    }


  return (
     <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      <div className='max-w-xl w-full bg-white rounded-xl shadow-lg p-6'>
        <h2 className='text-2xl font-bold text-gray-900 mb-3 text-center'>Kayıt Ol</h2>

        <form className='space-y-4' onSubmit={handleRegister}>
            <input
            type='text'
            placeholder='İsim'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all'
            />

            <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all'
            />

            <input
            type='password'
            placeholder='Şifre'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all'
            />

            <button 
                type='submit'
                className='cursor-pointer w-32 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors'
            >
            Üye ol
            </button>

        </form>

      </div>
    </div>
  )
}

export default RegisterPage