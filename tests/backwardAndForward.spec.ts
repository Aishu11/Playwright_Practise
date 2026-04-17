import {test,expect} from '@playwright/test';

test('Backward and Forward Button Simulation Test', async({page}) => {
    await page.goto('https://playwright.dev/');
    console.log("Title is:"+ await page.title());
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    console.log(await page.title());
    await page.goBack();
     console.log(await page.title());
     await page.goForward();
     console.log(await page.title());
      await page.goBack();
     console.log(await page.title());

     await page.waitForTimeout(5000);

     await page.reload();
});