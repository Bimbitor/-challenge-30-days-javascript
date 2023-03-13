function validateForm(formData, registeredUsers) {
    // Tú código aquí 👈
    const correctFields = ['name', 'lastname', 'email', 'password', ]
    const formFields = Object.keys(formData)
    const missingFields = []

    correctFields.forEach( correctField => {
        if(!formFields.find(formField => formField == correctField)){
            missingFields.push(correctField)
        }
    });

    if (missingFields.length != 0) {
        let formattedMissingFields = missingFields.join(", ")
        throw new Error(`Faltan los siguientes campos: ${formattedMissingFields}`);
    } else {
        let registeredEmails = registeredUsers.map(element => element.email);
        if(registeredEmails.includes(formData.email)){
            throw new Error(`${formData.email}`);
        } else {
            let formattedValidatedForm = {...formData}
            delete formattedValidatedForm.password
            registeredUsers.push(formattedValidatedForm)
            return `Tu registro fue exitoso ${formData.name} ${formData.lastname}`
        }
    }
}

const formData = {
    name: "Juan",
    lastname: "Perez",
    email: "juan@example.com",
    password: "123456"
}

const registeredUsers = [
    { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
    { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
]

validateForm(formData, registeredUsers)


/* const formData2 = {
    name: "Juan",
    password: "123456"
}

const registeredUsers2 = [
    { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
    { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
]

validateForm(formData2, registeredUsers2) */