const Logo = (src, alt, elClass) => {
    const logo = document.createElement('img')
    logo.setAttribute('src', src)
    logo.setAttribute('alt', alt)
    logo.classList.add(elClass)

    return logo
}

export default Logo