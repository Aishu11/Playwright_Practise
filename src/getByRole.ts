import{chromium, Browser, Page} from '@playwright/test';

(async () => {
    let browser: Browser = await chromium.launch({headless:false, channel:'chrome'});
    let page:Page = await browser.newPage();
    
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //1. TextBox should have a <label> tag or <aria-label> attribute
    await page.getByRole('textbox', {name: 'First Name'}).fill('Aish');
    await page.getByRole('textbox' , {name:'Telephone'}).fill('+91-9790481488');

    //2. getByRole with Radiobutton
    await page.getByRole('radio', {name: 'Yes'}).click();

    //3. css locator
    await page.locator(`input[name='agree']`).click();

    //4. getByRole with link
    await page.getByRole('link', {name:'Forgotten Password'}).click

    //5. getByRolewith Headers Role here is -> heading
    await page.getByRole('heading' ,{name:'Register Account'}).textContent();

})();