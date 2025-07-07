


describe('Formulaire Utilisateur E2E', () => {
  const baseUrl = 'http://localhost:3000'; 

  it('Soumet le formulaire et vérifie la création', () => {
    cy.visit(`${baseUrl}/form`);

    // Remplissage du formulaire
    cy.get('input[name="name"]').type('Toto');
    cy.get('input[name="email"]').type('toto@example.com');
    cy.get('button[type="submit"]').click();

    cy.url({ timeout: 10000 })
    // Vérifier que le message de succès est affiché
    cy.contains('Utilisateur créé avec succès !');
    cy.contains('Toto (toto@example.com)');
  });

  it('Vérifie que la page /submissions affiche les données', () => {
    cy.visit(`${baseUrl}/submissions`);

    // Vérifier que Toto est dans la liste
    cy.contains('Toto - toto@example.com').should('be.visible');
  });
});
