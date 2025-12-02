class ContactUs {
  selectors = {
    root: '[data-js-contact-us]',
    header: '[data-js-contact-us-header]',
    form: '[data-js-contact-us-form]',
    button: '[data-js-contact-us-form-button]',
    success: '[data-js-contact-us-success]',
  }

  stateClasses = {
    hidden: 'hidden',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    if (!this.rootElement) return

    this.headerElement = this.rootElement.querySelector(this.selectors.header)
    this.formElement = this.rootElement.querySelector(this.selectors.form)
    this.buttonElement = this.rootElement.querySelector(this.selectors.button)
    this.successElement = this.rootElement.querySelector(this.selectors.success)

    this.onButtonClick = this.onButtonClick.bind(this)

    this.bindEvents()
  }

  onButtonClick() {
    this.headerElement?.classList.add(this.stateClasses.hidden)
    this.formElement?.classList.add(this.stateClasses.hidden)
    this.buttonElement?.classList.add(this.stateClasses.hidden)
    this.successElement?.classList.remove(this.stateClasses.hidden)
  }

  bindEvents() {
    this.buttonElement?.addEventListener('click', this.onButtonClick)
  }
}

export default ContactUs
