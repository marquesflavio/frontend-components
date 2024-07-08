import { FormEvent, useState } from "react";

export function Login1() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    console.log('renderizou')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="email" 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Seu e-mail"
            aria-label="e-mail"
            autoFocus
            />
            <input type="password" 
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Seu senha"
            aria-label="password"
            />
            <button type="submit">
                Entrar
            </button>
        </form>

    );
}