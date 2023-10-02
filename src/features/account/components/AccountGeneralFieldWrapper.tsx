"use client";

import { AccountGeneralUsername } from "../types/accountGeneral";
import Form from "@/src/components/Form/Form";
import InputField from "@/src/components/Form/InputField";
import { SubmitHandler } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
    username: z.string().min(5).max(10),
});

type Props = {
    name: string;
    description: string;
    instruction: string;
};

export default function AccountGeneralFieldWrapper({ name, description, instruction }: Props) {
    const onSubmit: SubmitHandler<AccountGeneralUsername> = data => {
        console.log(data);
    };

    return (
        <Form<AccountGeneralUsername, typeof schema>
            onSubmit={onSubmit}
            schema={schema}
            className="w-full flex flex-col space-y-4 rounded-lg border border-hsla-grey-1"
        >
            {({ register, formState }) => (
                <>
                    <div className="w-full p-6 bg-background-input-field border-b border-hsla-grey-1">
                        <h2 className="font-[600] text-[1.25rem] tracking-[-.020625rem] text-hsla-white-1">{name}</h2>
                        <p className="text-white text-[.875rem] my-2">{description}</p>
                        <InputField<AccountGeneralUsername>
                            type="text"
                            register={register}
                            error={formState.errors['username']}
                            name="username"
                            className={"w-full h-[3rem] bg-black outline-none my-3 px-2 rounded-[5px] border border-hsla-grey-1"}
                        />
                    </div>
                    <div className="w-full flex flex-col justify-center items-center pt-2 px-6 pb-6">
                        <p className="text-grey-1 text-[.875rem] my-2">{instruction}</p>
                        <input type="submit" value={"Save"} className="w-1/5 bg-background border border-input-border text-[#FAFAFA] font-medium mx-auto rounded-[0.3rem] py-1" />
                    </div>
                </>
            )}
        </Form>
    )
}