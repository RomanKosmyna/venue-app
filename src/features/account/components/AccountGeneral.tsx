"use client"
import { z } from "zod";
import AccountGeneralFieldWrapper from "./AccountGeneralFieldWrapper";

const usernameSchema = z.object({
    username: z.string().min(5).max(10),
});

const emailSchema = z.object({
    email: z.string().email(),
});

const passwordSchema = z.object({
    password: z.string().min(7).max(12)
});

export default function AccountGeneral() {
    return (
        <div className="w-full flex flex-col space-y-8 pt-7 pb-16">
            <AccountGeneralFieldWrapper
                heading="Username"
                name="username"
                description="You can change your username here."
                instruction="Please use 10 characters at maximum."
                schema={usernameSchema}
            />
            <AccountGeneralFieldWrapper
                heading="Email"
                name="email"
                description="You can change your email here."
                instruction="Please make sure that is has a valid email format."
                schema={emailSchema}
            />
            <AccountGeneralFieldWrapper
                heading="Password"
                name="password"
                description="You can change your password here."
                instruction="Please use 12 characters at maximum."
                schema={passwordSchema}
            />
        </div>
    )
}