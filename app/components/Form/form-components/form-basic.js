const FormBasicJS = () => {;


    return (
        <div className="w-full">
            <form className="flex flex-col w-2/4">
                <label 
                    className="font-semibold text-lg">
                        Nome
                    </label>
                <input
                    className="border p-2" 
                    type="text"
                    name="name"
                />
                <label 
                    className="font-semibold text-lg">
                        CPF
                    </label>
                <input
                    className="border p-2" 
                    type="number"
                    name="cpf"
                />
                <label 
                    className="font-semibold text-lg">
                        Telefone
                    </label>
                <input
                    className="border p-2" 
                    type="tel"
                    name="tel"
                />
                <label 
                    className="font-semibold text-lg">
                        E-mail
                    </label>
                <input
                    className="border p-2" 
                    type="email"
                    name="email"
                />
                <label 
                    className="font-semibold text-lg">
                        Password
                    </label>
                <input
                    className="border p-2" 
                    type="password"
                    name="password"
                />
                <button type="submit" className="bg-green-600 py-2 my-4 border">Enviar</button>

            </form>
        </div>
    )
}
export default FormBasicJS