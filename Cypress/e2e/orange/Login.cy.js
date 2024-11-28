/// <reference types="cypress" />

describe('Login Feature',() => {
    beforeEach(()=> {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

    it('User Login with valid credentials', ()=> {
        cy.get('h5').contains('Login').should('have.text','Login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="username"]').should('have.value', 'Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();
        cy.url().should('include', '/dashboard');
        cy.get('[class ="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text', 'Dashboard');
    });

    it('User Login with invalid username', ()=> {
        cy.get('h5').contains('Login').should('have.text','Login');
        cy.get('[name="username"]').type('User');
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();
        cy.get('[class="oxd-alert-content oxd-alert-content--error"]').should('have.text', 'Invalid credentials');
    });

    it('User Login with invalid password', ()=> {
        cy.get('h5').contains('Login').should('have.text','Login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('user123');
        cy.get('[type="submit"]').click();
        cy.get('[class="oxd-alert-content oxd-alert-content--error"]').should('have.text', 'Invalid credentials');
    });

    it('should display validation error for empty username', ()=> {
        cy.get('h5').contains('Login').should('have.text','Login');
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text', 'Required');
    });




})