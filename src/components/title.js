const Title = (text, elClass) => {
    const title = document.createElement('div')
    title.classList.add(elClass)
    title.innerText = text
    
    return title
}

export default Title