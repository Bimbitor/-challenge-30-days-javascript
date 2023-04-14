function taskManager() {
    // Tu código aquí 👈
    const tasks = new Map();

    return {
        addTask(task, tags){
            task = task.toLowerCase();
            let newTags = tags
            if(tasks.has(task)){
                newTags = tasks.get(task)
                tags.forEach(tag => {
                    newTags.add(tag)
                });
            }
            tasks.set(task, new Set(newTags));
            return tasks
        },

        printTasks(){
            console.log(tasks);
            return tasks
        }
    }
}

const myTaskManager = taskManager()
myTaskManager.addTask("Comprar leche", ["compras", "urgente"]);
myTaskManager.addTask("Sacar al perro", ["mascotas"]);

myTaskManager.printTasks();

myTaskManager.addTask("Comprar leche", ["urgente", "salud"]);

myTaskManager.printTasks();

