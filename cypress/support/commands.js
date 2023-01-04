Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Beltrano')
    cy.get('#lastName').type('Fulano')
    cy.get('#email').type('fulano@teste.com.br')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click();
})