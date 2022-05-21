import {UseFormRegister, UseFormRegisterReturn} from "react-hook-form";

export type InputType = 'text' | 'password' | 'email';

export interface IFormValues {
    username: string;
    password: string;
    email: string,
    firstname: string,
    lastname: string,
}

export interface InputProps {
    type: InputType;
    register: UseFormRegisterReturn;
    placeholder: string;
}

