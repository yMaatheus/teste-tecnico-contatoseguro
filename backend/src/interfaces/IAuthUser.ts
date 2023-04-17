import { z } from 'zod';

export const AuthUserZodSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

export type IAuthUser = z.infer<typeof AuthUserZodSchema>;
export interface IAuthUserJWT {
  id: number,
  name: string,
  email: string,
}