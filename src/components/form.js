import Button from './button'

const Form = (formId, cancelFormButtonId, cancelButtonName, submitButtonId, submitButtonName, display, ...inputs) => {
    const form = document.createElement('form')
    const submitButton = Button(
        submitButtonName,
        submitButtonId,
        'submit',
        'initial'
    )
    const cancelButton = Button(
        cancelButtonName,
        cancelFormButtonId,
        'button',
        'initial'
    )
    inputs.map(x => {
        const textInputEl = document.createElement('input')
        textInputEl.setAttribute('type', 'text')
        textInputEl.setAttribute('placeholder', x)
        form.append(textInputEl)
    })
    form.style.display = display
    form.setAttribute('id', formId)
    form.append(submitButton, cancelButton)

    return form
}

export default Form