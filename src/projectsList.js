import Project from './projects';
import Task from './tasks';
export const allProjects = [];

export function addNewTaskObject(taskName, projectName) {
    const newTask = Task(taskName, projectName);
    let project = findProject(projectName);

    if (project === undefined)
        project = addNewProjectObject(projectName)
    linkTaskAndProject(newTask, project);
    return newTask;
}

function findProject(projectName) {

    const project = allProjects.find((projectInstance) => {
        if (projectInstance.name == projectName)
            return projectInstance
    })

    return project;
}

export function addNewProjectObject(projectName) {
    const newProject = Project(projectName);
    allProjects.push(newProject);
    newProject.indexInAllProject = allProjects.length - 1;
    return newProject;
}

function linkTaskAndProject(project, task) {
    project.tasksList.push(task);
    task.indexInProjectTasksList = tasksList.length - 1;
    task.project = project;
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