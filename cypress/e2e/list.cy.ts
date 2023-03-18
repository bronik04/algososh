import {TEST_URL} from '../../src/constants/for-testing';
import {DELAY_IN_MS} from '../../src/constants/delays';

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
    });

    it('should add to head correctly', () => {
        cy.get('input').first().type('42');
        cy.contains('button', 'Добавить в head').click();
        cy.get('[class*=circle_modified]').contains('42');
        cy.wait(DELAY_IN_MS);
        cy.get('[class*=circle_content]')
            .should('have.length', 5)
            .each((el, index) => {
                index === 0 && expect(el).contain('42');
                index === 0 && expect(el).contain('head');
                index === 4 && expect(el).contain('tail');
            });
        cy.get('[class*=circle_default]').contains('42');
    });

    it('should add to tail correctly', () => {
        cy.get('input').first().type('99');
        cy.contains('button', 'Добавить в tail').click();
        cy.get('[class*=circle_modified]').contains('99');
        cy.wait(DELAY_IN_MS);
        cy.get('[class*=circle_content]')
            .should('have.length', 5)
            .each((el, index) => {
                index === 4 && expect(el).contain('99');
                index === 4 && expect(el).contain('tail');
            });
        cy.get('[class*=circle_default]').contains('99');
    });

});