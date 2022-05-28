import React from 'react';
import { InputProps } from "./types";

function Input({ type, placeholder, register } : InputProps) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            {...register}
            className="shadow-sm appearance-none focus:border-white border border-gray-100 rounded w-full py-2 mt-2 input"
        />
    );
}

export default Input;
