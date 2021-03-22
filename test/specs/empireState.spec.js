import { EmpireStatePage } from '../pageobjects/empireState.page'
const empireStatePage = new EmpireStatePage()

describe('Wikipedia Empire state page',  () => {

    beforeEach(function() {
        browser.url('https://en.wikipedia.org/wiki/Empire_State_Building')
    })

    it('should redirect Chrysler building when clicked on preceded by', () => {
        empireStatePage.precededByLink.click()
        empireStatePage.waitForPageLoad()
        expect(empireStatePage.firstheading.getText()).toEqual("Chrysler Building")
    })

    it('should redirect World Trade Center north building when clicked on succeeded by', () => {
        empireStatePage.succeededByLink.click()
        empireStatePage.waitForPageLoad()
        expect(empireStatePage.firstheading.getText()).toEqual("World Trade Center (1973–2001)")
    })

    it('should verify each picture has icon in the caption below', () => {
        empireStatePage.thumbCaptionForEachPicture()
    })



})