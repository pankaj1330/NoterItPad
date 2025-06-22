import { TextField } from "@mui/material"
import { Controller, useFormContext } from "react-hook-form"
import './style.scss'

type IntpuTextProps = {
    name: string;
    label?: string;
    placeholder?: string;
    type?: string;
}

function InputText({ name, placeholder, label, type }: IntpuTextProps) {
    const formMethod = useFormContext()

    return (
        <Controller
            name={name}
            control={formMethod.control}
            render={({ field: { onChange,value }, fieldState: { error } }) => {
                return <TextField
                    error={!!error}
                    name={name}
                    label={label}
                    value={value}
                    placeholder={placeholder}
                    variant={"outlined"}
                    onChange={(e) => onChange(e.target.value)}
                    helperText={error?.message}
                    className="inputText"
                    type={type}
                />
            }}
        />
    )
}

export default InputText