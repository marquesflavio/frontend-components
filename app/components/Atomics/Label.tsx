import { InputHTMLAttributes, LabelHTMLAttributes } from "react"

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

export function Label({children, ...rest} : LabelProps) {
    return (
        <label>
            {children}
        </label>
    )
}