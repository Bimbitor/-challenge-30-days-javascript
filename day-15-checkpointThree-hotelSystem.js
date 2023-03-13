function hotelSystem(rooms) {
    // Tu código aquí
    let reservations = []
    
    return {
        addTask(reservation) {
            reservation.completed = false
            reservations.push(reservation)
        },
        
        removeTask(value) {
            let match = reservations.findIndex(element => value === element.id || value === element.name)
            reservations.splice(match, 1)
        },
        
        getTasks() {
            return reservations
        },
        
        getPendingTasks() {
            return reservations.filter(element => element.completed === false)
        },
        
        getCompletedTasks() {
            return reservations.filter(element => element.completed === true)
        },
        
        markTaskAsCompleted(value) {
            let match = reservations.findIndex(element => value === element.id || value === element.name)
            reservations[match].completed = true
        },
        
        getSortedTasksByPriority() {
            let sorted = [...reservations].sort((a, b) => a.priority - b.priority);
            return sorted/* .filter(element => element.completed === false) */
        },
        
        filterTasksByTag(tag) {
            return reservations.filter(element => element.tags.find(arrayTag => arrayTag == tag ))
        },
        
        updateTask(taskId, updates) {
            let objectToUpdateIndex = reservations.findIndex(reservation => reservation.id == taskId)
            reservations[objectToUpdateIndex] = {...reservations[objectToUpdateIndex], ...updates}
        },
    }
}