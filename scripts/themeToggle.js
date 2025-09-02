export default function initThemeToggle() {
  const button = '[data-js-theme-toggle]'
  const img = '[data-js-theme-toggle-img]'
  const body = document.body

  const buttonElement = document.querySelector(button)
  const imgElement = document.querySelector(img)

  function setTheme(isDark) {
    localStorage.setItem('darkmode', isDark)
    body.classList.toggle('dark-mode', isDark)

    imgElement.src = isDark
      ? '../assets/images/icon-sun.svg'
      : '../assets/images/icon-moon.svg'
  }

  function toggleTheme() {
    const isDark = localStorage.getItem('darkmode') === 'true'
    setTheme(!isDark)
  }

  buttonElement.addEventListener('click', toggleTheme)

  const isDarkSaved = localStorage.getItem('darkmode') === 'true'
  setTheme(isDarkSaved)
}