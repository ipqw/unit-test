const assert = require('chai').assert;

describe('example store', async function() {
    it('должен найти example store', async function() {
        await this.browser.url('http://localhost:3000/hw/store/');
        
        await this.browser.assertView('plain', '.Application', {
            compositeImage: true,
        });

        const title = await this.browser.$('.display-3').getText();
        assert.equal(title, 'Welcome to Example store!');
    });
    it('должен найти catalog', async function() {
        await this.browser.url('http://localhost:3000/hw/store/catalog');
        
        await this.browser.assertView('plain', '.Application', {
            compositeImage: false,
        });

        const title = await this.browser.$('.col h1').getText();
        assert.equal(title, 'Catalog');
    });
    it('должен найти delivery', async function() {
        await this.browser.url('http://localhost:3000/hw/store/delivery');
        
        await this.browser.assertView('plain', '.Application', {
            compositeImage: true,
        });

        const title = await this.browser.$('.col h1').getText();
        assert.equal(title, 'Delivery');
    });
    it('должен найти contacts', async function() {
        await this.browser.url('http://localhost:3000/hw/store/contacts');
        
        await this.browser.assertView('plain', '.Application', {
            compositeImage: true,
        });

        const title = await this.browser.$('.col h1').getText();
        assert.equal(title, 'Contacts');
    });
    it('должен найти shopping cart', async function() {
        await this.browser.url('http://localhost:3000/hw/store/cart');
        
        await this.browser.assertView('plain', '.Application', {
            compositeImage: true,
        });

        const title = await this.browser.$('.col h1').getText();
        assert.equal(title, 'Shopping cart');
    });
});