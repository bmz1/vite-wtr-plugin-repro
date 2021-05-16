import { puppeteerLauncher } from '@web/test-runner-puppeteer';
import vitePlugin from 'vite-web-test-runner-plugin';


export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  files: 'src/**/*.test.js',
  nodeResolve: true,
  browserLogs: true,

  plugins: [vitePlugin()],
  coverageConfig: {
    include: ['src/**/*.js'],
    report: true,
    reporters: ['lcov', 'cobertura'],
  },

  /** Browsers to run tests on */
  ...(process.env.DOCKER && {
    browsers: [
      puppeteerLauncher({
        launchOptions: {
          args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
          executablePath: 'google-chrome-stable',
        },
      }),
    ],
  }),

  // See documentation for all available options
});
