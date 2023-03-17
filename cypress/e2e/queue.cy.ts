import {TEST_URL} from '../../src/constants/for-testing';
import {SHORT_DELAY_IN_MS} from '../../src/constants/delays';

const addEl = (value: string) => {
    cy.get('input').type(value);
    cy.contains('button', 'Добавить').click();
    cy.wait(SHORT_DELAY_IN_MS);
    cy.get('[class*=circle_default]').contains(value);
}

const removeEl = (value: string) => {
    cy.contains('button', 'Удалить').click();
    cy.get('[class*=circle_changing]').contains(value);
}

const values = ['a', 'b', 'c'];

describe('queue', () => {
    beforeEach(() => {
        cy.visit(`${TEST_URL}/queue`);
    });

    it('button should be disabled if string is empty', function () {
        cy.get('input').should('be.empty');
        cy.get('button[type="submit"]').should('be.disabled');
    });

    it('should adding correctly', function () {
        addEl(values[0]);
        cy.get('[class*=circle_content]').as('circle');
        cy.get('@circle').eq(0)
            .should('contain', values[0])
            .and('contain', 'head')
            .and('contain', 'tail');

        addEl(values[1]);
        cy.get('@circle').each((el, idx) => {
            idx === 1 && expect(el).to.contain(values[1]);
            idx === 1 && expect(el).to.contain('tail');
            idx === 0 && expect(el).to.contain('head');
        })
    });

    it('should removing correctly', function () {
        addEl(values[0]);
        addEl(values[1]);
        cy.get('[class*=circle_content]').as('circle');
        removeEl(values[0]);
        cy.get('@circle').each((el, idx) => {
            idx === 0 && expect(el).to.contain(values[0]);
            if (idx === 1) {
                expect(el).to.contain(values[1]);
                expect(el).to.contain('tail');
            }
        });
        cy.wait(SHORT_DELAY_IN_MS);
        cy.get('@circle').eq(1).should('contain', 'head');
    });

    it('should clear correctly', () => {
        values.forEach(value => addEl(value));
        cy.contains('Очистить').click();
        cy.get('[class*=circle_circle]').should('have.text', '');
    });

});