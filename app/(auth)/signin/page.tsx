import { Metadata } from "next";
import LoginForm from "@/src/features/auth/components/LoginForm";

export const metadata: Metadata = {
    title: 'Sign In',
    description: 'Log into your account',
}

export default function SignInPage() {
    return (
        <main className="flex min-h-screen flex-col items-center p-4">
            <LoginForm/>
        </main>
    )
}