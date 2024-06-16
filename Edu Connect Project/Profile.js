describe('Profile page testing',()=>{
    it('System testing',()=>{
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
         cy.contains('Profile').should('be.visible').click()

         cy.scrollTo(0, 1000)
         cy.wait(1000)
         cy.contains('About Us').should('be.visible')
          // Adjust based on the actual section
 
         // Scroll back up
         cy.scrollTo(0, -500)

    })
})