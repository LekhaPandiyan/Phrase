class campaignSecondPage
{
    enterEmailDate()
    {

        cy.wait(5000)
        const date1 = cy.get('.anticon-calendar > svg')
        date1.click()
        const button2 = cy.get('[title="December 30, 2021"] > .ant-calendar-date')
        button2.click()
    }

    selectIncludeName()
    {
        const button3=cy.get('.select-radio > :nth-child(1) > :nth-child(2)')
        button3.click()
        const button1 =cy.xpath('//div[@title="Select an option"]')
        button1.click()
    
    }

    selectTypeOfCampaign()
    {
        const button1 = cy.get('[class="ant-select-dropdown-menu-item"]').first()
        button1.click()
        
    }

    selectBrand(value)
    {
        const field = cy.get('[placeholder="E.g. Besty"]')
        field.clear()
        field.type(value)
        return this
    }

    selectSpecificCategory()
    {
        const button1 = cy.xpath('(//div[@class="ant-select-selection__rendered"])[2]')
        button1.click()
        const button2 = cy.get('[data-cy="Partywear"]')
        button2.click()
    }

    selectUpcomingEvents()
    {
        const button1 = cy.xpath('(//div[@class="ant-select-selection__rendered"])[3]')
        button1.click()
        const button2 = cy.get('[data-cy="Flash Sale"]')
        button2.click()
    }

    selectOfferEnds()
    {
        const button1 = cy.xpath('(//div[@class="ant-select-selection__rendered"])[4]')
        button1.click()
        const button2 = cy.get('[data-cy="Ends Soon"]')
        button2.click()
    }

    selectMagicButton()
    {
        const button = cy.get('[data-cy="lng-generation-magic-button"]')
        button.click()
    }


}
export default campaignSecondPage