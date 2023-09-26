export type RegisterCredentialsDTO = {
    email: string;
    username: string;
    password: string;
};

export const registerUser = (data: RegisterCredentialsDTO): Promise<any> => {
    return fetch("");
};