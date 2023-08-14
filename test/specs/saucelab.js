import loginPage from '../pageobjects/login.page.js';
import productPage from '../pageobjects/product.page.js';
import logoutPage from '../pageobjects/logout.page.js';
import HomepageOpen from '../pageobjects/page.js';

before(async () => {
    await HomepageOpen.open();
});

afterEach(async () => {
    await HomepageOpen.closeThepage();
});

describe('Sauce Lab demo scenarios', () => {
    it('user will order a product', async () => {
        // Assuming the loginPage.login method is implemented to log in successfully.
        await loginPage.login('standard_user', 'secret_sauce');
        await browser.pause(4000);

        // Assuming the productPage.orderProduct method is implemented.
        await productPage.orderProduct();
        await HomepageOpen.takeScreenShoot("C:\\Users\\User\\Desktop\\New folder\\page.png");
        await browser.pause(4000);
        await logoutPage.logout();
        
    });
});




