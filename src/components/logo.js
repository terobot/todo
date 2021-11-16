const Logo = (src, width, height) => {
    const logo = document.createElement('img')
    logo.setAttribute('src', src || 'src/assets/logo.png')
    logo.setAttribute('width', width || '100')
    logo.setAttribute('height', height || '100')
    logo.setAttribute('alt', 'ToDo app')
    logo.classList.add('logo')

    return logo
}

export default Logo