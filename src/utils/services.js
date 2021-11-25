import todo from './mockupDb'
import {Product, Component, Container} from './schema'

const createProduct = (props) => {
    const title = props.title
    const id = props.id
    const components = props.components

    return {title, id, components}
}

export default {Product, Component, Container}