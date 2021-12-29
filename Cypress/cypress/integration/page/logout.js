class Logout
{

    Account()
    {
        cy.wait(5000)
        const acc = cy.get('[title="Account"]')
        acc.click()
        const logout=cy.get('[class="ant-btn sign_out_btn"]')
        logout.click()
    }

}
export default Logout