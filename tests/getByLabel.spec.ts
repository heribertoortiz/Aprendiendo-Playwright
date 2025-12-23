import { test, expect } from "@playwright/test";

test('Get by label practice - inside forms', async ({ page }) => {
    await page.goto('FeedBackForm.html');

    const name = page.getByLabel('name');
    
    await name.fill('Heriberto');
    await name.clear();
    await name.fill('Mary');

    const email = page.getByLabel('email');
    await email.fill('mary@email.com');
})