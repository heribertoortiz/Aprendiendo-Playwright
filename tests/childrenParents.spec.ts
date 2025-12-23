import { test, expect } from "@playwright/test";

test('Child locators', async ({ page }) => {
    await page.goto('/');

    const servicesList = page.getByRole('list'); //Localizar el elemento padre (list)
    const serviceItems = await servicesList.getByRole('listitem').all(); //Localizar elementos hijos (listitem)
    expect (serviceItems.length).toBeGreaterThan(0); //Validar que la lista no esté vacía

    // Flujo completo del test
    // 1. Abre la página
    // 2. Encuentra la lista
    // 3. Busca sus elementos hijos
    // 4. Cuenta cuántos hay
    // 5. Valida que no esté vacía
    
    //With css locator
    const serviceItems2 = await page.locator('ul > li').all(); //Selecciona todos los <li> que son hijos directos de un <ul>
    for (const item of serviceItems2){  //Recorre cada <li> -- Forma correcta de iterar con async/await
        console.log(await item.textContent()); //Obtener el texto de cada item
    }
});

test('Parent locators', async ({ page }) => {
    await page.goto('/');

    const acceptCookiesButton = page.getByTestId('accept-cookies'); //Localizar el botón (hijo)
    const cookiesBanner = acceptCookiesButton.locator('..'); //Subir al elemento padre - sube un nivel en el DOM” -- Devuelve el padre directo del botón

    await acceptCookiesButton.click();
    await expect(cookiesBanner).not.toBeVisible(); //Valida que el banner completo desaparezca

    
});

test('Traer el tercer elemento de la lista - list items', async ({ page }) => {
    await page.goto('/');

    const listItems = page.getByRole('listitem'); //Localizar todos los listitem
    const thirdItem = listItems.nth(2); //Obtener el tercer elemento
    
    console.log(await thirdItem.textContent()); //Se ejecuta el método -- Devuelve string | null --Se imprime el texto real del <li>
   
});