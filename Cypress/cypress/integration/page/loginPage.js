class LoginPage
{

    visit()
    {
        cy.visit('https://app-qa.phrasee.co/login')
    }

    FillEmail(value)
    {
       const field= cy.get('[data-cy="login-email"]')
       field.clear()
       field.type(value)
       return this
    }

    FillPassword(value)
    {
        const field = cy.get('[data-cy="login-password"]')
        field.clear()
        field.type(value)
        return this
    }

    Submit()
    {

        const button = cy.get('.submit')
        button.click()
    }

}
export default LoginPage