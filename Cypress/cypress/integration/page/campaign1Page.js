class campaignFirstPage
{
    clickCampaignIcon()
    {
        const button = cy.get('[data-cy="create-campaign-mi"]')
        button.click()
        cy.wait(1000)
    }

    clickEmail()
    {
        const button= cy.get('[data-cy="email"]')
        button.click()
        cy.wait(1000)
    }

    clickSelectProject()
    {
        const button = cy.get('.ant-select-arrow > .anticon > svg')
        button.click()
        cy.wait(1000)
        const button1 = cy.contains('External automation project')
        button1.click()  
        //const button1= cy.contains('External automation project').click()
    }

    enterCampaignName(value)
    {
        const field = cy.get('[data-cy="campaign-setup-campaign-name"]')
        field.clear()
        field.type(value)
        return this
    }

    enterControlLine(value)
    {
        const field = cy.get('[data-cy="campaign-setup-campaign-own-sl"]')
        field.clear()
        field.type(value)
        return this
    }

    enterAudienceSize(value)
    {
        const field = cy.get('[data-cy="campaign-setup-list-size"]')
        field.clear()
        field.type(value)
        return this
    }

    enterAvgOpenRate(value)
    {
        const field = cy.get('[data-cy="campaign-setup-baseline-open-rate"]')
        field.clear()
        field.type(value)
        return this
        
    }

    selectSplits()
    {
        cy.wait(6000)
        const button = cy.get('[class="ant-select-lg regular ant-select ant-select-enabled"]').contains('1')
        button.click()
        cy.wait(1000)
        const button1 = cy.get('.ant-select-dropdown-menu > :nth-child(4)')
        button1.click()
        
    }

    clickNext()
    {
        const button=cy.get('[data-cy="campaign-setup-submit-button"]')
        button.click()
        cy.wait(5000)
    }

}
export default campaignFirstPage