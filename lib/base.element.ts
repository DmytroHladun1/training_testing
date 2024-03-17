import {$} from '@wdio/globals'

class BaseElement {
  private selector: string
  private name: string
  protected element: WebdriverIO.Element

  constructor(selector: string, name: string,) {
    this.selector = selector
    this.name = name
  }

  protected async setCurrentElement() {
    this.element = await $(this.selector)
  }

  public async click() {
    await this.setCurrentElement()
    await this.element.click()
  }

  public async setValue(value) {
    await this.setCurrentElement()
    await this.element.setValue(value)
  }

  public async getValue() {
    await this.setCurrentElement()
    await this.element.getValue()
  }
}

export {BaseElement}