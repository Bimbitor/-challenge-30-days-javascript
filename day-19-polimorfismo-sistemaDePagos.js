class Pay {
    // Tu código aquí 👈
    
    makePay(quantity){
        return {
            realized: true,
            quantity: quantity
        }
    }
}

class Card extends Pay {
    // Tu código aquí 👈
    constructor(cardNumber){
        super()
        this.lastCardNumbers = ""
        this.cardNumber =cardNumber
    }
    makePay(quantity){
        if (this.cardNumber.length === 16) {
            this.lastCardNumbers = this.cardNumber.slice(-4)
            return {
                ...super.makePay(quantity),
                lastCardNumbers: this.lastCardNumbers
            }
        } else {
            throw new Error("El dato debe tener 16 dígitos")
        }
    }
}

class PayPal extends Pay {
    // Tu código aquí 👈
    constructor(email){
        super()
        this.email = email
    }
    
    makePay(quantity){
        return {
            ...super.makePay(quantity),
            platform: "PayPal",
            email: this.email
        }
    }
}

class Cash extends Pay {
    // Tu código aquí 👈
    constructor(){
        super()
    }
    
    makePay(quantity) {
        return super.makePay(quantity)
    }
    
}


function processPay(method, quantity) {
    // Tu código aquí 👈
    return method.makePay(quantity)
    
}



const card = new Card("4913478952471122")

processPay(card, 100)


const paypal = new PayPal("test@mail.com")

processPay(paypal, 240)


const cash = new Cash()

processPay(cash, 400)
