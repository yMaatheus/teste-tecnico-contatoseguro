import { z } from 'zod';

export const ReportZodSchema = z.object({
  userId: z.number().positive(),
  companyId: z.number().positive(),
  description: z.string().min(6),
});

export type IReport = z.infer<typeof ReportZodSchema>;