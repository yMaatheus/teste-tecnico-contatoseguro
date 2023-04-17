import { z } from 'zod';

export const UserZodSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().optional(),
  dateOfBirth: z.coerce.date().optional(),
  cityOfBirth: z.string().min(3).optional(),
});

export type IUser = z.infer<typeof UserZodSchema>;
