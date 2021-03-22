import { HomePage } from './home.page'

class EmpireStatePage extends HomePage {
    // Elements go here
    get firstheading() {return $('#content #firstHeading') }
    get precededByLink () { return this.wikiSuccessionTable.$('tbody tr:nth-child(2) td:nth-child(1) span') }
    get succeededByLink () { return this.wikiSuccessionTable.$('tbody tr:nth-child(4) td:nth-child(2) span') }
    get thumbCaption() { return $$('#content .thumbcaption') }
    get wikiSuccessionTable () { return $('.wikitable.succession-box') }

    thumbCaptionForEachPicture(){
        this.thumbCaption.forEach(function(caption){
            //this method is currently failing becuase on empire state page one picture is missing caption icon
            // if we need this test to pass, forEach loop needs to be run for element : #content .thumbcaption .magnify
            expect(caption.$(' .magnify').isDisplayed()).toBeTruthy()
        })
    }

}

export { EmpireStatePage }