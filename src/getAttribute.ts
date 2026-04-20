import{test,expect, chromium,Browser, Page} from '@playwright/test';

(async() => {
    let browser:Browser = await chromium.launch({headless:false, channel:'chrome'});
    let page:Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await page.locator('#input-email').fill('aishuk6@gmail.com');

    //To get the attribute of the locator we can use getAttribute method
    //In this we have an attribute named 'name' so using get attribute we can get the attribute value of it.
    //<input type="text" name="email" value="" placeholder="E-Mail Address" id="input-email" class="form-control" fdprocessedid="9jyv1j">
    
    let name:string|null = await page.locator('#input-email').getAttribute('name');
    console.log("Attribute name:"+ name);

    //Placeholder attribute
    let placeholder:string|null = await page.locator('#input-email').getAttribute('placeholder');
    console.log(placeholder);

    //To get the entered value - we use inputvalue method.
    let enteredvalue:string|null = await page.locator('#input-email').inputValue();
    console.log('Entered vAlue is:' + enteredvalue);

})();