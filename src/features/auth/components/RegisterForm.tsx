"use client";

import Link from "next/link";
import Form from "@/src/components/Form/Form";
import { SubmitHandler } from "react-hook-form";
import { RegisterFormInput } from "../types/register";
import InputField from "@/src/components/Form/InputField";
import { z } from "zod";
import clsx from "clsx";

const schema = z.object({
    email: z.string().email(),
    username: z.string().min(5).max(10),
    password: z.string().min(7).max(12)
});

const test = clsx("border", "bg");

export default function RegisterForm() {
    const onSubmit: SubmitHandler<RegisterFormInput> = data => console.log(data);

    return (
        <div className="w-4/5 max-w-[420px] flex flex-col space-y-6">
            <h2 className="text-[#FAFAFA] text-center text-2xl tracking-tight font-semibold">Create an Account</h2>
            <Form<RegisterFormInput, typeof schema>
                onSubmit={onSubmit}
                schema={schema}
                className="flex flex-col space-y-4"
            >
                {({ register, formState }) => (
                    <>
                        <InputField<RegisterFormInput>
                            type="email"
                            register={register}
                            error={formState.errors['email']}
                            label="Email"
                            name="email"
                            className={"w-full h-10 bg-white outline-none px-2 rounded-[5px] border-2 border-black"}
                        />
                        <InputField<RegisterFormInput>
                            type="text"
                            register={register}
                            error={formState.errors['username']}
                            label="Username"
                            name="username"
                            className={"w-full h-10 bg-white outline-none px-2 rounded-[5px] border-2 border-black"}
                        />
                        <InputField<RegisterFormInput>
                            type="password"
                            register={register}
                            error={formState.errors['password']}
                            label="Password"
                            name="password"
                            className={"w-full h-10 bg-white outline-none px-2 rounded-[5px] border-2 border-black"}
                        />
                        <input type="submit" value={"Register"} className="w-3/5 bg-background border border-input-border text-[#FAFAFA] font-medium mx-auto rounded-[0.3rem] py-1" />
                    </>
                )}
            </Form>
            <p className="text-center text-[#A3A3A3] text-sm">
                Already have an account?{" "}
                <Link href={"/signin"} className="text-[#A3A3A3] text-sm underline underline-offset-4">Sign In</Link>
            </p>
        </div>
    )
}