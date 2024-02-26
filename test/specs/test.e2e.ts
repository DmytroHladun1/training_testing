import {MainPage} from '../pageobjects/main.page.ts'
import {FormsPage} from '../pageobjects/forms.page.ts'
import {expect} from 'chai'

describe('Some test', () => {
    const mainPage = new MainPage()
    const formsPage = new FormsPage()

    it('google test', async () => {
        const expectedUrl = 'https://ultimateqa.com/automation'

        await mainPage.goToPage()
        const currentUrl = await mainPage.getUrl()

        expect(expectedUrl).to.be.equal(currentUrl)
    })

    it('secondary test', async () => {
        const expectedHeaderTitleText = 'Automation Practice'

        await mainPage.goToPage()
        const headerTitleText = await mainPage.getHeaderTitle()

        expect(expectedHeaderTitleText).to.be.equal(headerTitleText, 'Header title text is not as expected.')
    })

    it('redirect test', async () => {
        const expectedUrl = 'https://ultimateqa.ck.page/academy-coming-soon'

        await mainPage.goToPage()
        await mainPage.openAcademyComingSoon()
        const currentUrl = await browser.getUrl()

        expect(expectedUrl).to.be.equal(currentUrl)
    })

    it('send keys test', async () => {
        const enteredValue = 'Dima'
        await formsPage.goToPage()
        await formsPage.setValueToNameField(enteredValue)
        const inputValue = await formsPage.getValueFromNameField()

        expect(enteredValue).to.be.equal(inputValue)
    })
})

