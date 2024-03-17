import {BasePage} from '../lib/base.page.ts'
import {BaseElement} from '../lib/base.element.ts'

type inputSelecor = 'leftNameInput' | 'leftMessageInput' | 'rightNameInput' | 'rightMessageInput'

class FormsPage extends BasePage {
    private leftNameInput: BaseElement
    private leftMessageInput: BaseElement
    private rightNameInput: BaseElement
    private rightMessageInput: BaseElement

    constructor() {
        super('https://ultimateqa.com/filling-out-forms/')
        this.leftNameInput = new BaseElement('#et_pb_contact_name_0', 'Left name input')
        this.leftMessageInput = new BaseElement('#et_pb_contact_message_0', 'Left message Input')
        this.rightNameInput = new BaseElement('#et_pb_contact_name_1', 'Right name input')
        this.rightMessageInput = new BaseElement('#et_pb_contact_message_1', 'Right message input')

    }

    public async setValueInInput(input: inputSelecor, value: string) {
      await this[input].setValue(value)
    }
    
    public async getValueFromInput(input: inputSelecor) {
      return this[input].getValue()
    }
    
    // public async setValueToNameField(value: string) {
    //   const input = await $(this.inputSelector)
    //   await input.setValue(value)
    // }

    // public async getValueFromNameField() {
    //   const input = await $(this.inputSelector)
    //   return input.getValue()
    // }
}

export {FormsPage}