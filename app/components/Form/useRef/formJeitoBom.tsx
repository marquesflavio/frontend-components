import { FormEvent, useRef } from "react";

export function Login2() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    
    
    console.log('renderizou')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="email" 
            ref={emailRef}
            placeholder="Seu e-mail"
            aria-label="e-mail"
            autoFocus
            />
            <input type="password" 
            ref={passwordRef}
            placeholder="Seu senha"
            aria-label="password"
            />
            <button type="submit">
                Entrar
            </button>
        </form>

    );
}