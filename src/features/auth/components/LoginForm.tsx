"use client";

import Link from "next/link";
import Form from "@/src/components/Form/Form";
import { SubmitHandler } from "react-hook-form";
import { LoginFormInput } from "../types/login";
import InputField from "@/src/components/Form/InputField";
import { z } from "zod";
import clsx from "clsx";

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(7).max(12)
});

const test = clsx("border", "bg");

export default function LoginForm() {
    const onSubmit: SubmitHandler<LoginFormInput> = data => console.log(data);

    return (
        <div className="w-4/5 max-w-[420px] flex flex-col space-y-6">
            <h2 className="text-[#FAFAFA] text-center text-2xl tracking-tight font-semibold">Sign In</h2>
            <Form<LoginFormInput, typeof schema>
                onSubmit={onSubmit}
                schema={schema}
                className="flex flex-col space-y-4"
            >
                {({ register, formState }) => (
                    <>
                        <InputField<LoginFormInput>
                            type="email"
                            register={register}
                            error={formState.errors['email']}
                            label="Email"
                            name="email"
                            className={"w-full h-10 bg-white outline-none px-2 rounded-[5px] border-2 border-black"}
                        />
                        <InputField<LoginFormInput>
                            type="password"
                            register={register}
                            error={formState.errors['password']}
                            label="Password"
                            name="password"
                            className={"w-full h-10 bg-white outline-none px-2 rounded-[5px] border-2 border-black"}
                        />
                        <input type="submit" value={"Login"} className="w-3/5 bg-background border border-input-border text-[#FAFAFA] font-medium mx-auto rounded-[0.3rem] py-1" />
                    </>
                )}
            </Form>
            <p className="text-center text-[#A3A3A3] text-sm">
                Don't have an account?{" "}
                <Link href={"/signup"} className="text-[#A3A3A3] text-sm underline underline-offset-4">Sign Up</Link>
            </p>
        </div>
    )
}