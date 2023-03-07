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
      cy.get('[placeholder="Title..."]').type('Messi')
        .get('[placeholder="URL to Shorten..."]').type('https://www.planetsport.com/image-library/square/1200/a/argentinas-lionel-messi-poses-with-the-fifa-world-cup-trophy.jpg')
        .get('button').click()
        .get('.url').last()
      cy.get('section > :nth-child(2)').get('section > :nth-child(2)').contains('Messi')
      cy.get('section > :nth-child(2)').get('section > :nth-child(2)').contains('http://localhost:3001/useshorturl/2')
      cy.get('section > :nth-child(2)').get(':nth-child(2) > p').contains('https://www.planetsport.com/image-library/square/1200/a/argentinas-lionel-messi-poses-with-the-fifa-world-cup-trophy.jpg')
  
    })
  })