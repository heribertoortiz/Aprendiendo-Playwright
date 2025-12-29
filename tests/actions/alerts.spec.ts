import { test, expect } from '@playwright/test';

test.fail('Saving storage - data is cleared', async ({ page }) => {

    const someName = 'Alex';

    await page.goto('FeedBackForm.html');

    const nameField = page.getByRole('textbox', { name: 'Name (required):' });

    await nameField.fill(someName);

    await page.getByRole('button', {
        name: 'Save Progress'
    }).click();

    await page.reload();

    await page.getByRole('button', {
        name: 'Clear Progress'
    }).click();

    await page.reload();

    await expect(nameField).toBeEmpty();

});