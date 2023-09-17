"use client";

import { FieldValues, SubmitHandler, UseFormReturn, useForm } from "react-hook-form";
import { Schema, ZodType, ZodTypeDef, ZodObject } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from "clsx";

type FormProps<TFormValues extends FieldValues, Schema> = {
    onSubmit: SubmitHandler<TFormValues>;
    children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
    schema?: Schema;
    className?: string;
};

export default function Form<TFormValues extends FieldValues,
    Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<unknown, ZodTypeDef, unknown>
>({ onSubmit, children, schema, className }: FormProps<TFormValues, Schema>) {
    const methods = useForm<TFormValues>({ resolver: zodResolver(schema) });

    return (
        <form onSubmit={methods.handleSubmit(onSubmit)} className={clsx(className)}>
            {children(methods)}
        </form>
    )
}
