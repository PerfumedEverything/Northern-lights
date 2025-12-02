import './styles/main.scss'

import Header from './scripts/Header'
import InputMask from './scripts/inputmask'
import SectionSlider from './scripts/Swiper'
import ContactUs from './scripts/Contact-us'

new Header()
new InputMask(document.querySelector('[data-js-input-mask]'))
new SectionSlider()
new ContactUs()