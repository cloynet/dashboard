'use client';

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];

        const foundUser = users.find(user => user.email === email && user.password === password);

        if (foundUser) {
            const loggedInUser = {
                name: foundUser.name,
                email: foundUser.email,
            };
            setUser(loggedInUser);
            return true;
        } else {
            alert('email veya sifre yanlis');
            return;
        }
    };
    

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value = {{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);