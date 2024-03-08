import {$} from '@wdio/globals'

class BaseElement {
  private selector: string
  private name: string
  protected element: WebdriverIO.Element

  constructor(selector: string, name: string) {
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
}

export {BaseElement}