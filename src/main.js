import './styles/main.scss'

import Header from './scripts/header'
import InputMask from './scripts/inputmask'
import SectionSlider from './scripts/Swiper'

new Header()
new InputMask(document.querySelector('[data-js-input-mask]'))
new SectionSlider()