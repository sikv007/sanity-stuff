import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  app: {
    organizationId: 'oLnmMFVYQ',
    entry: './src/App.tsx',
  },
  server: {
    port: 3334,
  },
});
