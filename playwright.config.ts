import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  fullyParallel: true,
  workers: 3,
  webServer: {
    command: 'npm start', //Indicamos que se inicie automaticamente el servidor web a traves de la url local
    url: 'http://localhost:5000/',
    reuseExistingServer: true
  },
  use: {
    baseURL: 'http://localhost:5000/', //Al iniciar la ejecución de la prueba automaticamente se redirecciona a la url especificada
    headless: false
    // locale: 'en-GB'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], },
      dependencies:[
        'auth-setup'
      ]
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      dependencies:[
        'auth-setup'
      ]
    },
    {
      name: 'auth-setup',
      testMatch: 'tests/setup/Auth.setup.ts',
    }
  ]
});
