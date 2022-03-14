const Image = (src, alt, id, elClass) => {
    const image = document.createElement('img')
    image.setAttribute('src', src)
    image.setAttribute('alt', alt)
    image.setAttribute('id', id)
    image.setAttribute('title', alt)
    image.classList.add(elClass)

    return image
}

export default Image