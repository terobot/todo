const Button = (value, id, type, display) => {
    const button = document.createElement('button')
    button.classList.add('button')
    button.style.display = display
    button.setAttribute('type', type)
    button.setAttribute('id', id)
    button.setAttribute('value', value)
    button.innerHTML = value

    return button
}

export default Button