import { test, expect } from '@playwright/test';

test('Fill actions', async ({ page }) => {
    await page.goto('FeedBackForm.html');

    const nameField = page.getByRole('textbox', { name: 'Name (required):' })

    await nameField.fill('Heriberto');

    const emailField = page.getByRole('textbox', { name: 'Email (required):' })

    await emailField.fill('test@test.com');

});

test('Selection actions', async ({ page }) => { //Caso de prueba enfocado en acciones de selección
    await page.goto('FeedBackForm.html');

    const improvementInput = page.getByLabel('Areas for Improvement (optional):'); //Localizar el <select> por su label

    await improvementInput.selectOption('content'); //Seleccionar una opción (single select)

    await expect(improvementInput).toHaveValue('content'); //Verifica que el <select> tenga ese valor

    await improvementInput.selectOption(['presentation', 'timing']); //Multiselección (varias opciones)

    await expect(improvementInput).toHaveValues(['presentation', 'timing']); //Que el <select multiple> tenga exactamente esos valores
});

test('Click actions - with key down', async ({ page }) => {
    await page.goto('FeedBackForm.html');

    const improvementInput = page.getByLabel('Areas for Improvement (optional):'); //Localizar el <select> por su label

    const firstOption = improvementInput.getByRole('option').first(); //Obtener opciones del <select>
    const secondOption = improvementInput.getByRole('option').nth(1);

    await firstOption.click(); //Selecciona la primera opción

    await expect(improvementInput).toHaveValue('content'); //Verifica que el <select> tenga ese valor

    await secondOption.click({ //Click con tecla modificadora (Control)
        modifiers: ['Control']  //Ctrl + Click
    });

    await expect(improvementInput).toHaveValues(['content', 'presentation']); //Que el <select multiple> tenga exactamente esos valores
})