'use client';

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext'

function DashboardPage() {

    const { user, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (user === null) {
            router.push('/login');
        }
    }, [user, router]);

    


    const handleLogout = () => {
        logout();
    }

    if (!user) {
        return (
            <div className='p-10 text-red-600 text-center'>
                Yükleniyor veya yönlendiriliyorsunuz...
            </div>
        );
    }

 return (
    <div className='min-h-screen flex'>
        <aside className='w-64 shadow-md p-6 hidden md:block'>
            <h2 className='text-xl font-bold mb-4'>Panel</h2>
            <ul className='space-y-4'>
                <li className='text-gray-600 hover:text-blue-500 cursor-pointer'>Anasayfa</li>
                <li className='text-gray-600 hover:text-blue-500 cursor-pointer'>Profil</li>
                <li className='text-gray-600 hover:text-blue-500 cursor-pointer'>Ayarlar</li>
            </ul>
        </aside>

        <main className='flex-1 bg-gray-50 p-6'>

            <div className='flex justify-between items-center mb-6'>
                <h1 className='text-2xl font-semibold'>Dashboard</h1>
                <button 
                className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
                onClick={handleLogout}
                >
                    Çıkış Yap
                </button>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-sm'>
                <h2 className='text-xl font-medium mb-2'>Hoş geldiniz, {user.name}!</h2>
                <p className='text-gray-600'>
                    Burası yönetim paneli. içerikleri kontrol edebilirsiniz
                </p>
            </div>

        </main>

    </div>
 )
}

export default DashboardPage
