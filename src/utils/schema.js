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
    const hero = props.hero
    const description = props.description
    const work = props.work || []
    const workItemQty = work.length || 0
    const doneWorkItemQty = work.map(x => x.state === 'done').length || 0

    return {title, id, hero, description, work, workItemQty, doneWorkItemQty}
}

const WorkItem = (props) => {
    const title = props.title
    const id = props.id
    const state = props.state
    const outpus = props.output

    return {title, id, state, output}
}

export default {Product, Component, Container, WorkItem}