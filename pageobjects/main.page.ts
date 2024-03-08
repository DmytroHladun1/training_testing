import {BasePage} from '../lib/base.page.ts'
import {BaseElement} from '../lib/base.element.ts'
import {TextElement} from '../lib/elements/text.ts'

type TItemName = 'academic' | 'successStories' | 'blog' | 'about' | 'logo'

class MainPage extends BasePage {
    private headerTitle: TextElement
    private academicButton: BaseElement
    private successStoriesButton: BaseElement
    private blogButton: BaseElement
    private aboutButton: BaseElement
    private logoButton: BaseElement

    constructor() {
        super('https://ultimateqa.com/automation')
        this.headerTitle = new TextElement('#Automation_Practice', 'Header title')
        this.academicButton = new BaseElement('#menu-main-menu a[href*="academy-coming-soon"]', 'Academic button')
        this.successStoriesButton = new BaseElement('#menu-item-217938 a[href*="testimonials"]', 'Success button')
        this.blogButton = new BaseElement('#menu-item-218226 a[href*="blog"]', 'Blog button')
        this.aboutButton = new BaseElement('#menu-item-217940 a[href*="about"]', 'About button')
        this.logoButton = new BaseElement('.wp-image-218123', 'Logo')
    }

    public async openMenuItem(itemName: TItemName) {
        const menuItems = {
            academic: async () => this.academicButton.click(),
            successStories: async () => this.successStoriesButton.click(),
            blog: async () => this.blogButton,
            about: async () => this.aboutButton.click(),
            logo: async () => this.logoButton.click()
        }

        await menuItems[itemName]()
    }

    public async getHeaderTitle() {
        return this.headerTitle.getText()
    }
}

export {MainPage}