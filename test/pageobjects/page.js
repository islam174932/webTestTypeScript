/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
 class Homepage {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
      async open () {
        await browser.url('https://www.saucedemo.com/');
        await browser.maximizeWindow();
    }

    async closeThepage () {
        await browser.pause(4000);
    }
     
    async takeScreenShoot (path) {
        await browser.saveScreenshot(path);
    }

}

export default new Homepage();;
