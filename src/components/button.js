const Button = (value, id, type, display, clickFunction, args) => {
    const button = document.createElement('button')
    button.classList.add('button')
    button.style.display = display
    button.setAttribute('type', type)
    button.setAttribute('id', id)
    button.setAttribute('value', value)
    button.innerHTML = value
    if (clickFunction) button.addEventListener('click', () => clickFunction(args))

    return button
}

export default Button