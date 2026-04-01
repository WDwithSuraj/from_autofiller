import type { NormalizedError } from './error-contract';

export interface AutofillResult {
  filledCount: number;
  unmatchedCount: number;
  error?: NormalizedError;
}
