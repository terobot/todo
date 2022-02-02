import Handler from '../utils/handlers'

const ProductItem = (productTitle) => {
    const productItem = document.createElement('div')
    productItem.classList.add('productItem')
    productItem.setAttribute('id', productTitle)
    productItem.addEventListener('click', () => Handler.openProduct(productTitle))
    productItem.innerHTML = productTitle

    return productItem
}

export default ProductItem