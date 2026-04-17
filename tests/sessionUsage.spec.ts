import{test,expect} from '@playwright/test';

//test.use({storageState:'auth/sessionStorage.json'});
test('Session Usag check', async({page}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    
});


