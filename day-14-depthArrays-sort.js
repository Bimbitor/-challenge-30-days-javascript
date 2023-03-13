function sortByAvailabilityAndPrice(products) {
    // Tu código aquí 👈
    let reply = [...products]/* 
    reply.sort((a, b) => a.price - b.price) */
    let orderPrice = reply.sort((a, b) => a.price - b.price).reverse()
    let orderAvailavility = orderPrice.sort((a, b) => a.inStock - b.inStock).reverse()
    return orderAvailavility
    
}



const products = [
    { name: "product1", price: 10, inStock: true },
    { name: "product2", price: 20, inStock: false },
    { name: "product3", price: 15, inStock: true },
    { name: "product4", price: 5, inStock: false },
]

sortByAvailabilityAndPrice(products)
