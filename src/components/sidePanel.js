import Service from '../utils/services'

const ProductEl = (title) => {
    const productEl = document.createElement('div')
    productEl.innerHTML = `${title}`

    return productEl
}

const SidePanel = () => {
    const sidePanel = document.createElement('div')
    const products = document.createElement('div')
    const title = document.createElement('div')
    sidePanel.classList.add('sidePanel')
    products.classList.add('products')
    title.innerHTML = 'Products'
    Service.getProducts().map(x => products.appendChild(ProductEl(x.title)))
    sidePanel.append(title, products)

    return sidePanel
}

export default SidePanel