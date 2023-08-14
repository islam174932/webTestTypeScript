
class LogoutPage {
    get logoutButton() {
        return $('//*[@id="logout_sidebar_link"]');
    }

    async logout() {
        await this.logoutButton.click();
     
    }


}

export default new LogoutPage();