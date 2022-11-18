const navToggle = document.querySelector('.mobile-nav-toggle')
const navigation = document.querySelector('.navigation')
const toggleIcon = document.getElementById('toggle-icon')


navToggle.addEventListener('click', () => {

    if (navigation.hasAttribute('data-visible')) {
        navToggle.setAttribute('aria-expanded', false)
        toggleIcon.src = "./assets/images/icon-menu.svg"
        toggleIcon.classList = 'icon-hamburger'
    }
    else {
        navToggle.setAttribute('aria-expanded', true)
        toggleIcon.src = "./assets/images/icon-menu-close.svg"
        toggleIcon.classList = 'icon-close'

    }
    navigation.toggleAttribute('data-visible')
})