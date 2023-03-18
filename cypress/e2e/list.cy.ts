import {TEST_URL} from '../../src/constants/for-testing';
import {SHORT_DELAY_IN_MS} from '../../src/constants/delays';

describe('list', () => {
    beforeEach(() => {
        cy.visit(`${TEST_URL}/list`);
    });

    const values = ['0', '34', '8', '1'];

    it('should default list rendering correctly', () => {
        const circles = cy.get('[class*=circle_content]')
            .should('have.length', 4);

        values.forEach((value, idx) => {
            circles.each((el, index) => {
                index === idx && expect(el).contain(value);
            })
        });

        cy.get('[class*=circle_content]')
            .should('have.length', 4).eq(0)
            .should('contain', 'head');

        cy.get('[class*=circle_content]')
            .should('have.length', 4).eq(3)
            .should('contain', 'tail');
    })
});