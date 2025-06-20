/// <reference types="cypress" />

describe('Wearables', () => {
    it('should display the wearables page', () => {
        cy.visit('/');
        cy.get('.site-nav__link-menu-label')
        .should('contain', 'Menu').and('be.visible');
        cy.get('.hero__subtitle')
        .should('include.text', 'Shop')
        .and('be.visible').click()
        cy.get('.product-single__title').should('be.visible').and('include.text', 'Watch Urbane');
        cy.get('#ProductPrice-product-template').should('be.visible').and('include.text', '$349.00');
        cy.get('.product-single__info-wrapper > .btn').should('include.text','Get It »').should('be.visible')
        cy.get('#SiteNavSearchCart > .site-header__search > .text-link').click();
        cy.get('#SiteNavSearch').type('Smartwatch{enter}');
        cy.get('p.section-header__subtext').should('contain.text', 'Smartwatch').and('be.visible');
    });
    
});