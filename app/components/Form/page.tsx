'use client';

import { useForm } from "react-hook-form"

interface FormData {
    nome: string,
    telefone: string,
    email: string,
    senha: string
    profissao: string
}

export default function Form() {

    const {
        register,
        handleSubmit, //essa função handleSubmit espera um parâmetro que é a função de envio do form.
        formState: { errors }
    } = useForm<FormData>();

    const submitFom = (dados: FormData) => {
        console.log(dados)
    }

    return (
        <div className="w-2/4 m-auto p-8">
            <form onSubmit={handleSubmit(submitFom)}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Nome
                    </label>
                    <input
                        {...register('nome', {
                            required: true,
                            minLength: {
                                value: 3,
                                message: "Insira pelo menos 3 caracteres"
                            }
                        })}
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Nome Completo"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Telefone
                    </label>
                    <input
                        {...register('telefone', {
                            required: true,
                            pattern: /^(\+[0-9]{1,3})?[-. ]?\(?[0-9]\)?[-. ]?[0-9](?:[-. ]?[0-9]){8,}$/,
                            maxLength: {
                                value: 11,
                                message: 'Este campo aceita no máximo 11 caracteres'
                            }
                        })}
                        type="tel"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Telefone Celular"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        E-mail
                    </label>
                    <input
                        {...register('email', {
                            required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                        })}
                        type="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Email Completo"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Senha
                    </label>
                    <input
                        {...register('senha', {
                            required: true, minLength: 8
                        })}
                        type="password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Digite sua senha"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Selecione uma profissão
                    </label>
                    <select
                        {...register('profissao', {
                            required: true, validate: (value) => {
                                return value != "0";
                            }
                        })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option value={0}>Selecione...</option>
                        <option value={1}>Desenvolvedor</option>
                        <option value={2}>Outra</option>
                    </select>
                </div>
                {/* acrescentar campos checkbox, endereço... */}
                <input className="bg-blue-300 p-2 rounded-lg " type="submit" />
            </form>
        </div>
    )
}