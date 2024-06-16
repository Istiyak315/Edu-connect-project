describe('MyCourses Page Tests', () => {

    // Function to log in
    function login() {
        cy.visit('https://edu-connect-kappa.vercel.app/')
        cy.contains('Login').click()
        cy.get('input[name="email"]').type('sistiyak315@gmail.com')
        cy.get('input[name="password"]').type('774583')
        cy.get('button[type="submit"]').click()
        cy.wait(4000)
        cy.contains('Home').should('be.visible') // Verify login success
    }

    beforeEach(() => {
        // Perform login and navigate to the Courses page before each test
        login();
        cy.visit('https://edu-connect-kappa.vercel.app/')
    });

    it('Displays MyCourses page correctly', () => {

        cy.contains('MyCourses').click()
        cy.wait(4000)
        // Check if the Courses page loads correctly by verifying the presence of key elements
        cy.contains('MyCourses').should('be.visible')
        cy.xpath('(//button[@type="button"])[2]').click()
        
    });
    it.only('Navigates back to the Courses page', () => {

        cy.contains('MyCourses').click()
        cy.wait(4000)
        // Interact with the first course card to view details
        cy.xpath('(//button[@type="button"])[2]').click()
        cy.wait(4000)

        cy.contains('assignments').click()

        // Navigate back to the Courses page
        cy.contains('MyCourses').click()

        // Verify that the Courses page is displayed again
        cy.contains('MyCourses').should('be.visible')

    });
});
