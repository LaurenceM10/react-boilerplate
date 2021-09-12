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
    const { register, handleSubmit, formState: { errors } } = useForm<IFormValues>();

    const onSubmit: SubmitHandler<IFormValues> = data => {
        onLogin(data);
    };

    return (
        <form name="login-form" onSubmit={handleSubmit(onSubmit)} className="card align-middle rounded-lg mt-52 container md:p-24 bg-white">
            <div className="mx-auto">
                <p className="pb-6 -mt-2 text-xl text-center">Sign In</p>
            </div>
            <div className="login-form">
                <Input
                    type="text"
                    placeholder="username"
                    register={register('username', {
                        required: true,
                        maxLength: {
                            value: 20,
                            message: "max length is 20"
                        },
                        minLength: {
                            value: 6,
                            message: "min length is 5"
                        }
                    })}
                />
                {errors.username && <span role="alert">{errors.username.message}</span>}
                <Input
                    type="password"
                    placeholder="password"
                    register={register('password', { required: true,
                        minLength: {
                            value: 8,
                            message: "min length is 8"
                        }
                    })}
                />
                {errors.password && <span role="alert">{errors.password.message}</span>}
                <input type="submit" className="focus: shadow-sm w-full mt-6 btn bg-green-600 rounded text-white p-2" value="Sign in" />
            </div>
        </form>
    );
}

export default LoginForm;
