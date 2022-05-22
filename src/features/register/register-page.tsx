import React from "react"
import RegisterForm from "./register-form"

const RegisterPage = () => {
    return(
        <div className="bg-gray-50 h-screen w-full grid place-content-center">
            <RegisterForm onLogin={(values) => {}} />
        </div>
    )
}

export default RegisterPage;