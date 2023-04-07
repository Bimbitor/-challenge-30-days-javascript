function searchValue(array, value) {
    // Tu código aquí 👈
    let reply = {
        row : undefined,
        column : undefined
    }

    let operation = array.map(x => {
        if (x.includes(value)) {
            reply.column = x.findIndex(y => y == value)
            reply.row = array.findIndex(y => y == x)
        }
        
    })
    
    let results = Object.values(reply)

    if (results.every(x => x === undefined)) {
        throw new Error("Valor no encontrado")
        
    }

    console.log(operation);
    console.log(reply);
    return reply
}

    


const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

const value = 0

searchValue(array, value)



/*   {
    row: 1,
    column: 1,
} */