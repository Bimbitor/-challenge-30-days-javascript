function groupProducts(products, category) {
    // Tu código aquí
    //Validar si la categoría ingresada existe entre los productos
    let reply = {
        products: "",
        totalPrice: 0,
    }

    let categories = products.map(element => element.category)
    if (categories.includes(category)) {
        let matchedProducts = products.filter(product => product.category == category)
        let matchedProductsNameList = []
        matchedProducts.forEach(product => {
            reply.totalPrice += product.price
            matchedProductsNameList.push(product.name)
        });
        reply.products = matchedProductsNameList.join(", ")
    }

    return reply
}




const products = [
    { name: "Smartphone", category: "Electronics", price: 800 },
    { name: "Laptop", category: "Electronics", price: 1200 },
    { name: "Shirt", category: "Clothing", price: 50 },
    { name: "Pants", category: "Clothing", price: 100 },
];

groupProducts(products, "Electronics")