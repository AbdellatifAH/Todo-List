import { taskDomElements, projectDomElements } from "./domElements";
import createTaskCard from "./createTaskCard";
import { createProjectCard } from "./createProjectCard";
import { allProjects, allTasks } from "./projectsList";

export function renderAllProjectDisplay() {
    //this loop is to keep the first 2 element (All Tasks and General Tasks) in the dom
    while (projectDomElements.displayProject.children.length > 2) {
        projectDomElements.displayProject.removeChild(projectDomElements.displayProject.lastChild);
    }
    allProjects.forEach(project => createProjectCard(project));
}

export function renderAllTaskDisplay() {
    taskDomElements.displayTasks.textContent = "";
    allTasks.forEach(task => createTaskCard(task));
}

export function renderProjectTasks(project) {
    taskDomElements.displayTasks.textContent = "";
    project.tasksList.forEach(task => createTaskCard(task));
}