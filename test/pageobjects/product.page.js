
class ProductPage {
    get item() {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get cartProduct() {
        return $('#shopping_cart_container a');
    }

    get removeProduct() {
        return $('#remove-sauce-labs-backpack');
    }

    get menu() {
        return $('#react-burger-menu-btn');
    }

    async orderProduct() {
        await this.item.click();
        await browser.pause(4000);
        await this.cartProduct.click();
        await browser.pause(4000);
        await this.removeProduct.click();
        await browser.pause(4000);
        await this.menu.click();
    }
}

export default new ProductPage();
