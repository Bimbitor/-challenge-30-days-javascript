function findFamousCats(cats) {
    // Tu código aquí 👈
    let gatosFamosos = [];
    let maximaCantidadSeguidores = 0;
    
    for (let cat of cats) {
        let seguidores = cat.followers.reduce(function (acumulador, seguidores) {
            return acumulador + seguidores;
        });
        
        if (seguidores > maximaCantidadSeguidores) {
            maximaCantidadSeguidores = seguidores;
            gatosFamosos = [];
            gatosFamosos.push(cat.name);
        } else if (seguidores === maximaCantidadSeguidores) {
            gatosFamosos.push(cat.name);
        }
    }

    return gatosFamosos;
}


findFamousCats([
    {
        name: "Luna",
        followers: [500, 200, 300]
    },
    {
        name: "Michi",
        followers: [100, 300]
    },
])
