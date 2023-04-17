import { z } from 'zod';

export const CompanyZodSchema = z.object({
  name: z.string().min(6),
  cnpj: z.string().min(14),
  address: z.string().min(6),
  city: z.string().min(6),
  state: z.string().min(2),
});

export type ICompany = z.infer<typeof CompanyZodSchema>;