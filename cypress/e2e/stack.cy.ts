import {TEST_URL} from '../../src/constants/for-testing';
import {SHORT_DELAY_IN_MS} from '../../src/constants/delays';

const addEl = (value: string) => {
    cy.get('input').type(value);
    cy.contains('button', 'Добавить').click();
    cy.get('[class*=circle_changing]').contains(value);
    cy.wait(SHORT_DELAY_IN_MS);
    cy.get('[class*=circle_default]').contains(value);
}

const removeEl = (value: string) => {
    cy.contains('button', 'Удалить').click();
    cy.get('[class*=circle_changing]').contains(value);
    cy.get('[class*=circle_circle]').each((el, index) => {
        if (index === length - 1) {
            expect(el).to.contain(value)
        }
    });
}

const values = ['a', 'b', 'c'];

describe('stack', () => {
    beforeEach(() => {
        cy.visit(`${TEST_URL}/stack`);
    });

    it('button should be disabled if string is empty', function () {
        cy.get('input').should('be.empty');
        cy.get('button[type="submit"]').should('be.disabled');
    });

    it('element should be adding correctly', function () {
        values.forEach((value, index) => {
            addEl(value);
            cy.get('[class*=circle_content]').as('circle');

            cy.get('@circle')
                .should('have.length', index + 1)
                .each((el,idx) => {
                    idx === index && expect(el).to.contain(value);
                    idx === index && expect(el).to.contain('top');
                    idx === index && expect(el).to.contain(index);
                });
        });
    });

    it('element should be removing correctly', function () {
        values.forEach(value => addEl(value));
        cy.get('[class*=circle_content]').as('circle');
        removeEl(values[2]);

        cy.get('@circle')
            .should('have.length', 2)
            .each((el,idx) => {
                idx === 0 && expect(el).to.contain(values[0]);
                if(idx === 1) {
                    expect(el).to.contain(values[1]);
                    expect(el).to.contain('top');
                }
            })

    });

    it('clear should be correctly', function () {
        values.forEach(value => addEl(value));
        cy.contains('button', 'Очистить').click();
        cy.get('[class*=circle_content]')
            .should('have.length', 0)
    });
});