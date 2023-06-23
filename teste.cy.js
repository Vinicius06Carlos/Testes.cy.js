
/// <reference types="cypress" />

// teste Vinicius

describe('Validar testes', () => {




    it('Deve clicar no botão', () => {
        cy.visit('https://tinnova-teste-qa.vercel.app/');


        cy.contains('Entrar').click();
        cy.get('.sc-hKMtZM > :nth-child(3)').click()

        // add Cliente
        // Nome
        cy.get(':nth-child(2) > .sc-iqcoie').type('ViniciusCarlos')
        // e-mail
        cy.get(':nth-child(3) > .sc-iqcoie').type('vinicius@gmail.com')
        // CPF
        cy.get(':nth-child(4) > .sc-iqcoie').type('40568751892')
        // Telefone\\
        cy.get(':nth-child(5) > .sc-iqcoie').type('11997050964')
        cy.get('.sc-bczRLJ').click()


        // consultar usuario 

        cy.get(':nth-child(3) > [style="width: 15%; justify-content: flex-start;"] > :nth-child(2) > svg').click()
        cy.get(':nth-child(2) > .sc-iqcoie').should('eq', 'Vinicius Carlos')
        cy.get('.sc-bczRLJ').click()



        // Editar 
        cy.get(':nth-child(1) > [style="width: 15%; justify-content: flex-start;"] > :nth-child(3) > svg').click()
        // Nome
        cy.get('input[name=name]').type('Maria Lucia')

        // Atualizar
       cy.get('.sc-bczRLJ').click()
        



 









    });




});
