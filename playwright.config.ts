import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  webServer: {
    command: 'npm start', //Indicamos que se inicie automaticamente el servidor web a traves de la url local
    url: 'http://localhost:5000/',
    reuseExistingServer: true
  },
  use: {
    baseURL: 'http://localhost:5000/', //Al iniciar la ejecución de la prueba automaticamente se redirecciona a la url especificada
    headless: false
  }
});
