
class LoginPage {
    get usernameInput() {
        return $('#user-name');
    }

    get passwordInput() {
        return $('#password');
    }

    get loginButton() {
        return $('#login-button');
    }

    async login(username, password) {
        await this.usernameInput.setValue(username);
        await browser.pause(4000);
        await this.passwordInput.setValue(password);
        await browser.pause(4000);
        await this.loginButton.click();
        await browser.pause(4000);
    }
}

export default new LoginPage();