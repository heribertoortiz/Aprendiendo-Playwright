import { test, expect } from '@playwright/test';

test('Saving storage - data is cleared - accept dialog', async ({ page }) => { //Saving storage → contexto técnico -- data is cleared → resultado esperado --accept dialog → interacción clave

    page.on('dialog', dialog => { //Manejo automático del diálogo del navegador
        dialog.accept();
    })

    const someName = 'Alex';

    await page.goto('FeedBackForm.html');

    const nameField = page.getByRole('textbox', { name: 'Name (required):' }); //Localización del campo “Name”

    await nameField.fill(someName); //Ingreso de datos en el formulario

    await page.getByRole('button', { //Guardar progreso (persistencia en storage)
        name: 'Save Progress'
    }).click();

    await page.reload(); //validar persistencia con reload

    await page.getByRole('button', { //Limpiar progreso (dispara diálogo)
        name: 'Clear Progress'
    }).click();

    await page.reload(); //El storage fue realmente limpiado

    await expect(nameField).toBeEmpty(); //Assertion final: el campo debe estar vacío

});

test('Saving storage - data is cleared - reject dialog', async ( { page }) => { //validar que los datos NO se eliminan cuando el usuario rechaza el diálogo de confirmación
    
    page.on('dialog', dialog => { //registra un listener de eventos para diálogos nativos del navegador.
        if (dialog.message().includes('clear the form')) {
            dialog.dismiss();
            return
        }
        dialog.accept();
    });

    const someName = 'Alex';

    await page.goto('FeedBackForm.html');

    const nameField = page.getByRole('textbox', { name: 'Name (required):' }); //Localización del campo “Name”

    await nameField.fill(someName); //Ingreso de datos en el formulario

    await page.getByRole('button', { //Guardar progreso (persistencia en storage)
        name: 'Save Progress'
    }).click();

    await page.reload(); //validar persistencia con reload

    await page.getByRole('button', { //Intento de limpiar progreso (dispara diálogo)
        name: 'Clear Progress'
    }).click();

    await page.reload();

    await expect(nameField).toHaveValue(someName); //Assertion final: el valor DEBE permanecer
});