import {test,expect} from '@playwright/test';

test('Check Page title', async ({page}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    let title:string= await page.title();
    console.log("Title:" + title);
})

test('Check Page URL', async ({page}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    let url:String = await page.url();
    console.log("Page URL is:" + url);
})
