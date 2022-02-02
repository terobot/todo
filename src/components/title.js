const Title = (text, id, elClass) => {
    const title = document.createElement('div')
    title.classList.add(elClass)
    title.innerText = text
    title.setAttribute('id', id)
    
    return title
}

export default Title