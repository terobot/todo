import Handler from '../utils/handlers'

const ProductItem = (productId, productTitle) => {
    const productItem = document.createElement('div')
    productItem.classList.add('productItem')
    productItem.setAttribute('id', productTitle)
    productItem.setAttribute('title', productTitle)
    productItem.addEventListener('click', () => Handler.openProduct(productId))
    productItem.innerHTML = productTitle

    return productItem
}

export default ProductItem