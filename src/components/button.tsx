import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

export const Button = ({text, ...props}: ButtonProps) => {
    return (
        <button {...props} className="bg-purple-700 text-white p-2 rounded-md" >
            {text}
        </button>
    )
}