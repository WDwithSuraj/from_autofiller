import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { PopupShell } from '@/entrypoints/popup/popup-shell';

describe('PopupShell', () => {
  it('renders the first-run popup shell with setup and privacy messaging', () => {
    const markup = renderToStaticMarkup(<PopupShell />);

    expect(markup).toContain('aria-labelledby="popup-title"');
    expect(markup).toContain('aria-label="Readiness overview"');
    expect(markup).toContain('aria-label="Secondary actions"');
    expect(markup).toContain('from_autofiller');
    expect(markup).toContain('Profile status');
    expect(markup).toContain('Privacy status');
    expect(markup).toContain('Setup required before autofill');
    expect(markup).toContain('Create my profile');
    expect(markup).toContain('Your profile stays in this browser only.');
    expect(markup).toContain('No account or cloud sync in v1.');
    expect(markup).toContain('Report issue');
    expect(markup).toContain('aria-describedby="popup-summary"');
    expect(markup).toContain('id="status-grid-summary"');
    expect(markup).toContain('aria-describedby="status-grid-summary"');
    expect(markup).toContain('aria-describedby="primary-action-desc"');
    expect(markup).toContain('aria-describedby="secondary-why-setup-desc"');
    expect(markup).toContain('aria-describedby="secondary-report-issue-desc"');
    expect(markup).toContain('id="privacy-panel-description"');
    expect(markup).toContain('class="sr-only"');
  });

  it('defines focus-visible and dark-theme styling hooks for the popup shell', () => {
    const stylesheet = readFileSync(
      resolve(process.cwd(), 'src/styles/tailwind.css'),
      'utf8',
    );

    expect(stylesheet).toContain('.primary-button:focus-visible');
    expect(stylesheet).toContain('.secondary-button:focus-visible');
    expect(stylesheet).toContain('@media (prefers-color-scheme: dark)');
    expect(stylesheet).toContain('--accent: #53c1cb;');
    expect(stylesheet).toContain('.sr-only');
    expect(stylesheet).toContain('.secondary-actions__item button');
  });
});
