import Button from './button'

const Form = (id, display, submitHandler, submitArgs, cancelHandler, cancelArgs, ...inputs) => {
    const form = document.createElement('form')
    const createButton = Button(
        'Create',
        'createProductButton',
        'submit',
        'initial'
    )
    const cancelButton = Button(
        'Cancel',
        'cancelProductCreationButton',
        'button',
        'initial',
        cancelHandler || null,
        cancelArgs
    )
    inputs.map(x => {
        const textInputEl = document.createElement('input')
        textInputEl.setAttribute('type', 'text')
        textInputEl.setAttribute('placeholder', x)
        form.append(textInputEl)
    })
    form.style.display = display
    form.setAttribute('id', id)
    form.append(createButton, cancelButton)
    form.addEventListener('submit', (e) => submitHandler(e, submitArgs) || null)

    return form
}

export default Form