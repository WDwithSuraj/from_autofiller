import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { App } from '@/entrypoints/popup/app';

describe('App integration', () => {
  it('composes the first-run privacy shell into the popup app entrypoint', () => {
    const markup = renderToStaticMarkup(<App />);

    expect(markup).toContain('Setup required before autofill');
    expect(markup).toContain('No account or cloud sync in v1.');
    expect(markup).toContain('aria-describedby="popup-summary"');
    expect(markup).toContain('primary-action-desc');
  });
});
