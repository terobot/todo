const Product = (props) => {
    const title = props.title
    const id = props.id
    const components = props.components
    const containerTypes = props.containerTypes

    return {title, id, components, containerTypes}
}

const Component = (props) => {
    const title = props.title
    const id = props.id
    const containers = props.containers
    const data = props.data

    return {title, id, containers, data}
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

export default {Product, Component, Container}