
/// <reference types="cypress" />


describe('Validar teste', () => {
    it('Cadastrar cliente', () => {
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
        cy.get(':nth-child(5) > .sc-iqcoie').type('11994877322')
        cy.get('.sc-bczRLJ').click();

    });


      it('Especionar cliente', () => {
        cy.visit('https://tinnova-teste-qa.vercel.app/');
        
        cy.contains('Entrar')
        .click();
        cy.get(':nth-child(2) > [style="width: 15%; justify-content: flex-start;"] > :nth-child(2)')
        .click()
        cy.get('.sc-bczRLJ').click()

    });

    it('Editar', () => {
        cy.visit('https://tinnova-teste-qa.vercel.app/');
        
        cy.contains('Entrar').click();
        cy.get(':nth-child(1) > [style="width: 15%; justify-content: flex-start;"] > :nth-child(3)')
        .click();
        // Editar Nome
        cy.get(':nth-child(2) > .sc-iqcoie')
        .clear();
        cy.get(':nth-child(2) > .sc-iqcoie').
        type('João Souza');
        // Editar e-mail
        cy.get(':nth-child(3) > .sc-iqcoie').clear();
        cy.get(':nth-child(3) > .sc-iqcoie').type('joao@joaosilva.com')
        // Atualizar
        cy.get('.sc-bczRLJ').click();


    });

    it('Excluir', () => {
        cy.visit('https://tinnova-teste-qa.vercel.app/');

        cy.contains('Entrar').click();
        cy.get(':nth-child(1) > [style="width: 15%; justify-content: flex-start;"] > :nth-child(4) > svg')
        .click();
        cy.get(':nth-child(2) > .swal-button').click();

    });







});
