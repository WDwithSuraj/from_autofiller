import { z } from 'zod';

export const profileSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1).optional(),
});

export type Profile = z.infer<typeof profileSchema>;

export function isProfile(value: unknown): value is Profile {
  return profileSchema.safeParse(value).success;
}
