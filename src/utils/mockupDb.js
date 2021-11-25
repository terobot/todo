const todo = []
todo.products = []
if(!localStorage.getItem('products')) {
    localStorage.setItem('products', todo.products)
}
else {
    todo.products = JSON.parse(localStorage.getItem('products'))
}

export default todo