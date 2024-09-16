/*describe('X-Cart Login Test', () => {
    it('Should display an error for invalid email and allow refilling the form', () => {
      // Visit the website
      cy.visit('https://demo.x-cart.com/demo_canada/home.php');
  
      // Click on the 'Sign In' link
      cy.get('#href_Sign_in')
        .should('be.visible')
        .click();
  
      // Clear the existing email from the username field and enter an invalid email
      cy.get('input#username')
        .clear() // Clear any pre-filled email
        .type('hi'); // Enter an invalid email
  
      // Enter a password
      cy.get('input#password').type('123');
  
      // Submit the form
      cy.contains('.button-left', 'Submit').click();
  
      // Assert that the "Email address is invalid" message is visible
      cy.get('div.xalertbox')
        .should('contain.text', 'Email address is invalid! Please correct')
        .should('be.visible');
  
        cy.get('button.ui-button.ui-corner-all.ui-widget')
        .contains('OK')
        .first()
        .click();
      
  
      // Refill the form with valid details
      cy.get('input#username')
        .clear() // Clear the invalid email
        .type('johndoe@example.com'); // Enter a valid email
  
      cy.get('input#password')
        .clear() // Clear the previous password entry
        .type('Password123'); // Enter a valid password
  
      // Submit the form again
     
      cy.contains('.button-left', 'Submit').click();
      // Optionally, you can assert the URL or page content to confirm successful login
      cy.url().should('include', '/home.php'); // Adjust this based on expected redirection after login
    });
  });*/
 describe('X-Cart Login Test', () => {
    it('Should display an error for invalid email and allow refilling the form', { retries: 2 }, () => {
      // Visit the website
      cy.visit('https://demo.x-cart.com/demo_canada/home.php');
  
      // Click on the 'Sign In' link
      cy.get('#href_Sign_in')
        .should('be.visible')
        .click();
  
      // Clear the existing email from the username field and enter an invalid email
      cy.get('input#username')
        .clear() // Clear any pre-filled email
        .type('hi'); // Enter an invalid email
  
      // Enter a password
      cy.get('input#password').type('123');
  
      // Submit the form
      cy.contains('.button-left', 'Submit').click();
  
      // Assert that the "Email address is invalid" message is visible
      cy.get('div.xalertbox')
        .should('contain.text', 'Email address is invalid! Please correct')
        .should('be.visible');
  
      // Click the "OK" button to close the alert
      cy.get('button.ui-button.ui-corner-all.ui-widget')
        .contains('OK')
        .first()
        .click();
      
      // Refill the form with valid details
      cy.get('input#username')
        .clear() // Clear the invalid email
        .type('johndoe@example.com'); // Enter a valid email
  
      cy.get('input#password')
        .clear() // Clear the previous password entry
        .type('Password123'); // Enter a valid password
  
      // Submit the form again
      cy.contains('.button-left', 'Submit').click();
      
      // Optionally, you can assert the URL or page content to confirm successful login
      cy.url().should('include', '/home.php'); // Adjust this based on expected redirection after login
    });
    it('Should handle registration, error messages, and existing email', () => {
      // Visit the website
      cy.visit('https://demo.x-cart.com/demo_canada/home.php');
  
      // Verify the 'Register' link is visible and click it
      cy.contains('a', 'Register')
        .should('be.visible')
        .click(); 

      // Try to submit the form without filling required fields
      cy.get('.button-left').click();

      // Check if the alert for missing 'First name' appears
      cy.get('div.xalertbox')
        .should('contain.text', "The required field 'First name' is empty!")
        .should('be.visible');

      // Click the "OK" button to close the alert
      cy.get('button.ui-button.ui-corner-all.ui-widget')
        .contains('OK')
        .click();

      // Now fill in the registration form
      cy.get('#firstname').type('John');
      cy.get('#lastname').type('Doe');
      cy.get('input#email').type('jonny@gmail.com'); // Use an email for registration
      cy.get('#passwd1').type('Password123');
      cy.get('#passwd2').type('Password123');
  
      // Check the "I accept the terms" checkbox
      cy.get('#accept_terms_register').check();

      // Click the 'Create account' button
      cy.get('.button-left').click();

      // Check if an alert for an already registered email appears
      cy.get('p.error-message')
      .should('contain.text', 'Email address already exists in the database!')
      .should('be.visible');

        // Clear the email field and enter a new email
        cy.get('input#email').clear().type('newemail@example.com');
  
        // Re-enter the password to avoid clearing it
        cy.get('#passwd1').clear().type('NewPassword123');
        cy.get('#passwd2').clear().type('NewPassword123');
  
        // Check the "I accept the terms" checkbox again
        cy.get('#accept_terms_register').check();
  
        // Click the 'Create account' button again
        cy.get('.button-left').click();
  
        // Optionally, assert that registration was successful by checking for a URL change or message
        cy.url().should('include', '/address_book.php')
    

      // Optionally, try again with a different email or handle accordingly
    });
});
/*describe('X-Cart Registration Test', () => {
    it('Should handle registration, error messages, and existing email', () => {
      // Visit the website
      cy.visit('https://demo.x-cart.com/demo_canada/home.php');
  
      // Verify the 'Register' link is visible and click it
      cy.contains('a', 'Register')
        .should('be.visible')
        .click(); 

      // Try to submit the form without filling required fields
      cy.get('.button-left').click();

      // Check if the alert for missing 'First name' appears
      cy.get('div.xalertbox')
        .should('contain.text', "The required field 'First name' is empty!")
        .should('be.visible');

      // Click the "OK" button to close the alert
      cy.get('button.ui-button.ui-corner-all.ui-widget')
        .contains('OK')
        .click();

      // Now fill in the registration form
      cy.get('#firstname').type('John');
      cy.get('#lastname').type('Doe');
      cy.get('input#email').type('jonny@gmail.com'); // Use an email for registration
      cy.get('#passwd1').type('Password123');
      cy.get('#passwd2').type('Password123');
  
      // Check the "I accept the terms" checkbox
      cy.get('#accept_terms_register').check();

      // Click the 'Create account' button
      cy.get('.button-left').click();

      // Check if an alert for an already registered email appears
      cy.get('p.error-message')
      .should('contain.text', 'Email address already exists in the database!')
      .should('be.visible');

        // Clear the email field and enter a new email
        cy.get('input#email').clear().type('newemail@example.com');
  
        // Re-enter the password to avoid clearing it
        cy.get('#passwd1').clear().type('NewPassword123');
        cy.get('#passwd2').clear().type('NewPassword123');
  
        // Check the "I accept the terms" checkbox again
        cy.get('#accept_terms_register').check();
  
        // Click the 'Create account' button again
        cy.get('.button-left').click();
  
        // Optionally, assert that registration was successful by checking for a URL change or message
        cy.url().should('include', '/address_book.php')
    

      // Optionally, try again with a different email or handle accordingly
    });
});*/
