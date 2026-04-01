import { describe, expect, it } from 'vitest';

import { isProfile, profileSchema } from '@/shared/schemas/profile-schema';

describe('profileSchema', () => {
  it('accepts the baseline placeholder profile shape', () => {
    const result = profileSchema.safeParse({
      fullName: 'Taylor Applicant',
      email: 'taylor@example.com',
    });

    expect(result.success).toBe(true);
  });

  it('rejects invalid email values', () => {
    expect(
      profileSchema.safeParse({
        fullName: 'Taylor Applicant',
        email: 'not-an-email',
      }).success,
    ).toBe(false);
  });

  it('keeps the type guard aligned with the zod schema', () => {
    expect(
      isProfile({
        fullName: 'Taylor Applicant',
        email: 'taylor@example.com',
      }),
    ).toBe(true);
  });
});
