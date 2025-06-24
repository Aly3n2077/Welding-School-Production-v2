export function initScrollAnimations() {
  const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right")

  const revealOnScroll = () => {
    for (let i = 0; i < revealElements.length; i++) {
      const element = revealElements[i]
      const windowHeight = window.innerHeight
      const elementTop = element.getBoundingClientRect().top
      const elementVisible = 150

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("active")
      } else {
        element.classList.remove("active")
      }
    }
  }

  window.addEventListener("scroll", revealOnScroll)

  // Initial check to reveal elements that are already visible
  revealOnScroll()

  return () => {
    window.removeEventListener("scroll", revealOnScroll)
  }
}
