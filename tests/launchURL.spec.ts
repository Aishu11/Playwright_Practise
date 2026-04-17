import{test,expect} from '@playwright/test';

test('Launch URL Test', async({page}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login' ,{waitUntil: 'load'});
    let title:String = await page.title();
    console.log("Title is:" + title);
})