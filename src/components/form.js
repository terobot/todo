const Form = (formId, display, ...inputs) => {
    const form = document.createElement('form')
    inputs.map(x => {
        const textInputEl = document.createElement('input')
        textInputEl.setAttribute('type', 'text')
        textInputEl.setAttribute('placeholder', x)
        form.append(textInputEl)
    })
    form.style.display = display
    form.setAttribute('id', formId)

    return form
}

export default Form