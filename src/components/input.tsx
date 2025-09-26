import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
}

export const Input = ({placeholder, ...props}: InputProps) => {
    return (
        <input {...props} placeholder={placeholder} className={`border border-purple-700 p-2 rounded-md`} />
    )
}