import { test, expect } from '@playwright/test';

test('Saving cookies - user actions - accept cookies', async ({ page }) => {
    await page.goto('/');

    const acceptCookiesButton = page.getByRole('button', {
        name: 'Accept'
    });

    await acceptCookiesButton.click();

    //Afirmar que el banner de cookies no es visible
    const cookieBanner = acceptCookiesButton.locator('..');
    await expect(cookieBanner).not.toBeVisible();
});



test('Saving cookies - user actions - decline cookies', async ({ page }) => {
    // 1️⃣ Navegar a la aplicación
    await page.goto('/');

    // 2️⃣ Localizar el botón "Decline" usando rol accesible
    const declineCookiesButton = page.getByRole('button', {
        name: 'Decline'
    });

    // 3️⃣ Click en declinar cookies
    await declineCookiesButton.click();

    // 4️⃣ Obtener el banner de cookies (padre del botón)
    const cookieBanner = declineCookiesButton.locator('..');

    // 5️⃣ Afirmar que el banner ya no es visible
    await expect(cookieBanner).not.toBeVisible();

    await page.reload();

    await expect(cookieBanner).toBeVisible();
});
