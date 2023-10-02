import AccountGeneralFieldWrapper from "./AccountGeneralFieldWrapper";

export default function AccountGeneral()
{
    return (
        <div className="w-full flex flex-col space-y-8 pt-7 pb-16">
            <AccountGeneralFieldWrapper 
            name="Username"
            description="You can change your username here."
            instruction="Please use 10 characters at maximum."
            />
            <AccountGeneralFieldWrapper 
            name="Email"
            description="You can change your email here."
            instruction="Please make sure that is has a valid email format."
            />
            <AccountGeneralFieldWrapper 
            name="Password"
            description="You can change your password here."
            instruction="Please use 12 characters at maximum."
            />
        </div>
    )
}