class User {
    constructor(name) {
        // Tu código aquí 👈
        this.name = name;
    }
    
    notify(task) {
        // Tu código aquí 👈
        console.log(`${this.name} notified ${task}`);
    }
}

class Authorization {
    checkAuthorization(user, task) {
        // Tu código aquí 👈
        if (task.users.includes(user)) {
            return true
        } else {
            throw new Error("No autorizado")
        }
    }
}


class TaskManager {
    constructor() {
        // Tu código aquí 👈
        if (!TaskManager.instance) {
            this.tasks = [];
            TaskManager.instance = Object.freeze(this);
        }
        return TaskManager.instance
    }
    
    static getInstance() {
        // Tu código aquí 👈
        if (!TaskManager.instance) {
            TaskManager.instance = new TaskManager();
        }
        return TaskManager.instance;
    }
    
    addTask(task){
        // Tu código aquí 👈
        if (task instanceof Task) {
            this.tasks.push(task);
        }
    }
    
    getTasks(){
        // Tu código aquí 👈
        return this.tasks;
    }
    
    getTaskById(id){
        // Tu código aquí 👈
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id === id) {
                return this.tasks[i];
            }
        }
        return null;
    }
}

class TaskBuilder {
    constructor() {
        this.id = undefined;
        this.description = undefined;
        this.completed = undefined;
        this.users = undefined;
        this.deadline = new Date();
        this.priority = undefined;
    }
    
    
    setId(id) {
        // Tu código aquí 👈
        this.id = id;
        return this;
    }
    
    setDescription(description) {
        // Tu código aquí 👈
        this.description = description;
        return this;
    }
    
    setCompleted(completed) {
        // Tu código aquí 👈
        this.completed = completed;
        return this;
    }
    
    setUsers(users) {
        // Tu código aquí 👈
        this.users = users;
        return this;
    }
    
    setDeadline(deadline) {
        // Tu código aquí 👈
        this.deadline = deadline;
        return this;
    }
    
    setPriority(priority) {
        // Tu código aquí 👈
        this.priority = priority;
        return this;
    }
    
    build() {
        // Tu código aquí 👈
        const task = new Task(this.id, this.description);
        this.users.forEach(user => {
            task.assignUser(user);
        })
        task.deadline = this.deadline
        task.priority = this.priority
        
        return task
    }
}

class TaskDecorator {
    constructor(task, options) {
        // Tu código aquí 👈
        this.task = task;
        this.deadline = new Date(options.deadline);
        this.priority = options.priority;
    }
    
    assignUser(user){
        // Tu código aquí 👈
        this.user = user;
        return this;
    }
    
    completeTask() {
        // Tu código aquí 👈
        this.completed = true;
        this.notifyUsers()
    }
    
    notifyUsers() {
        // Tu código aquí 👈
        this.users.forEach(user => user.notify(this))
    }
}

class Task{
    constructor(id, description){
        // Tu código aquí 👈
        this.id = id;
        this.description = description;
        this.completed = false;
        this.users = [];
    }
    
    assignUser(user){
        // Tu código aquí 👈
        if (user instanceof User) {
            this.users.push(user);
        } else {
            throw new Error("El usuario no es de tipo User");
        }
    }
    
    completeTask() {
        // Tu código aquí 👈
        this.completed = true;
        this.notifyUsers()
    }
    
    notifyUsers() {
        // Tu código aquí 👈
        this.users.forEach(user => user.notify(this))
    }
}

const task = new Task('5', 'Pasear al perro')
const taskDecorator = new TaskDecorator(task, { deadline: '2023-03-31', priority: 'alta' })

console.log(taskDecorator)



