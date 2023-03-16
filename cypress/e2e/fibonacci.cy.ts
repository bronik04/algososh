import {TEST_URL} from '../../src/constants/for-testing';

describe('fibonacci', () => {
    beforeEach(() => {
        cy.visit(`${TEST_URL}/fibonacci`);
    });

    it('button should be disabled if string is empty', function () {
        cy.get('input').should('be.empty');
        cy.get('button[type="submit"]').should('be.disabled');
    });

    it('numbers should be generated correctly', function () {
        cy.get('input').type('3');
        cy.contains('Расчитать').click();

        const expectedNumbers = [1, 1, 2, 3];
        cy.get('[class^=circle_circle]')
            .should('have.length', expectedNumbers.length)
            .each((el, index) => {
                const expectedNumber = expectedNumbers[index];
                expect(el).to.contain(expectedNumber.toString());
            })
    });
});