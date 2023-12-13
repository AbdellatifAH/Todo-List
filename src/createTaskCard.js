import { allTasks, dropTask } from "./projectsList";
import { expandTaskDomElements, findElement, projectDomElements, taskDomElements } from './domElements';
import { clearTasksDisplay, renderProjectTasks } from "./renderDisplays";

export default function createTaskCard(task) {

    function createElement(element, textContent = '', attribute = '', attributeValue = '') {
        const a = document.createElement(element);
        a.textContent = textContent;
        if (attribute)
            a.setAttribute(attribute, attributeValue);
        return a;
    }

    const card = createElement("div");
    card.classList.toggle("display-task");

    const taskName = createElement("div", task.name);
    const description = createElement("div", task.description);
    const dueDate = createElement("div", task.dueDate);
    const priority = createElement("div", task.priority);
    const status = createElement("div", task.status);
    const project = createElement("div", task.project.name);
    const buttonsContainer = createElement("div");
    const dialogExpandButton = createElement("button", "Expand");
    const deleteButton = createElement("button", "Delete");


    const editButton = createElement("button", "Edit");

    const editTaskName = createElement("input");
    editTaskName.placeholder = "New Task Name";
    const editTasDescription = createElement("input");
    editTasDescription.placeholder = "New Description"
    const editTaskDueDate = createElement("input", "", "type", "date");
    editTaskDueDate.value = task.dueDate;

    const editTaskPriority = createElement("select");
    editTaskPriority.append(

        createElement("option", "High"),
        createElement("option", "Normal", "selected", true),
        createElement("option", "Low")
    )

    const editTaskStatus = createElement("select");
    editTaskStatus.append(

        createElement("option", "Done"),
        createElement("option", "In Progress"),
        createElement("option", "Pending", "selected", true)
    )

    const editConfirmButton = createElement("button", "Confirm");
    const editCancelButton = createElement("button", "Cancel");
    const editButtonsContainer = createElement("div");
    editButtonsContainer.append(editConfirmButton, editCancelButton)

    editButton.addEventListener("click", () => {
        card.textContent = '';
        findElement(taskDomElements.displayTasksHeader, "div", "Description").hidden = false;
        findElement(taskDomElements.displayTasksHeader, "div", "Project Name").hidden = true;
        card.append(editTaskName, editTasDescription, editTaskDueDate, editTaskPriority, editTaskStatus, editButtonsContainer);
    })

    editCancelButton.addEventListener('click', () => {
        card.textContent = '';
        findElement(taskDomElements.displayTasksHeader, "div", "Description").hidden = true;
        findElement(taskDomElements.displayTasksHeader, "div", "Project Name").hidden = false;
        card.append(taskName, dueDate, priority, status, project, buttonsContainer);
    })

    editConfirmButton.addEventListener("click", () => {
        task.editTask(editTaskName.value, editTasDescription.value, editTaskDueDate.value, editTaskPriority.value, editTaskStatus.value);
        card.textContent = '';
        findElement(taskDomElements.displayTasksHeader, "div", "Description").hidden = true;
        findElement(taskDomElements.displayTasksHeader, "div", "Project Name").hidden = false;
        // card.append(taskName, dueDate, priority, status, project, buttonsContainer);

        findElement(projectDomElements.displayProject, "label", task.project.name).click();

        renderProjectTasks(task.project);
    })

    deleteButton.addEventListener("click", () => {
        dropTask(task);
        card.remove();
    })

    dialogExpandButton.addEventListener('click', () => {
        expandTaskDomElements.dialog.showModal();
        expandTaskDomElements.name.textContent = task.name;
        expandTaskDomElements.description.textContent = task.description;
        expandTaskDomElements.dueDate.textContent = task.dueDate;
        expandTaskDomElements.priority.textContent = task.priority;
        expandTaskDomElements.status.textContent = task.status;
        expandTaskDomElements.project.textContent = task.project.name;
    });

    buttonsContainer.append(dialogExpandButton, deleteButton, editButton);
    card.append(taskName, dueDate, priority, status, project, buttonsContainer)
    expandTaskDomElements.closeBtn.addEventListener('click', () => expandTaskDomElements.dialog.close());
    taskDomElements.displayTasks.append(card);
}