import Project from './projects';
import Task from './tasks';
export const allProjects = [];
export const allTasks = [];
export const defaultProject = Project("General Tasks");

export function addNewTaskObject(taskName, description, dueDate, priority, status, projectName) {
    const newTask = Task(taskName, description, dueDate, priority, status, projectName);
    allTasks.push(newTask);
    newTask.indexInAllTasks = allTasks.length - 1;
    let project;
    if (projectName) {
        project = addNewProjectObject(projectName);
        linkTaskAndProject(project, newTask);
    }
    else
        linkTaskAndProject(defaultProject, newTask);
    return newTask;
}

export function findProject(projectName) {

    const project = allProjects.find((projectInstance) => {
        if (projectInstance.name == projectName)
            return projectInstance
    })

    return project;
}

export function addNewProjectObject(projectName) {
    let newProject = findProject(projectName);
    if (newProject === undefined) {
        newProject = Project(projectName)
        allProjects.push(newProject);
        newProject.indexInAllProject = allProjects.length - 1;
    }
    return newProject;
}

function linkTaskAndProject(project, task) {
    task.project = project;
    project.tasksList.push(task);
    task.indexInProjectTasksList = task.project.tasksList.length - 1;
}

function updateIndex(array, indexName) {
    array.forEach((instance, index) => {
        instance[indexName] = index;
    })
}

function dropTaskFromAllTasks(task) {
    allTasks.splice(task.indexInAllTasks, 1);
    updateIndex(allTasks, 'indexInAllTasks');
}

export function dropTask(task) {
    allTasks.splice(task.indexInAllTasks, 1);
    updateIndex(allTasks, 'indexInAllTasks');

    task.project.tasksList.splice(task.indexInProjectTasksList, 1);
    updateIndex(task.project.tasksList, 'indexInProjectTasksList');
    task.project = "";
}

export function dropProject(project) {
    project.tasksList.forEach(task => dropTaskFromAllTasks(task));
    allProjects.splice(project.indexInAllProject, 1);
    updateIndex(allProjects, 'indexInAllProject');
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
