describe('Quiz functionality', () => {
    it('Page loading check', () => {

        // Visit the link
        cy.visit('https://edu-connect-kappa.vercel.app/')

        // Log in process
        cy.contains('Login').click()
        cy.xpath('//input[@name="email"]').type('sistiyak315@gmail.com')
        cy.xpath('//input[@name="password"]').type('774583')
        cy.xpath('//button[@type="submit"]').click()

        // Wait for login to complete and home page to load
        cy.wait(4000)

        // Check if Quiz page is loaded and navigate to Quiz page
        cy.contains('Quiz').should('be.visible').click()

        // Wait for the Quiz page to load
        cy.wait(2000)

        // Clicking on the second option of the quiz
        cy.get('#option1').should('be.visible').click()

        // Clicking on the next button
        cy.contains("Next").should('be.visible').click()

        // Wait for the next question to load
        cy.wait(1000)

        // Clicking on the previous button
        cy.xpath('(//button[@type="button"])[2]').should('be.visible').click()
    });
});
