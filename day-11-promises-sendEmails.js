function sendEmail(email, subject, body) {
    // Tu código aquí 👈
    return new Promise((resolve, reject) => {
        if(email && subject && body){
            this.setTimeout(() => {
                resolve({
                    email,
                    subject,
                    body
                })
            }, 2000)
        } else {
            reject(new Error("Error: Hacen falta campos para enviar el email"));
        }
    } )
}


/* sendEmail(
    "test@mail.com",
    "Nuevo reto",
    "Únete a los 30 días de JS"
    )
    .then(result => console.log(result))
     */
    
sendEmail(
    "test@mail.com",
    "oooo",
    "Únete a los 30 días de JS"
)
.then(result => console.log(result))
.catch(error => console.log(error))
    