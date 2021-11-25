const Product = (props) => {
    const title = props.title
    const id = props.id
    const components = props.components

    return {title, id, components}
}

const Component = (props) => {
    const title = props.title
    const id = props.id
    const inputSlot = props.inputSlot
    const data = props.data

    return {title, id, inputSlot, data}
}

const Container = (props) => {
    const title = props.title
    const id = props.id
    const type = props.type
    const output = props.output

    return {title, id, type, output}
}

export default {Product, Component, Container}