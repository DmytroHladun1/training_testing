import {browser, $} from '@wdio/globals'

class FormsPage {
    private url: string
    private nameInputSelector: string

    constructor() {
        this.url = 'https://ultimateqa.com/filling-out-forms/'
        this.nameInputSelector = '#et_pb_contact_name_0'
    }

    public async goToPage() {
        await browser.url(this.url)
    }

    public async getUrl() {
        return browser.getUrl()
    }

    public async setValueToNameField(value: string) {
      const nameInput = await $(this.nameInputSelector)
      await nameInput.setValue(value)
    }

    public async getValueFromNameField() {
      const nameInput = await $(this.nameInputSelector)
      return nameInput.getValue()
    }
}

export {FormsPage}