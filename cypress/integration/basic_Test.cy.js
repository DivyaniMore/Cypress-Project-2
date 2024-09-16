describe('X-Cart Demo Website Test', () => {

    it('Checks logo images, sign in, register, and language dropdown interactions', () => {
      
      // Visit the X-Cart demo website
      cy.visit('https://demo.x-cart.com/demo/home.php');
    
      // Check if logo with alt="Your Company Name" is displayed using XPath
      cy.xpath('//img[@alt="Your Company Name"]').should('be.visible');
    
      // Check if the second logo with alt="X-Cart" is displayed using a CSS selector
      cy.get('img[alt="X-Cart"]').should('be.visible');
    
      // Click on the 'Sign in' link and close the modal
      cy.get('#href_Sign_in')
        .should('be.visible')
        .click();
      
      // Close the Sign In modal
      cy.get('button[title="Close"]')
        .should('be.visible')
        .click();
    
      // Click on the 'Register' link
      cy.contains('a', 'Register')
        .should('be.visible')
        .click();
    
      // Verify navigation to the Register page
      cy.url().should('include', '/register.php');
    
      // Go back to the homepage
      cy.go('back');
    });
  
    it('Verifies visibility and navigation of Apparel, Toys, iGoods, Books, and Computer hardware links', () => {
    
      // Visit the website
      cy.visit('https://demo.x-cart.com/demo_canada/home.php');
    
      // Check 'Apparel (8)' link, click, and go back
      cy.xpath("//a[normalize-space()='Apparel (8)']")
        .should('be.visible')
        .click();
      cy.url().should('include', '/Apparel'); // Verify navigation
      cy.go('back'); // Go back to home page
    
      // Check 'Toys' link, click, and go back
      cy.xpath("//a[normalize-space()='Toys']")
        .should('be.visible')
        .click();
      cy.url().should('include', '/Toys-c-5'); // Verify navigation
      cy.go('back');
    
      // Check 'iGoods (1)' link, click, and go back
      cy.xpath("//a[normalize-space()='iGoods (1)']")
        .should('be.visible')
        .click();
      cy.url().should('include', '/iGoods'); // Verify navigation
      cy.go('back');
    
      // Check 'Books (7)' link, click, and go back
      cy.xpath("//a[normalize-space()='Books (7)']")
        .should('be.visible')
        .click();
      cy.url().should('include', '/Books'); // Verify navigation
      cy.go('back');
    
      // Check 'Computer hardware (1)' link, click, and go back
      cy.xpath("//a[normalize-space()='Computer hardware (1)']")
        .should('be.visible')
        .click();
      cy.url().should('include', '/Computer-hardware'); // Verify navigation
      cy.go('back');
    });
  });
