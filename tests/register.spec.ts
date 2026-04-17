import{test,expect} from '@playwright/test';

test('Register User', async({page}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page.locator('//div[@class="list-group"]//a[text()="Register"]').click();
    await page.locator('#input-firstname').fill("Aishwarya");
    await page.locator('#input-lastname').fill('B');
    await page.getByPlaceholder('E-Mail').fill("12345");
    await page.locator("#input-telephone").fill("78965455");
    await page.locator("#input-password").fill("Test@1234");
    await page.locator("#input-confirm").fill("Test@1234");


})