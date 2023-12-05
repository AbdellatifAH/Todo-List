import { taskDomElements, projectDomElements, editTaskDomElements, expandTaskDomElements } from './domElements';
import { addNewTaskObject } from './projectsList';
import createTaskCard from './createTaskCard';

taskDomElements.showDialogBtn.addEventListener('click', () => {
    taskDomElements.addingForm.reset();
    taskDomElements.dialog.showModal();
})

projectDomElements.showDialogBtn.addEventListener('click', () => {
    projectDomElements.addingForm.reset();
    projectDomElements.dialog.showModal();
})

taskDomElements.addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const task = addNewTaskObject(

        taskDomElements.name.value,
        taskDomElements.description.value,
        taskDomElements.dueDate.value,
        taskDomElements.priority.value,
        taskDomElements.status.value,
        taskDomElements.project.value
    );

    createTaskCard(task);
    taskDomElements.dialog.close();
    taskDomElements.addingForm.reset();
});

projectDomElements.addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    projectDomElements.dialog.close();
    projectDomElements.addingForm.reset();
});


expandTaskDomElements.closeBtn.addEventListener("click", () => {
    expandTaskDomElements.dialog.close();
})


taskDomElements.dialog.addEventListener("click", e => {
    const dialogDimensions = taskDomElements.dialog.getBoundingClientRect()
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        taskDomElements.dialog.close()
    }
})

projectDomElements.dialog.addEventListener("click", e => {
    const dialogDimensions = projectDomElements.dialog.getBoundingClientRect()
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        projectDomElements.dialog.close()
    }
})

editTaskDomElements.dialog.addEventListener("click", e => {
    const dialogDimensions = editTaskDomElements.dialog.getBoundingClientRect()
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        editTaskDomElements.dialog.close()
    }
})

expandTaskDomElements.dialog.addEventListener("click", e => {
    const dialogDimensions = expandTaskDomElements.dialog.getBoundingClientRect()
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        expandTaskDomElements.dialog.close()
    }
})