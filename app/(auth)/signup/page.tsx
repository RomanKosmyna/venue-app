import { Metadata } from "next";
import RegisterForm from "@/src/features/auth/components/RegisterForm";

export const metadata: Metadata = {
    title: 'Sign Up',
    description: 'Create an account',
}

export default function SignUp() {
    return (
        <main className="flex min-h-screen flex-col items-center p-4">
            <RegisterForm />
        </main>
    )
}