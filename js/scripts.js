
    const navMenu = document.getElementById('nav-menu')
    const toggleBtn = document.getElementById('btn-toggle')

    toggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('nav-menu_visible')
    })
