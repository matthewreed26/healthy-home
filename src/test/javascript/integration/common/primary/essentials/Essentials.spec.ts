import { dataTestSelector } from '@/utils/DataTestSelector';

describe('Essentials', () => {
  beforeEach(() => {
    cy.visit('/essentials');
  });

  it('display basic essentials', () => {
    cy.contains(dataTestSelector('essential-conditioner'), 'Conditioner');
    cy.contains(dataTestSelector('essential-mouthwash'), 'Mouthwash');
    cy.contains(dataTestSelector('add-essential-button'), 'Add');
  });

  it('add an essential', () => {
    cy.get(dataTestSelector('add-essential')).type('Hand Soap');
    cy.get(dataTestSelector('add-essential-button')).click();
    cy.contains(dataTestSelector('essential-hand-soap'), 'Hand Soap');
  });
});
