import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";

// Types
import { IFormValues } from "./types";
import Input from "features/login/views/input";

// Components

interface LoginFormProps {
    onLogin: (values: IFormValues) => void
}

function LoginForm({ onLogin } : LoginFormProps) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit: SubmitHandler<IFormValues> = data => {
        console.log({ data })
        onLogin(data);
    };

    useEffect(() => {
        if(Object.keys(errors).length) {
            console.log({ errors });
        }
    }, [errors]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="card align-middle rounded-lg mt-52 container md:p-24 bg-white">
            <div className="mx-auto">
                <p className="pb-6 -mt-2 text-xl text-center">Sign In</p>
            </div>
            <div className="login-form">
                <Input
                    type="text"
                    placeholder="username"
                    register={register('username', { required: true, maxLength: 20, minLength: 6 })}
                />
                <Input
                    type="password"
                    placeholder="password"
                    register={register('password', { required: true, maxLength: 50, minLength: 8 })}
                />
                <input type="submit" className="focus: shadow-sm w-full mt-6 btn bg-green-600 rounded text-white p-2" value="Sign in" />
            </div>
        </form>
    );
}

export default LoginForm;
