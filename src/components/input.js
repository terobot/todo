const Input = (id, type, display) => {
    const input = document.createElement('input')
    input.classList.add('input')
    input.style.display = display
    input.setAttribute('type', type)
    input.setAttribute('id', id)
    input.setAttribute('title', id)

    return input
}

export default Input