import { describe, expect, it } from 'vitest';

import { placeholderContentScriptMatches } from '@/shared/constants/content-script-matches';

describe('placeholderContentScriptMatches', () => {
  it('keeps the scaffold content script scoped to a harmless placeholder host', () => {
    expect(placeholderContentScriptMatches).toEqual(['https://example.com/*']);
  });
});
