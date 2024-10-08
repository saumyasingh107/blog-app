import z from "zod";

export const signupinput=z.object({
    username:z.string().email(),    
    password:z.string().min(6),
    name:z.string().optional()
})

 export const signininput=z.object({
    username:z.string().email(),    
    password:z.string().min(6),
})

export const createBlog=z.object({
    title:z.string(),    
    content:z.string()
})

export const  UpdateBlog=z.object({
    title:z.string(),    
    content:z.string(),
    id:z.number()
})

export type signupinput=z.infer<typeof signupinput>
export type signininput=z.infer<typeof signininput>
export type createBlog=z.infer<typeof createBlog>
export type UpdateBlog=z.infer<typeof UpdateBlog>