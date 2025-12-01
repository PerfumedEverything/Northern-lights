import IMask from "imask"

const rootSelector = '[data-js-input-mask]'

function getAttrNameFromSelector(selector) {
  return selector.replace(/[\[\]]/g, '')
}

class InputMask {
  selectors = {
    root: rootSelector,
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.init()
  }

  init() {
    const mask = this.rootElement.getAttribute(
      getAttrNameFromSelector(this.selectors.root)
    )

    IMask(this.rootElement, { mask })
  }
}

export default InputMask