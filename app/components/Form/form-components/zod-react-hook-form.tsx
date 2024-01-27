'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

/*
[X] Validação / transformação,
[ ] Field arrays,
[ ] Upload de arquivos,
[ ] Composition Pattern

*/

//schema representa a estrutura do formulário. Campos e tipos.
const createUserSchema = z.object({
    name: z.string().min(3,'Insira pelo menos 3 caracteres')
    .transform(name=> {
        return name.trim().split(' ').map(word => {
            return word[0].toLocaleUpperCase().concat(word.substring(1))
        }).join(' ')
        //esse transforme faz com que a primeira letra de cada nome fique maiúsculo.
    }),
    email: z.string()
        .min(1,'O e-mail é obrigatório')
        .email('Formato de e-mail inválido')
        .toLowerCase()
        //refine é outro método de fazer validações.
        .refine(email => {
            return email.endsWith('.com.br')
        }, 'O email deve terminar com ".com.br"'),
        //outro método legal é o superRefine que retorna dados de TODOS os campos, ideal para "confirme sua senha"
    password: z.string()
        .min(6, 'A senha precisa de no mínimo 6 caracteres'),
})

// Aqui estamos fazendo uma tipagem usando inferência passando o Schema como base.
// Serve para deixar o formulário mais inteligente, aproveitando o TypeScript.
type createUserFormDate = z.infer<typeof createUserSchema>

export const FormComZod = () => {
    const [output, setOutput] = useState(''); //apenas para visualizar os dados sem precisar abrir o console.
    const {
        register, 
        handleSubmit, 
        formState: { errors }
    } = useForm<createUserFormDate>({ resolver: zodResolver(createUserSchema) });

    
    function createUser(data: any){
        setOutput(JSON.stringify(data, null, 2)) //apenas para visualizar os dados sem precisar abrir o console.

    }
    //high-order function quando passamos uma função para outra função.

    return (
        <main className="h-screen bg-zinc-50 flex flex-col gap-10 items-center justify-center">
            <form onSubmit={handleSubmit(createUser)} action="" className="flex flex-col gap-4 w-full max-w-xs">
                <div className="flex flex-col gap-1">
                    <label htmlFor="name">Nome</label>
                    <input
                        type="name"
                        className="border border-zinc-200 shadow-sm rounded h-10 px-3"
                        {...register('name')}
                    />
                    {errors.name && <span>{errors.name.message}</span>}
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        className="border border-zinc-200 shadow-sm rounded h-10 px-3"
                        {...register('email')}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>


                <div className="flex flex-col gap-1">
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        className="border border-zinc-200 shadow-sm rounded h-10 px-3"
                        {...register('password')}
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>

                <button type="submit" className="bg-emerald-500 rounded font-semibold text-white p-2">Salvar</button>

            </form>
            <pre>{output}</pre>
        </main>
    );
};