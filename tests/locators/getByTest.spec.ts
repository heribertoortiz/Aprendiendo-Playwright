import { test, expect } from '@playwright/test';

test('Get by text practice', async ({ page }) => {
    await page.goto('FeedBackForm.html');

    const title = page.getByText('Feedback Form').first();
    await expect(title).toBeVisible();
});

test('Get by text practice - Hidden elements', async ({ page }) => {
    await page.goto('FeedBackForm.html');

    const hiddenButton = page.getByText('Hidden feature'); //Con getByText podremos encontrar elementos ocultos, con getByRol no es posible
    await expect(hiddenButton).not.toBeVisible();

    const hiddenButtonText = await hiddenButton.textContent();
    console.log(hiddenButtonText);

    // const hiddenButtonWithRole = page.getByRole('button', {
    //     name: 'Hidden feature'
    // });

    // const hiddenButtonWithRoleText = await hiddenButtonWithRole.textContent();
    // console.log(hiddenButtonWithRoleText);


});

test('Get by text practice - error messages', async ({ page }) => {
    await page.goto('FeedBackForm.html');

    const emailValidationMessage = page.getByText('Invalid email format'); //Con getByText podremos encontrar elementos ocultos, con getByRol no es posible
    await expect(emailValidationMessage).not.toBeVisible();

    await page.getByRole('textbox', {
        name: 'email',
    }).fill('jonh@');

    await expect(emailValidationMessage).toBeVisible();

});

