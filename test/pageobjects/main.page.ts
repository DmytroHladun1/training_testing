import {browser, $} from '@wdio/globals'

class MainPage {
    private url: string
    private headerTitleSelector: string
    private academicButtonSelector: string
    private successStoriesSelecotor: string
    private openBlogSelector: string
    private openAboutSelector: string
    private openLogoSelector: string

    constructor() {
        this.url = 'https://ultimateqa.com/automation'
        this.headerTitleSelector = '#Automation_Practice'
        this.academicButtonSelector = '#menu-main-menu a[href*="academy-coming-soon"]'
        this.successStoriesSelecotor = '#menu-item-217938 a[href*="testimonials"]'
        this.openBlogSelector = '#menu-item-218226 a[href*="blog"]'
        this.openAboutSelector = '#menu-item-217940 a[href*="about"]'
        this.openLogoSelector = '.wp-image-218123'
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
    
    public async openSuccessStories() {
        const succesStoriesButton = await $(this.successStoriesSelecotor)
        await succesStoriesButton.click()
    }

    public async openBlog () {
        const openBlogButton = await $(this.openBlogSelector)
        await openBlogButton.click()
    }

    public async openAbout () {
        const openAboutButton = await $(this.openAboutSelector)
        await openAboutButton.click()
    }

    public async openLogo () {
        const openLogoButton = await $(this.openLogoSelector)
        await openLogoButton.click()
    }
}

export {MainPage}