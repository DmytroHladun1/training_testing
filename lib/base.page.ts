import {browser} from '@wdio/globals'

class BasePage {
  protected url: string

  constructor(url: string) {
    this.url = url
  }

  async getCurrentUrl() {
    return browser.getUrl()
  }

  async goToPage() {
    await browser.url(this.url)
  }
}

export {BasePage}