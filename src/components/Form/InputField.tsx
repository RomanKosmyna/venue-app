import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import FieldWrapper, { FieldWrapperProps } from "./FieldWrapper";
import clsx from "clsx";

type InputFieldProps<TFieldValues extends FieldValues> = FieldWrapperProps & {
    type?: "text" | "email" | "password";
    register: UseFormRegister<TFieldValues>;
    name: Path<TFieldValues>;
    className?: string;
};

export default function InputField<TFieldValues extends FieldValues>(
    { label, type, register, name, error, className }: InputFieldProps<TFieldValues>
) {
    return (
        <FieldWrapper label={label} name={name} error={error}>
            <input type={type} {...register(name)} className={clsx("", className)} />
        </FieldWrapper>
    )
}