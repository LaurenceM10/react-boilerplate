import React from 'react';
import LoginForm from "./login-form";

function LoginPage() {
    return (
        <div className="font-display flex h-screen bg-gray-50">
            <div className="min-h-screen mx-auto">
                <LoginForm onLogin={(values) => {}}/>
            </div>
        </div>
    );
}

export default LoginPage;
