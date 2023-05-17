import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { sentryVitePlugin } from '@sentry/vite-plugin';

export default defineConfig(({ command, mode }) => {
  // https://vitejs.dev/config/
  const env = loadEnv(mode, process.cwd(), '');
  return {
    build: {
      sourcemap: true // Source map generation must be turned on
    },
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin']
        }
      }),
      // Put the Sentry vite plugin after all other plugins
      // sentryVitePlugin({
      //   // org: 'openai-remix',
      //   // project: 'javascript-react',

      //   project: 'javascript-react',
      //   org: 'sentry',
      //   url: 'https://scefali.ngrok.io/',

      //   // Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
      //   // and need `project:releases` and `org:read` scopes
      //   authToken: env.SENTRY_AUTH_TOKEN,


      //   sourcemaps: {
      //     // Specify the directory containing build artifacts
      //     assets: './dist/**'
      //   }

      //   // Use the following option if you're on an SDK version lower than 7.47.0:
      //   // include: "./dist",

      //   // Optionally uncomment the line below to override automatic release name detection
      //   // release: env.RELEASE,
      // })
    ]
  };
});
