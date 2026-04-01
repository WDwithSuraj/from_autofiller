import type { NormalizedError } from '@/shared/contracts/error-contract';

export function normalizeError(error: unknown): NormalizedError {
  if (error instanceof Error) {
    return {
      code: 'unknown_error',
      message: error.message,
    };
  }

  return {
    code: 'unknown_error',
    message: 'An unknown error occurred.',
  };
}
