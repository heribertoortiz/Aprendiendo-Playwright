import { test, expect } from "@playwright/test";

test('Locate by CSS selectors practices', async ({ page }) => {
    await page.goto('/');

    const welcomeMessage = page.locator('header').locator('h1');
    const welcomeMessageText = await welcomeMessage.textContent();
    expect (welcomeMessageText).toBe('Welcome to Cool events!');
    // header,
    //     h1 {
    //     text - align: center;
    // }


    const welcomeMessage2 = page.locator('header >h1');
    const welcomeMessage2Text = await welcomeMessage2.textContent();
    expect (welcomeMessage2Text).toContain('Welcome');
    // header,
    //     h1 {
    //     text - align: center;
    // }
    

    //select by css id
    const cookieBanner = page.locator('#cookie-banner');
    await expect(cookieBanner).toBeVisible();
    // #cookie - banner {
    //     position: fixed;
    //     bottom: 0;
    //     left: 0;
    //     right: 0;
    //     background - color: #333;
    //     color: white;
    //     padding: 10px;
    //     text - align: center;
    //     display: none;
    // }

    //Select by css class
    const acceptButton = page.locator('.accept');
    await acceptButton.click();
    await expect(cookieBanner).not.toBeVisible();
    // #cookie - banner.accept {
    //     background - color: #4CAF50;
    //     color: white;
    // }
    
})