const Product = (props) => {
    const title = props.title || ''
    const id = props.id || ''
    const components = props.components || []
    const componentQty = components.length
    const containerTypes = props.containerTypes || []
    const containerTypeQty = containerTypes.length

    return {title, id, components, containerTypes, componentQty, containerTypeQty}
}

const Component = (props) => {
    const title = props.title || ''
    const id = props.id || ''
    const containers = props.containers || []
    const data = props.data || []

    return {title, id, containers, data}
}

const ContainerType = (props) => {
    const title = props.title || ''
    const id = props.id || ''

    return {title, id}
}

const Container = (props) => {
    const title = props.title
    const id = props.id
    const type = props.type
    const work = props.work
    const state = props.state
    const output = props.output

    return {title, id, type, work, state, output}
}

export default {Product, Component, ContainerType, Container}