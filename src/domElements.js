
export function findElement(container, selector, text) {

    return Array.from(container.querySelectorAll(selector))
        .find(el => el.textContent === text);
};


export const taskDomElements = {
    displayTasksHeader: document.querySelector("#displayTasksHeader"),
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
    displayTasks: document.querySelector("#displayTasks"),
}

export const projectDomElements = {
    dialog: document.querySelector("#add-new-project"),
    name: document.querySelector("#projectName"),
    showDialogBtn: document.querySelector("#showModalProjectBtn"),
    addBtn: document.querySelector("#addProjectBtn"),
    addingForm: document.querySelector("#addProjectForm"),
    displayProject: document.querySelector("#displayProject"),
    allTasks: document.querySelector("#allTasks"),
    defaultProject: document.querySelector("#defaultProject"),

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


