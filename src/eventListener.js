import { taskDomElements, projectDomElements, expandTaskDomElements } from './domElements';
import { addNewTaskObject, allProjects, allTasks, defaultProject, dropProject } from './projectsList';
import { addNewProjectObject } from './projectsList';
import { renderAllProjectDisplay, renderAllTaskDisplay, renderProjectTasks } from './renderDisplays';

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
    addNewTaskObject(

        taskDomElements.name.value,
        taskDomElements.description.value,
        taskDomElements.dueDate.value,
        taskDomElements.priority.value,
        taskDomElements.status.value,
        taskDomElements.project.value
    );

    renderAllTaskDisplay();
    renderAllProjectDisplay();
    taskDomElements.dialog.close();
    taskDomElements.addingForm.reset();
});

projectDomElements.addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addNewProjectObject(projectDomElements.name.value);
    renderAllProjectDisplay();
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

projectDomElements.defaultProject.addEventListener("click", () => {
    renderProjectTasks(defaultProject);
})

projectDomElements.allTasks.addEventListener("click", () => {
    renderAllTaskDisplay();
})
