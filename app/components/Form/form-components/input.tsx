interface InputProps {
    placeholder: string
    label: string
    type: any
}

const Input: React.FC<InputProps> = ({
    placeholder,
    label,
    type
}) => {
    return (
        <>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={label}>
                    {label}
                </label>
                <input
                    type={type}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder={placeholder}
                />
            </div>
        </>
    )
}

export default Input;

