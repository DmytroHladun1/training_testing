import {browser, $} from '@wdio/globals'

class MainPage {
    private url: string
    private headerTitleSelector: string
    private academicButtonSelector: string

    constructor() {
        this.url = 'https://ultimateqa.com/automation'
        this.headerTitleSelector = '#Automation_Practice'
        this.academicButtonSelector = '#menu-main-menu a[href*="academy-coming-soon"]'
    }

    public async goToPage() {
        await browser.url(this.url)
    }

    public async getUrl() {
        return browser.getUrl()
    }

    public async getHeaderTitle() {
        const headerTitle = await $(this.headerTitleSelector)
        return headerTitle.getText()
    }

    public async openAcademyComingSoon() {
        const javaAcademyMenuItemButton = await $(this.academicButtonSelector)
        await javaAcademyMenuItemButton.click()
    }
}

export {MainPage}