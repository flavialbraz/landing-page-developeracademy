const navcontent = document.getElementById('navbar')
const navbars = document.getElementById('bars')


navbars.addEventListener( 'click', () => {
    navbars.classList.toggle('bars-active')
    navcontent.classList.toggle('nav-active')
})