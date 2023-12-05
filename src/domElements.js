export const displayTasks = document.querySelector("#displayTasks")

export const taskDomElements = {
    dialog: document.querySelector("#add-new-task"),
    showDialogBtn: document.querySelector("#showModalTaskBtn"),
    addBtn: document.querySelector("#addTaskBtn"),
    addingForm: document.querySelector("#addTaskForm"),
    name: document.querySelector("#taskName"),
    description: document.querySelector("#description"),
    dueDate: document.querySelector("#dueDate"),
    priority: document.querySelector("#priority"),
    status: document.querySelector("#status"),
    project: document.querySelector("#project"),
}

export const projectDomElements = {
    dialog: document.querySelector("#add-new-project"),
    showDialogBtn: document.querySelector("#showModalProjectBtn"),
    addBtn: document.querySelector("#addProjectBtn"),
    addingForm: document.querySelector("#addProjectForm"),
}

export const editTaskDomElements = {
    dialog: document.querySelector("#edit-task"),
    confirmBtn: document.querySelector("#editTaskBtn"),
    form: document.querySelector("#editTaskForm"),
    name: document.querySelector("#editTaskName"),
    description: document.querySelector("#editDescription"),
    dueDate: document.querySelector("#editDueDate"),
    priority: document.querySelector("#editPriority"),
    status: document.querySelector("#editStatus"),
}

export const expandTaskDomElements = {
    dialog: document.querySelector("#expand-task"),
    name: document.querySelector("#taskNameD"),
    description: document.querySelector("#descriptionD"),
    dueDate: document.querySelector("#dueDateD"),
    priority: document.querySelector("#priorityD"),
    status: document.querySelector("#statusD"),
    project: document.querySelector("#projectNameD"),
    closeBtn: document.querySelector("#expandCloseBtn"),
}


