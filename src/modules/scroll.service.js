class ScrollService {
  scrollToElement (el, { root = true, behavior = 'smooth', xScroll = false, offsetY = 0 } = {}) {
    if (root) {
      window.scrollTo({ top: el.offsetTop - offsetY, behavior })
    } else if (xScroll) {
      el.parentNode.scrollTo({ left: el.offsetLeft - el.parentElement.offsetLeft, behavior })
    } else {
      el.parentNode.scrollTo({ top: el.offsetTop - el.parentElement.offsetTop, behavior })
    }
  }
}

export const scrollService = new ScrollService()