'use client';

import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({children, ...rest} : ButtonProps) {
    return (
       <button {...rest}>
        {children}
       </button>
    )
}