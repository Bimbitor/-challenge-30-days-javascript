function getStudentAverage(students) {
    // Tu código aquí 👈
    let prom = (total, units) => {
        total /= units
        total = total.toFixed(2)
        total = parseFloat(total)
        return total
    }

    let classAverage = 0


    students = students.map(student => {
        student.average = prom(student.grades.reduce((sum, element) => sum + element, 0), student.grades.length)
        delete student.grades
        classAverage += student.average
        return student
    })

    classAverage = prom(classAverage, students.length)
    return {
        classAverage,
        students
    }
    
}

getStudentAverage([
    {
        name: "Pedro",
        grades: [90, 87, 88, 90],
    },
    {
        name: "Jose",
        grades: [99, 71, 88, 96],
    },
    {
        name: "Maria",
        grades: [92, 81, 80, 96],
    },
])