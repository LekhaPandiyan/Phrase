/// <reference types ="cypress"/>

import LoginPage from "../page/loginPage"
import campaignFirstPage from "../page/campaign1Page"
import campaignSecondPage from "../page/campaign2Page"
import LogoutPage from "../page/logoutPage"

describe('Passing Dynamic Data', function () {
    //Using Fixtures to send Dynamic Data

    before(function () {
        cy.fixture('dynamicData').then(function (data) { //Calling fixtures
          this.data = data; 
        })
    })

    describe('Login Page',function(){

        it('Validate Login Page',function()
            {

                const login= new LoginPage()
                login.visit()//Open Application
                cy.screenshot()
                login.FillEmail(this.data.email)//Getting Email input from Fixtures
                cy.screenshot()
                login.FillPassword(this.data.password)//Getting Passwoed intup from Fixtures
                cy.screenshot()
                login.Submit()//Login in to application
                cy.screenshot()
                cy.wait(6000 )
                cy.url().should('include', 'dashboard');//Checking the landing page for validation
                cy.screenshot()
            })

    })

    describe('Create New Campaign Page 1',function(){

        it('Validate Campaign Page 1',function()// filling form 
        {

            const campaign = new campaignFirstPage//Object to call back function
            campaign.clickCampaignIcon()
            cy.screenshot()
            campaign.clickEmail()
            cy.screenshot()
            campaign.clickSelectProject()
            cy.screenshot()
            campaign.enterCampaignName(this.data.campaignName)
            cy.screenshot()
            campaign.enterControlLine(this.data.controlLine)
            cy.screenshot()
            campaign.enterAudienceSize(this.data.AudienceSize)
            cy.screenshot()
            campaign.enterAvgOpenRate(this.data.AvgOpenRate)
            cy.screenshot()
            campaign.selectSplits()
            cy.screenshot()
            campaign.clickNext()
            cy.url().should('include', 'campaign');

        })

    })

   describe('Create New Campaign Page 2',function(){

       it('Validate Campaign Page 2',function() 
        {
            //filling form
         const campaign1 = new campaignSecondPage
         campaign1.enterEmailDate()
         cy.screenshot()
         campaign1.selectIncludeName()
         cy.screenshot()
         campaign1.selectTypeOfCampaign()
         cy.screenshot()
         campaign1.selectBrand(this.data.Brand)
         cy.screenshot()
         campaign1.selectSpecificCategory()
         cy.screenshot()
         campaign1.selectUpcomingEvents()
         cy.screenshot()
         campaign1.selectOfferEnds()
         cy.screenshot()
         campaign1.selectMagicButton()
         cy.url().should('include', 'campaign');
         
        })
    })
    describe('Account Logout',function(){

        it('Validate Logout',function()
         {
             const logout =new LogoutPage()
             logout.account()//Calling Logout function to logout
             cy.screenshot()
             cy.url().should('include', 'login');//checking the landing page for validation
         })
        })
    
})