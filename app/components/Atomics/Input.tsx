import { InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({...rest} : InputProps) {
    return (
        <input {...rest}/>
    )
}