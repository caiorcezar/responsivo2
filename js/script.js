const iconeMenu = document.getElementById('hamburguinho')
const barraNavegacao  = document.getElementById('navegacao')

const inputDarkMode = document.getElementById('muda')

console.log(iconeMenu, barraNavegacao, inputDarkMode)

function escondeBarra(){
    barraNavegacao.classList.toggle('oculta')
}

function darkMode(){
    document.body.classList.toggle('dark')
}

iconeMenu.addEventListener('click', escondeBarra)

inputDarkMode.addEventListener('change', darkMode)