import { FieldError } from "react-hook-form";

export type FieldWrapperProps = {
    label?: string;
    name?: string;
    children?: React.ReactNode;
    error?: FieldError | undefined;
};

export default function FieldWrapper({ label, children, name, error }: FieldWrapperProps) {
    return (
        <div className="flex flex-col">
            <label htmlFor={name} className="text-white">
                {label}
            </label>
            {children}
            {error?.message && (
                <div className="text-[red]">{error.message}</div>
            )}
        </div>
    )
}