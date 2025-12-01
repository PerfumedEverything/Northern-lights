class Header {
  selectors = {
    root: '[data-js-header]',
    overlay: '[data-js-header-overlay]',
    burgerButton: '[data-js-header-burger-button]',
  }

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
    isScrolled: 'is-scrolled',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
    this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)

    this.onBurgerButtonClick = this.onBurgerButtonClick.bind(this)
    this.onScroll = this.onScroll.bind(this)

    this.bindEvents()
  }

  onBurgerButtonClick() {
    this.rootElement.classList.toggle(this.stateClasses.isActive)
    this.overlayElement.classList.toggle(this.stateClasses.isActive)
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
    document.body.classList.toggle(this.stateClasses.isLock)
  }

  onScroll() {
    this.rootElement.classList.toggle(
      this.stateClasses.isScrolled,
      window.scrollY > 50 
    )
  }

  bindEvents() {
    this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
    window.addEventListener('scroll', this.onScroll)
  }
}

export default Header