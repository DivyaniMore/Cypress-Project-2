describe('X-Cart Register and Login Test', () => {
    it('Should register a new user and log in', () => {
      // Visit the website
      cy.visit('https://demo.x-cart.com/demo_canada/home.php');
  
      // Verify the 'Register' link is visible and click it
      cy.contains('a', 'Register')
        .should('be.visible')
        .click();
  
      // Fill out the registration form
      cy.get('#firstname').type('John');
      cy.get('#lastname').type('Doe');
      cy.get('input#email').type('jonny@gmail.com'); // Use the same email for login later
      cy.get('#passwd1').type('Password123');
      cy.get('#passwd2').type('Password123');
      
      // Check the "I accept the terms" checkbox
      cy.get('#accept_terms_register').check();
  
      // Click the 'Create account' button
      cy.get('.button-left').click();
      cy.url().should('include', '/address_book.php');
      
   

      });
      it('Should select Customer, go to sign-in, and clear the previous email', () => {
      // Visit the website
      cy.visit('https://demo.x-cart.com/demo_canada/home.php');
  
      // Select "Customer" from the dropdown
      cy.get('select[name="demo_area"]').select('C'); // "C" represents "Customer"
  
      // Click on the 'Sign in' link
      cy.get('#href_Sign_in')
        .should('be.visible')
        .click();
  
      // Clear the existing email from the username field
      cy.get('input#username')
        .clear() // Clear any pre-filled email
        .type('jonny@example.com'); // Enter a new email
  
      // Optionally, you can enter the password as well and log in
      cy.get('input#password').type('Password123');
  
      // Click on the 'Submit' button to log in
      cy.contains('.button-left', 'Submit').click();
      cy.get('button[title="Close"]')
        .should('be.visible')
        .click();
  
      // Verify the user is redirected to the homepage after login
      cy.url().should('include', '/home.php');
    });
    it('Should search, add a product to cart, and complete checkout', () => {
      // Visit the website
      cy.visit('https://demo.x-cart.com/demo_canada/home.php');
  
      cy.get('input[name="posted_data[substring]"]')
      .first() // Use .first() to make sure only the first matching input is selected
      .clear() // Clear the input field
      .type('toys'); // Type 'toys' into the input field

  // Click the 'Search' button forcefully to submit the form
  cy.get('button.search-button[type="submit"]').first().click({ force: true }); 
      // Ensure the product image is visible and click on it
      cy.xpath("//body/div[@id='page-container']/div[@id='page-container2']/div[@id='content-container']/div[@id='content-container2']/div[@id='center']/div[@id='center-main']/div[@class='dialog products-dialog list-dialog']/div[@class='content']/div[@class='products products-list products-div']/div[2]/div[1]/div[1]/div[1]")
        .find('img')
        .should('be.visible')
        .click(); // Click on the product image
  
      // Check product availability and select quantity
      cy.get('#product_avail').should('be.visible');
      cy.get('select#product_avail').select('2'); // Select 2 as quantity
  
      // Add the product to the cart
      cy.get('button[title="Add to cart"]').click();
      
      // Proceed to checkout in the popup
      cy.get('a.proceed-to-checkout').click();
  
      // Fill out the checkout form
      cy.get('#b_firstname').type('John');
      cy.get('#b_lastname').type('Doe');
      cy.get('#b_address').type('123 Cypress St');
      cy.get('#email').type('johndoe@example.com');
  
      // Submit the checkout form
      cy.get('button[title="Submit"]').click();
  
      // Verify the payment step is visible
      cy.get('div[id="opc_payment"] h2').should('be.visible');
  
      // Verify the payment method is available and shipping options are visible
      cy.get('label[for="pm4"]').should('be.visible'); // Check payment method label
      cy.get('label[for="shipping82"]').should('be.visible'); // Check shipping option label
  
      // Accept terms and conditions
      cy.get('#accept_terms').check();
  
      // Submit the order
      cy.get('.button-left').click();
  
      // Verify the confirmation message
      cy.get('div[class="title"] h2').should('contain.text', 'Confirmation');
    });
  });
  /*describe('X-Cart Shopping and Checkout Test', () => {
    it('Should search, add a product to cart, and complete checkout', () => {
      // Visit the website
      cy.visit('https://demo.x-cart.com/demo_canada/home.php');
  
      cy.get('input[name="posted_data[substring]"]')
      .first() // Use .first() to make sure only the first matching input is selected
      .clear() // Clear the input field
      .type('toys'); // Type 'toys' into the input field

  // Click the 'Search' button forcefully to submit the form
  cy.get('button.search-button[type="submit"]').first().click({ force: true }); 
      // Ensure the product image is visible and click on it
      cy.xpath("//body/div[@id='page-container']/div[@id='page-container2']/div[@id='content-container']/div[@id='content-container2']/div[@id='center']/div[@id='center-main']/div[@class='dialog products-dialog list-dialog']/div[@class='content']/div[@class='products products-list products-div']/div[2]/div[1]/div[1]/div[1]")
        .find('img')
        .should('be.visible')
        .click(); // Click on the product image
  
      // Check product availability and select quantity
      cy.get('#product_avail').should('be.visible');
      cy.get('select#product_avail').select('2'); // Select 2 as quantity
  
      // Add the product to the cart
      cy.get('button[title="Add to cart"]').click();
      
      // Proceed to checkout in the popup
      cy.get('a.proceed-to-checkout').click();
  
      // Fill out the checkout form
      cy.get('#b_firstname').type('John');
      cy.get('#b_lastname').type('Doe');
      cy.get('#b_address').type('123 Cypress St');
      cy.get('#email').type('johndoe@example.com');
  
      // Submit the checkout form
      cy.get('button[title="Submit"]').click();
  
      // Verify the payment step is visible
      cy.get('div[id="opc_payment"] h2').should('be.visible');
  
      // Verify the payment method is available and shipping options are visible
      cy.get('label[for="pm4"]').should('be.visible'); // Check payment method label
      cy.get('label[for="shipping82"]').should('be.visible'); // Check shipping option label
  
      // Accept terms and conditions
      cy.get('#accept_terms').check();
  
      // Submit the order
      cy.get('.button-left').click();
  
      // Verify the confirmation message
      cy.get('div[class="title"] h2').should('contain.text', 'Confirmation');
    });
  });*/
  