import { describe, expect, it } from 'vitest';

import { extensionMetadata } from '@/shared/constants/extension-metadata';

describe('extensionMetadata', () => {
  it('uses the expected display name for the scaffold', () => {
    expect(extensionMetadata.displayName).toBe('from_autofiller');
  });

  it('keeps a stable storage namespace for future shared modules', () => {
    expect(extensionMetadata.storageNamespace).toBe('fromAutofiller');
  });
});
