it('Visits flickr.com', () => {
    cy.visit('https://identity.flickr.com/account-picker')
    cy.get('.py-2').click() 
})

 
it('login test', function(){
    const typedText = 'saifulmunna28@gmail.com'
    const typedPassword = '+P5*M,@cjPRz$Bm'  

     

     cy.get('[data-testid="identity-email-input"]')
     .type(typedText)
     .should('have.value', typedText)
     cy.get('[data-testid="identity-form-submit-button"]').click()  
     cy.get('[data-testid="identity-password-input"]') 
     .type(typedPassword)
     .should('have.value', typedPassword) 
   
      
     
})  

it('Notification', function(){
    cy.get('[data-testid="identity-form-submit-button"]').click()  
     cy.get('.c-notification-unseencount').click({force: true})   
    cy.get/* ('#yui_3_16_0_1_1643352484313_970').click({force: true}) */

})
 
{/* <span class="c-notification-unseencount hidden"></span> */}