import { scroller } from 'react-scroll'

export const scrollToSection = (sectionId, offset = -70) => {
  scroller.scrollTo(sectionId, {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
    offset: offset,
  })
}

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

export const slugify = (text) => {
  return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, '-');
};
