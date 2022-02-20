const Product = (props) => {
    const title = props.title || ''
    const id = props.id || ''
    const components = props.components || []

    return {title, id, components}
}

const Component = (props) => {
    const title = props.title || ''
    const id = props.id || ''
    const containers = props.containers || []

    return {title, id, containers}
}

const Container = (props) => {
    const title = props.title
    const id = props.id
    const work = props.work
    const state = props.state
    const output = props.output

    return {title, id, work, state, output}
}

export default {Product, Component, Container}