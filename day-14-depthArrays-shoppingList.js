function processShoppingList(list) {
    // Tu código aquí 👈

    let reply = 0

    list.forEach(element => {
        if (element.name.includes("oferta")) {
            element.price -= element.price * (20/100) 
        }

        element.price *= element.quantity
        delete element.quantity
        reply += element.price

    });

    return reply
}


const shoppingList = [
    { name: "pan", price: 20, quantity: 2 },
    { name: "leche", price: 25, quantity: 1 },
    { name: "oferta manzanas", price: 10, quantity: 3 },
]

processShoppingList(shoppingList)