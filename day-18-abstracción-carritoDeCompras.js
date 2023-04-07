class Product {
    // No debes editar este archivo ❌
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    
    addToCart() {
        throw new Error("La lógica de este método debe ser implementada por las clases hijas");
    }
}

class Article extends Product {
    // Tu código aquí 👈
    addToCart() {
        return `Agregando ${this.quantity} unidades del artículo ${this.name} al carrito`
    }
}

class Service extends Product{
    // Tu código aquí 👈
    addToCart() {
        return `Agregando el servicio ${this.name} al carrito`
    }
}

class Cart {
    // Tu código aquí 👈
    constructor(){
        this.products = []
    }
    
    addProduct(product){
        this.products.push(product)
        return product.addToCart()
    }

    deleteProduct(product){
        this.products = this.products.filter(x => x !== product)
    }

    calculateTotal(){
        return this.products.reduce((total, item) => total += item.price * item.quantity ,0)
    }

    getProducts(){
        return this.products
    }
}


const book = new Article("Libro", 100, 2);
const mesa = new Article("Mesa", 150, 5);
const course = new Service("Curso", 120, 1);
const cleaning = new Service("Cleaning", 60, 1);

const cart = new Cart();
cart.addProduct(book);
cart.addProduct(course);
cart.calculateTotal();

console.log(cart.getProducts());

const cart2 = new Cart();
cart2.addProduct(mesa);
cart2.addProduct(cleaning);
cart2.calculateTotal();

cart2.deleteProduct(mesa);

