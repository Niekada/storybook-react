import { useMutation } from "react-query";
import { createUser } from "../api/users";

export const useCreateUser = () => {
    return useMutation(createUser);
};