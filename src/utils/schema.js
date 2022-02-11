const Product = (props) => {
    const title = props.title || ''
    const id = props.id || ''
    const components = props.components || []
    const componentQty = components.length
    const containerTypes = props.containerTypes || []
    const containerTypeQty = containerTypes.length
    const containers = props.containers

    return {title, id, components, containerTypes, componentQty, containerTypeQty, containers}
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
    const containers = props.containers

    return {title, id, containers}
}

const Container = (props) => {
    const title = props.title
    const id = props.id
    const containerTypes = props.containerTypes
    const components = props.components
    const work = props.work
    const state = props.state
    const output = props.output

    return {title, id, containerTypes, components, work, state, output}
}

export default {Product, Component, ContainerType, Container}