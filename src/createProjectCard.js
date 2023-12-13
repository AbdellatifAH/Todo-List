import { projectDomElements } from "./domElements";
import { allProjects, allTasks, dropProject } from "./projectsList";
import { renderAllProjectDisplay, renderAllTaskDisplay, renderProjectTasks } from "./renderDisplays";

export function createProjectCard(project) {

    function createElement(element, textContent = '', attribute = '', attributeValue = '', attribute2 = '', attribute2Value = '') {
        const a = document.createElement(element);
        if (attribute)
            a.setAttribute(attribute, attributeValue);
        if (attribute2)
            a.setAttribute(attribute2, attribute2Value);
        a.textContent = textContent;
        return a;
    }

    const projectCard = createElement("div");

    const radio = createElement("input", "", "type", "radio", "name", "projects");
    radio.id = project.name;

    const projectName = createElement("label", project.name, "for", project.name);

    const editButton = createElement("button", "Edit");
    const deleteButton = createElement("button", "Delete");

    const editInput = createElement("input");
    editInput.value = project.name;
    const editConfirm = createElement("button", "Confirm");
    const editCancel = createElement("button", "Cancel");

    editButton.addEventListener("click", () => {
        projectCard.textContent = '';
        projectCard.append(editInput, editConfirm, editCancel);
    })

    editCancel.addEventListener('click', () => {
        projectCard.textContent = '';
        projectCard.append(radio, projectName, deleteButton, editButton);
    })

    editConfirm.addEventListener("click", () => {
        project.editProjectName(editInput.value);
        projectCard.textContent = "";
        projectCard.append(radio, projectName, deleteButton, editButton);
        renderAllProjectDisplay();
    })

    deleteButton.addEventListener("click", () => {
        dropProject(project);
        renderAllProjectDisplay();
        projectDomElements.allTasks.click();
    })

    radio.addEventListener("click", () => {
        renderProjectTasks(project);
    })


    projectCard.append(radio, projectName, deleteButton, editButton);
    projectDomElements.displayProject.append(projectCard);
}

// <div class="display-task">
// <div></div>
// <div></div>
// <div>Normal</div>
// <div>Pending</div>
// <div>General Tasks</div>
// <div>
// <button>Expand</button>
// <button>Delete</button>
// </div>
// </div>
