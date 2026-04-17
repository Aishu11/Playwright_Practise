import{chromium, Browser, Page} from '@playwright/test';

(async () => {
    let browser: Browser = await chromium.launch({headless:false, channel:'chrome'});
    let page:Page = await browser.newPage();
    // await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    // await page.getByAltText('naveenopencart').click();

    await page.goto('https://naveenautomationlabs.com/opencart/ui/data-testid-page.html');
    await page.getByTestId('username-input').fill('Aishwarya'); //fpr test id attribute

    await page.waitForTimeout(3000);

    await page.getByPlaceholder('E-Mail Address').fill('aishuk6@gmail.com'); //for placeholder attribute

    await page.getByTitle('naveenopencart').click(); //for title attribute

    // await page.getByTitle// for title attribute
    // await page.getByText // for visible text -> like x-path we use text() function right like that..


})();




