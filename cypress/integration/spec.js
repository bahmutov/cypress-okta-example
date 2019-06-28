/// <reference types="cypress" />
// before(() => {
//   // try logging in
//   const username = Cypress.env('username')
//   const password = Cypress.env('password')
//   if (!password) {
//     throw new Error('Did not find environment variable password')
//   }
//   cy.request({
//     method: 'POST',
//     url: 'https://dev-827164.okta.com/api/v1/authn',
//     body: {
//       options: {
//         multiOptionalFactorEnroll: false,
//         warnBeforePasswordExpired: true
//       },
//       username,
//       password
//     }
//   }).should(response => {
//     expect(response.body).to.have.property('status', 'SUCCESS')
//     expect(response.body).to.have.property('sessionToken')
//     // ok we get the session token, how do we use it?
//   })
// })

it('loads', () => {
  const username = Cypress.env('username')
  const password = Cypress.env('password')
  if (!password) {
    throw new Error('Did not find environment variable password')
  }
  cy.visit('/')
  cy.get('#okta-signin-username').type(username)
  cy.get('#okta-signin-password').type(password, { log: false })
  cy.get('#okta-signin-submit').click()
})
