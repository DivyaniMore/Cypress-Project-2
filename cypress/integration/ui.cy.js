describe('UI and Visual Tests for X-Cart Demo', () => {
    it('should render all UI components correctly', () => {
      // Visit the X-Cart demo page
      cy.viewport(375, 667); 
      cy.visit('https://demo.x-cart.com/demo_canada/home.php');
  
      // Check that the logo is visible and exists
      cy.get('img[alt="Your Company Name"]')
        .should('be.visible')
        .and('exist');
  
      // Check that the welcome image is visible
      cy.get('img[alt="X-Cart"][title=""]')
        .should('be.visible')
        .and('exist');

        
      // Check that the 'Download' link is visible
      cy.contains('a', 'Download')
        .should('be.visible')
        .and('have.attr', 'href', 'https://img.x-cart.com/software/x-cart-4.7.13goldplus.tgz');
  
   
  
      // Take a screenshot for visual testing
      cy.screenshot('xcart-homepage-screenshot');
    });
  });
  