/* Crear una pagina donde se pueda elegir entre
modo oscuro y modo claro. */

const log = console.log,
toggleSwitch = document.getElementById('dark'),
currentTheme = localStorage.getItem('theme')

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)
    if (currentTheme === 'light') {
        toggleSwitch.checked = false
    }
}

function switchTheme(e) {
    const color = (e.target.checked) ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', color)
    localStorage.setItem('theme', color)
}

toggleSwitch.addEventListener('change', switchTheme, false)

