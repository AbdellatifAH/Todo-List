const taskPrototype = {};

export default function createTask(name = '', description = '', dueDate = '', priority = '', status = '', project = '') {


    const newTask = function () {
        const task = Object.create(taskPrototype);
        task.name = name;
        task.description = description;
        task.dueDate = dueDate;
        task.priority = priority;
        task.project = project;
        task.status = status;
        return task
    }();


    taskPrototype.editTask = function (newName, newDescription, newDate, newPriority, newStatus) {
        this.name = newName;
        this.description = newDescription;
        this.dueDate = newDate;
        this.priority = newPriority;
        this.status = newStatus;
    }

    taskPrototype.changeStatus = function (newStatus) {
        this.status = newStatus;
    }

    taskPrototype.changePriority = function (newPriority) {
        this.priority = newPriority;
    }

    return newTask
}