import Service from './services'
import ProductItem from '../components/productItem'
import ComponentsView from '../components/componentsView'
import Button from '../components/button'
import ContainerCard from '../components/containerCard'

const openFormInPlace = (button, form) => {
    button.style.display = 'none'
    form.style.display = 'initial'
    form.children.item(0).focus()
}

const cancelFormInPlace = (button, form) => {
    button.style.display = 'initial'
    form.style.display = 'none'
    Array.from(form.children).map(x => x.value = '')
} 

const submitNewProductForm = (e, form, button, listId) => {
    e.preventDefault()
    const list = document.getElementsByClassName('list')[listId]
    const productTitle = e.target.elements[0].value
    const product = Service.createProduct(productTitle)
    cancelFormInPlace(button, form)
    list.append(ProductItem(product.id, product.title))
    openProduct(product.id)
}

const submitNewComponentForm = (e, productId) => {
    e.preventDefault()
    const product = Service.getProductById(productId)
    const newComponent = Service.createComponent(e.target.elements[0].value)
    product.components.push(newComponent)
    product.componentQty++
    Service.updateProduct(productId, product)
    openProduct(productId)
}

const submitNewContainerTypeForm = (e, productTitle) => {
    e.preventDefault()
    const newContainerType = {
        title: e.target.elements[0].value,
        id: `${Service.getProducts().containerTypeQty+1}`
    }
    Service.addContainerTypeToProduct(productTitle, newContainerType)
    openProduct(productTitle)
}

const openProduct = (productId) => {
    const mainPanel = document.getElementById('mainPanel')
    mainPanel.innerHTML = ''
    mainPanel.append(ComponentsView(productId))
}

const openView = (view) => {
    const mainPanel = document.getElementById('mainPanel')
    mainPanel.innerHTML = ''
    mainPanel.append(view)
}

const fillGridWithAddContainerButtons = (grid, startRow, startCol, rows, cols) => {
    let xCount = startRow
    let yCount = startCol
    rows.map(x => {
        cols.map(y => {
            const item = Button('+', 'addContainer' + xCount + '.' + yCount, 'button','initial')
            item.style.setProperty('grid-column', yCount)
            item.style.setProperty('grid-row', xCount)
            item.addEventListener('click', (e) => {
                console.log(e.target.id.slice(12).split('.'))
                const card = ContainerCard('container' + e.target.id.slice(12))
                const nums = e.target.id.slice(12).split('.')
                card.style.setProperty('grid-column', nums[1])
                card.style.setProperty('grid-row', nums[0])
                grid.append(card)
            })
            grid.append(item)
            yCount++
        })
        yCount = startCol
        xCount++
    })
}

export default {
    openFormInPlace,
    cancelFormInPlace,
    submitNewProductForm,
    submitNewComponentForm,
    submitNewContainerTypeForm,
    openProduct,
    openView,
    fillGridWithAddContainerButtons
}