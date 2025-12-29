import { test, expect } from '@playwright/test';

test.use({
    storageState: {
        cookies: [], //not working
        origins: [
            {
                origin: 'http://localhost:5000/',
                localStorage: [{
                    name: 'name',
                    value: 'Alex'
                }]
            }
        ]
    }
});

test('Storage - load from configuration', async ( { page }) => {
    await page.goto('FeedBackForm.html');

    const nameField = page.getByRole('textbox', { name: 'Name (required):' })

    await expect(nameField).toHaveValue('Alex');
})