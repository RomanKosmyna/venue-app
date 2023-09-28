import { SubmitHandler } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
    comment: z.string().min(1)
});

export default function CreateCommentForm() {
    const onSubmit: SubmitHandler<Comment> = data => {
        console.log(data);
    };

    return (
        <div>

        </div>
    )
}