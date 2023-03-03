function createTaskPlanner() {
    // Tu código aquí 👈
    let tasks = []

    return {
        addTask(task) {
            task.completed = false
            tasks.push(task)
        },
        
        removeTask(value) {
            let match = tasks.findIndex(element => value === element.id || value === element.name)
            tasks.splice(match, 1)
        },
        
        getTasks() {
            return tasks
        },
        
        getPendingTasks() {
            return tasks.filter(element => element.completed === false)
        },

        getCompletedTasks() {
            return tasks.filter(element => element.completed === true)
        },
        
        markTaskAsCompleted(value) {
            let match = tasks.findIndex(element => value === element.id || value === element.name)
            tasks[match].completed = true
        },
        
        getSortedTasksByPriority() {
            let sorted = [...tasks].sort((a, b) => a.priority - b.priority);
            return sorted/* .filter(element => element.completed === false) */
        },

        filterTasksByTag(tag) {
            return tasks.filter(element => element.tags.find(arrayTag => arrayTag == tag ))
        },
        
        updateTask(taskId, updates) {
            let objectToUpdateIndex = tasks.findIndex(task => task.id == taskId)
            tasks[objectToUpdateIndex] = {...tasks[objectToUpdateIndex], ...updates}
        },
    }
}



const planner = createTaskPlanner()

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
})


planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"]
})

planner.addTask({
    id: 3,
    name: "Llamar a Mamá",
    priority: 2,
    tags: ["personal", "social"]
})

planner.addTask({
    id: 4,
    name: "Lavar platos",
    priority: 2,
    tags: ["health", "home"]
})


planner.markTaskAsCompleted("Llamar a Mamá")

planner.updateTask(2, {
    name: "Llamar a Pedro, el nuevo amigo",
    priority: 2,
    tags: ["personal", "social"]
});

console.log(planner.getTasks());

