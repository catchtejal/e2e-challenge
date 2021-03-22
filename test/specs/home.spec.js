import { HomePage } from '../pageobjects/home.page'
const homePage = new HomePage()

describe('Wikipedia home page',  () => {
    const searchKey = "World's Tallest Building"

    it('should redirect from en.wikipedia.org to https://en.wikipedia.org/wiki/Main_Page', () => {
        browser.url('https://en.wikipedia.org')

        const expected = "https://en.wikipedia.org/wiki/Main_Page"
        const value = browser.getUrl()
        expect(value).toEqual(expected)
    })

    it('should allow the user to search and display results', () => {
        homePage.setSearchText(searchKey)
        expect(homePage.suggestionsResult(searchKey).waitForDisplayed()).toBeTruthy()
    })

    it('should navigate to search result when clicked', () => {
        homePage.suggestionsResult(searchKey).click()
        homePage.waitForPageLoad()
        const expected = "https://en.wikipedia.org/wiki/List_of_tallest_buildings"
        const pageUrl = browser.getUrl()
        expect(pageUrl).toEqual(expected)
    })

    it('should find second tallest building and verify height is correctly converted', () => {
        expect(homePage.secondTallestName.getText()).toEqual("Shanghai Tower")
        expect(homePage.secondTallestHeightFt.getText()).toEqual('2,073\xA0ft')
        expect(homePage.secondTallestHeightMeter.getText()).toEqual("632 m")  
    })    

    it('should sort table in descending order by year and find Empire state building as first result', () => {
        homePage.sortByYearDescending.click()
        expect(homePage.firstRecordInTable.getText()).toContain("Empire State Building")  
    }) 
    
    it('should navigate to Empire state building and verify url', () => {
        homePage.firstRecordInTable.click()
        homePage.waitForPageLoad()
        const expected = "https://en.wikipedia.org/wiki/Empire_State_Building"
        const pageUrl = browser.getUrl()
        expect(pageUrl).toEqual(expected)  
    })

})
