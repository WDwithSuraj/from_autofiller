import { defineConfig } from 'wxt';

export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  srcDir: 'src',
  targetBrowsers: ['chrome'],
  manifestVersion: 3,
  manifest: {
    name: 'from_autofiller',
    description: 'Local-only job application autofill extension scaffold.',
    permissions: ['storage'],
  },
});
