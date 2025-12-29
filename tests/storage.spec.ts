import { test, expect } from '@playwright/test';

test('Saving storage - correct load', async ({ page }) => {

    const someName = 'Alex'

    await page.goto('FeedBackForm.html');

    const nameField = page.getByRole('textbox', { name: 'Name (required):' })

    await nameField.fill(someName);

    await page.getByRole('button', {
        name: 'Save Progress'
    }).click()

    await page.reload()

    await expect(nameField).toHaveValue(someName)

    // // use the debugger here to illustrate the structure of storage
    // const storage = await page.context().storageState()
    // const z = 5
});