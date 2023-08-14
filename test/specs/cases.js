

import loginPage from '../pageobjects/login.page.js';


//import SecurePage from '../pageobjects/secure.page.js';


before.skip(async () => {
  await browser.url('http://zero.webappsecurity.com/');
  await browser.maximizeWindow();
  await browser.pause(4000);
 
});

 afterEach.skip(async () => {
  await browser.pause(4000);
 
});


describe.skip('Login Flow', () => {
 
    it('user will write wrong credentials', async () => {
     
      const loginButton = await $('//*[@id="signin_button"]');
      await loginButton.click();
      const username = await $('//*[@id="user_login"]');
      await username.setValue("test")
      const password = await $('//*[@id="user_password"]');
      await password.setValue("test")
      const signinButton = await $('//*[@id="login_form"]/div[2]/input');
      await signinButton.click();
      const element = await browser.$('//*[@id="login_form"]/div[1]');
      await element.click();
      const errorMessage = await $(".alert.alert-error");
      await errorMessage.waitForExist();
      await expect(errorMessage).toHaveTextContaining('Login and/or password are wrong.')
     
    });
    it('Forgotten Password reset', async () => {
      const forgetenPassword = await $('/html/body/div[1]/div[2]/div/div/div/a');
      await forgetenPassword.click();
      const emailBox = await $('//*[@id="user_email"]');
      await emailBox.setValue("eslamgamal19933@gmail.com");
      const sendPassword = await $('//*[@id="send_password_form"]/div[2]/input');
      await sendPassword.click();

    }); 
    it('user will write in the search box', async () => {
      const searchBox = await $('//*[@id="searchTerm"]');
      await searchBox.setValue("Bank");
      // Use browser.keys() to simulate pressing the Enter key
      await browser.keys('Enter');
      const result = await $('/html/body/div[1]/div[2]/div/h2');
      await expect(result).toHaveTextContaining('Search Results:')
      await browser.pause(4000);

    });
    it('user will fill out the Feedback form', async () => {
      const feedBack = await $('//*[@id="feedback"]/div/strong');
      await feedBack.click();
      await browser.pause(4000);
      const name = await $('//*[@id="name"]');
      await name.setValue("Islam Ibrahim");
      const email = await $('//*[@id="email"]');
      await email.setValue("eslamgamal19933@gmail.com");
      const subject = await $('//*[@id="subject"]');
      await subject.setValue("my Feedback about the service ");
      const boxforFeedback = await $('//*[@id="comment"]');
      await boxforFeedback.setValue("my Feedback about the service is not that good. The service is bad ");
      const sendMessageButton = await $('/html/body/div[1]/div[2]/div/div/div/form/div[2]/input[1]');
      await sendMessageButton.click();

    });

    
}); 









