import {UseFormRegister, UseFormRegisterReturn } from "react-hook-form";

export type InputType = 'text' | 'password' | 'email';

export interface IFormValues {
    username: string;
    password: string;
}

export interface InputProps {
    type: InputType;
    register: UseFormRegisterReturn;
    placeholder: string;
}

