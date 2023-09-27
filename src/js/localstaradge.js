const themeSwitch = document.querySelector('#switch')
const DARK = 'dark'
const LIGHT = 'light'

export default function switchThemeColor() {
  const currentTheme = localStorage.getItem('theme-color')

	currentTheme === DARK ? setThemeColor(true, DARK) : setThemeColor(false, LIGHT)

  themeSwitch.addEventListener('change', event => {
		event.target.checked ? setTheme(DARK) : setTheme(LIGHT)
  })
}

function setThemeColor(boolean, themeColor) {
	themeSwitch.checked = boolean
  document.documentElement.setAttribute('data-theme', themeColor)
}

function setTheme(theme) {
  localStorage.setItem('theme-color', theme)
  document.documentElement.setAttribute('data-theme', theme)
}