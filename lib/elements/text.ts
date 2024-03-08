import {BaseElement} from '../base.element.ts'

class TextElement extends BaseElement {
  constructor(selector, name) {
    super(selector, name)
  }

  public async getText() {
    await this.setCurrentElement()
    return this.element.getText()
  }
}

export {TextElement}