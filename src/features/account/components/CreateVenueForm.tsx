"use client";

import Form from "@/src/components/Form/Form";
import { SubmitHandler } from "react-hook-form";
import { CreateFormInput } from "../types/createVenue";
import InputField from "@/src/components/Form/InputField";
import { z } from "zod";

const schema = z.object({
    name: z.string().min(1),
    address: z.string().min(1),
    schedule: z.string().min(1),
    contacts: z.string().min(1)
});

const onSuccess = async () => {

};

export default function CreateVenueForm() {
    const onSubmit: SubmitHandler<CreateFormInput> = data => {
        console.log(data);
        onSuccess();
    };

    return (
        <Form<CreateFormInput, typeof schema>
            onSubmit={onSubmit}
            schema={schema}
            className="flex flex-col space-y-4"
        >
            {({ register, formState }) => (
                <>
                    <InputField<CreateFormInput>
                        type="text"
                        register={register}
                        error={formState.errors['name']}
                        label="Name"
                        name="name"
                        className={"w-full h-10 bg-white outline-none px-2 rounded-[5px] border-2 border-black"}
                    />
                    <InputField<CreateFormInput>
                        type="text"
                        register={register}
                        error={formState.errors['photo']}
                        label="Photo"
                        name="photo"
                        className={"w-full h-10 bg-white outline-none px-2 rounded-[5px] border-2 border-black"}
                    />
                    <InputField<CreateFormInput>
                        type="text"
                        register={register}
                        error={formState.errors['address']}
                        label="Address"
                        name="address"
                        className={"w-full h-10 bg-white outline-none px-2 rounded-[5px] border-2 border-black"}
                    />
                    <InputField<CreateFormInput>
                        type="text"
                        register={register}
                        error={formState.errors['schedule']}
                        label="Schedule"
                        name="schedule"
                        className={"w-full h-10 bg-white outline-none px-2 rounded-[5px] border-2 border-black"}
                    />
                    <InputField<CreateFormInput>
                        type="text"
                        register={register}
                        error={formState.errors['contacts']}
                        label="Contacts"
                        name="contacts"
                        className={"w-full h-10 bg-white outline-none px-2 rounded-[5px] border-2 border-black"}
                    />
                    <input type="submit" value={"Publish Venue"} className="w-3/5 bg-background border border-input-border text-[#FAFAFA] font-medium mx-auto rounded-[0.3rem] py-1" />
                </>
            )}
        </Form>
    )
}