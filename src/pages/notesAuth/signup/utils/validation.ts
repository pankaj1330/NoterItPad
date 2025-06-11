import { z } from "zod";

export const SignupValidation = z.object({
    username : z.string().min(1,{message:"Required"}),
    email : z.string().email(),
    password : z.string().min(8,{message:"Password must contains atleast 8 characters"})
})