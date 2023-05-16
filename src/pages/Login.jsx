import { Button } from "@mui/material";
import React from 'react';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate, Navigate } from 'react-router-dom';


export default function Login() {
    const auth = getAuth();
    const { user } = useContext(AuthContext);
    const handleLoginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();

        const {
            user: { uid, displayName },
        } = await signInWithPopup(auth, provider);
        console.log('register', { data });
    };
    if (localStorage.getItem('accessToken')) {
        return <Navigate to="/" />
    }

    return (
        <>
            <h1>Chào mừng đến FunniMoney</h1>
            <Button variant="outlined" onClick={handleLoginWithGoogle}>
                Đăng nhập bằng Gmail Google
            </Button>
        </>
    );
}
