import { Swiper } from 'swiper'
import { Navigation } from "swiper/modules"
import "swiper/css"

class SectionSlider {
  constructor() {
    this.init();
  }
  
  init() {
    const sections = document.querySelectorAll("[data-js-slider]");
    
    sections.forEach((section) => {
      const container = section.querySelector("[data-js-slider-container]");
      if (!container) return;
      
      const prevBtn = section.querySelector("[data-js-slider-prev]");
      const nextBtn = section.querySelector("[data-js-slider-next]");
      if (!prevBtn || !nextBtn) return;
      
      // Получаем все настройки из data-атрибутов
      const config = {
        modules: [Navigation],
        slidesPerView: section.dataset.slides ? parseInt(section.dataset.slides) : 1,
        spaceBetween: section.dataset.space ? parseInt(section.dataset.space) : 0,
        loop: section.dataset.loop === 'true',
        navigation: {
          prevEl: prevBtn,
          nextEl: nextBtn,
        },
        observer: true,
        observeParents: true,
      };
      
      // Если есть data-breakpoints, парсим их
      if (section.dataset.breakpoints) {
        try {
          config.breakpoints = JSON.parse(section.dataset.breakpoints);
        } catch (e) {
          console.error('Invalid breakpoints JSON:', e);
        }
      }
      
      // Инициализируем Swiper
      new Swiper(container, config);
    });
  }
}

export default SectionSlider;