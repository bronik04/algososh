import {TEST_URL} from '../../src/constants/for-testing';

describe('string', () => {
    before('open string page',() => {
        cy.visit(`${TEST_URL}/recursion`);
    });

    it('should button disabled if string is empty', function () {
        cy.get('input').should('be.empty');
        cy.get('button').should('be.disabled');
    });
})