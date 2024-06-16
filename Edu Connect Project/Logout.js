describe('Logout functionality', () => {
    it('System testting', () => {
        // Visit the link
        cy.visit('https://edu-connect-kappa.vercel.app/')

        // Log in process
        cy.contains('Login').click()
        cy.xpath('//input[@name="email"]').type('sistiyak315@gmail.com')
        cy.xpath('//input[@name="password"]').type('774583')
        cy.xpath('//button[@type="submit"]').click()
      
        // Wait for login to complete and home page to load
        cy.wait(4000)

        //To logout the application
        cy.contains('Logout').click()
        cy.wait(2000)


    });
});