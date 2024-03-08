import {$} from '@wdio/globals'
import {BasePage} from '../lib/base.page.ts'

class FormsPage extends BasePage {
    private nameInputSelector: string

    constructor() {
        super('https://ultimateqa.com/filling-out-forms/')
        this.nameInputSelector = '#et_pb_contact_name_0'
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