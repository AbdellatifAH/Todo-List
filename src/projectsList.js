import Project from './projects';
import Task from './tasks';
export const allProjects = [];

export function addNewTaskObject(taskName, description, dueDate, priority, status, projectName) {
    const newTask = Task(taskName, description, dueDate, priority, status, projectName);
    const project = findProject(projectName);
    linkTaskAndProject(project, newTask);
    return newTask;
}

function findProject(projectName) {

    if (projectName == "")
        projectName = "defaultProject";

    let project = allProjects.find((projectInstance) => {
        if (projectInstance.name == projectName)
            return projectInstance
    })

    if (project === undefined)
        project = addNewProjectObject(projectName)
    return project;
}

export function addNewProjectObject(projectName) {
    const newProject = Project(projectName);
    allProjects.push(newProject);
    newProject.indexInAllProject = allProjects.length - 1;
    return newProject;
}

function linkTaskAndProject(project, task) {
    task.project = project;
    (project.tasksList).push(task);
    task.indexInProjectTasksList = task.project.tasksList.length - 1;
}

export function dropTask(task) {
    task.project.tasksList.splice(task.indexInProjectTasksList);
}

export function dropProject(project) {
    project.tasksList.forEach(task => dropTask(task));
    allProjects.splice(project.indexInAllProject);
}

export function createProjectsList() {
    const list = [];
    allProjects.forEach(project => list.push(project.name));
    return list;
}

export function createTasksList() {
    const list = [];
    allProjects.forEach(project =>
        project.tasksList.forEach(task =>
            list.push(task.name)));
    return list;

}