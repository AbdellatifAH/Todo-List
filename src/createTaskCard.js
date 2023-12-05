import { dropTask } from "./projectsList";
import { editTaskDomElements, expandTaskDomElements, displayTasks } from './domElements';

export default function createTaskCard(task) {

    function createElement(element, textContent = '') {
        const a = document.createElement(element);
        a.textContent = textContent;
        return a;
    }

    const card = createElement("div");
    card.classList.toggle("display-task");

    const taskNameD = createElement("div", task.name);
    const descriptionD = createElement("div", task.description);
    const dueDateD = createElement("div", task.dueDate);
    const priorityD = createElement("div", task.priority);
    const statusD = createElement("div", task.status);
    const projectD = createElement("div", task.project.name);
    const buttonsContainer = createElement("div");
    const dialogExpandButton = createElement("button", "Expand");
    const editButton = createElement("button", "Edit");
    const deleteButton = createElement("button", "Delete");

    editButton.addEventListener("click", () => {
        editTaskDomElements.dialog.showModal();
        editTaskDomElements.name.value = task.name;
        editTaskDomElements.description.value = task.description;
        editTaskDomElements.dueDate.value = task.dueDate;
        editTaskDomElements.priority.value = task.priority;
        editTaskDomElements.status.value = task.status;
    })

    editTaskDomElements.confirmBtn.addEventListener("click", (e) => {
        e.preventDefault();
        task.editTask(

            editTaskDomElements.name.value,
            editTaskDomElements.description.value,
            editTaskDomElements.dueDate.value,
            editTaskDomElements.priority.value,
            editTaskDomElements.status.value
        );
        card.remove();
        createTaskCard(task);
        editTaskDomElements.dialog.close();
        editTaskDomElements.form.reset();
    }, { once: true })

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

    buttonsContainer.append(dialogExpandButton, editButton, deleteButton);
    card.append(taskNameD, dueDateD, priorityD, statusD, projectD, buttonsContainer)
    expandTaskDomElements.closeBtn.addEventListener('click', () => expandTaskDomElements.dialog.close());
    displayTasks.append(card);
}