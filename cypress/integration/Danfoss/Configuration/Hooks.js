before(() => {
    cy.visit('https://118.185.187.242:6027')
    cy.wait(2000)
    cy.get('#user').should('be.visible').type('Supervisor')//username
    cy.get('#pwd').type('S@danfoss123')//password
    cy.get('form.ng-dirty > .btn').click()//signin
})

beforeEach(() =>
{
    cy.fixture('SVB5DATA').then(function(svb5data)//getting data from fixtures
        {
            this.svb5data=svb5data
        })
    cy.fixture('MXCDATA').then(function(mxcdata)
    {
        this.mxcdata=mxcdata
    })
    cy.fixture('user_data').then(function(data)
    {
        this.data=data
    })
})
after(() => {
    cy.get('.has-submenu > .submenu-toggle > .menu-text').click()
    cy.get('.submenu > :nth-child(4) > a > .menu-text').click()
    
})