import { test, expect } from "@playwright/test";

test('Verificar que se muestre el titulo de la pagina', async ({ page }) => {
    await page.goto('/');

    const encabezadoServicios = page.getByRole('heading', { name: 'Our Services', exact: true });
    await expect(encabezadoServicios).toBeVisible();
})

test('Get by role - list', async ({ page }) => { //async porque casi todas las acciones son asíncronas
    await page.goto('/'); //baseURL configurado en playwright.config.ts

    const servicesList = page.getByRole('list');
    await expect(servicesList).toBeVisible();

    const serviceItems = await servicesList.getByRole('listitem').all();

    for (const item of serviceItems) { //recorre cada elemento de la lista
        const itemText = await item.textContent(); //textContent() devuelve el texto del elemento
        expect(itemText).toBeTruthy(); //toBeTruthy() verifica que; no sea nulo, que no sea un string vacio
    }
});

test('Get by role - Buttons', async ({ page }) => {
    await page.goto('/');

    const acceptCookiesButton = page.getByRole('button', {
        name: 'Accept',
        exact: true
    });
    const declineCookiesButton = page.getByRole('button', {
        name: 'decline'
    });
    await acceptCookiesButton.click();
    await expect(acceptCookiesButton).not.toBeVisible();
    await expect(declineCookiesButton).not.toBeVisible();
});