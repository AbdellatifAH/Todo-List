const projectPrototype = {};

export default function createProject(name) {

    const newProject = function () {
        const project = Object.create(projectPrototype);
        project.name = name;
        project.tasksList = [];
        return project;
    }();

    return newProject
}