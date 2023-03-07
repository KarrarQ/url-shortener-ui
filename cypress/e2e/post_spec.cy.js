describe("post flow", () => {
    beforeEach(() => {
      cy.intercept("GET", "http://localhost:3001/api/v1/urls", {
        fixture: "urls.json",
      }).as("urls");
      cy.intercept("POST", "http://localhost:3001/api/v1/urls", {
        fixture: "post.json",
      }).as("post");
      cy.visit("http://localhost:3000/");
    });
    it('user can fill out the form, submit and view the card on the homepage', () => {
      cy.get('[placeholder="Title..."]').type('Karrar')
        .get('[placeholder="URL to Shorten..."]').type('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
        .get('button').click()
        .get('.url').last()
      cy.get('section > :nth-child(2)').get('section > :nth-child(2)').contains('Karrar')
      cy.get('section > :nth-child(2)').get('section > :nth-child(2)').contains('http://localhost:3001/useshorturl/2')
      cy.get('section > :nth-child(2)').get(':nth-child(2) > p').contains('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
  
    })
  })