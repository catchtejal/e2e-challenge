import { Page } from './page'

class HomePage extends Page {
    // Elements go here
    get firstRecordInTable() { return this.secondTable.$('tbody tr:nth-child(1) td:nth-child(2) a')}
    get mainTab () { return $('#ca-nstab-main') }
    get searchInput () { return $('#searchInput') }
    get searchInputButton () { return $('#searchButton') }
    get secondTable() { return $$('.wikitable.sortable.jquery-tablesorter')[1] }
    get secondTallestName() { return this.secondTable.$('tbody tr:nth-child(2) td:nth-child(2)') }
    get secondTallestHeightFt() { return this.secondTable.$('tbody tr:nth-child(2) td:nth-child(6)') }
    get secondTallestHeightMeter() { return this.secondTable.$('tbody tr:nth-child(2) td:nth-child(5)') }
    get sortByYearDescending() { return this.secondTable.$('thead tr:nth-child(1) th:nth-child(7)') } 


    // Methods go here
    setSearchText (text) {
        this.searchInput.setValue(text)
    }
    search () {
        this.searchInputButton.click()
    }
    suggestionsResult(value){
        return $(`[title="${value}"]`)
    }

    waitForPageLoad(){
        browser.waitUntil(
            () => this.mainTab.getText() === 'Article',
            {
                timeout: 10000,
                timeoutMsg: 'expected text to be different after 10s'
            }
        );
    }
}

export { HomePage }
