const Logo = (src, alt, id, elClass) => {
    const logo = document.createElement('img')
    logo.setAttribute('src', src)
    logo.setAttribute('alt', alt)
    logo.setAttribute('id', id)
    logo.classList.add(elClass)

    return logo
}

export default Logo