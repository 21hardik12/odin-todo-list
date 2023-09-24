import {
    Project,
    addProject,
    removeProject,
    createProjectBtn,
} from "./project";
import { renderProject } from "./render_project";
import { renderThisWeek } from "./this_week";
import { renderToday } from "./today";

const inbox = Project(0, "inbox");

const screenController = () => {
    const nav = document.querySelector(".main-nav");

    nav.addEventListener("click", (event) => {
        const target = event.target;
        if (target.classList.contains("btn")) {            
            if (target.id === "inboxBtn") {                
                renderProject(inbox);
            } else if (target.id === "todayBtn") {
                renderToday();
            } else if (target.id === "thisWeekBtn") {
                renderThisWeek();
            }
        }
    });

    const addProjectBtn = document.querySelector("#addProjectBtn");

    addProjectBtn.addEventListener("click", (e) => {
        addProjectBtn.style.display = "none";
        const projectNameInput = document.createElement("input");
        const projectNav = document.querySelector(".project-nav");
        projectNameInput.type = "text";
        projectNameInput.placeholder = "Project Name";

        const projectNameInputHandle = () => {
            const prj = addProject(projectNameInput.value);
            const projectBtn = createProjectBtn(prj);
            projectNav.appendChild(projectBtn);
            projectNav.appendChild(addProjectBtn);
            addProjectBtn.style.display = "flex";

            projectNameInput.removeEventListener("blur", eventHandle2);
            projectNameInput.removeEventListener("keyup", eventHandle1);
            projectNameInput.remove();
        };

        const eventHandle1 = (e) => {
            if (e.key === "Enter") {
                projectNameInputHandle();
            } else if (e.key === "Escape") {
                addProjectBtn.style.display = "flex";
                projectNameInput.removeEventListener("blur", eventHandle2);
                projectNameInput.removeEventListener("keyup", eventHandle1);
                projectNameInput.remove();
            }
        };

        const eventHandle2 = (e) => {
            if (!projectNameInput.value) {
                addProjectBtn.style.display = "flex";
                projectNameInput.removeEventListener("blur", eventHandle2);
                projectNameInput.removeEventListener("keyup", eventHandle1);
                projectNameInput.remove();
            } else {
                projectNameInputHandle();
            }
        };

        projectNameInput.addEventListener("keyup", eventHandle1);
        projectNameInput.addEventListener("blur", eventHandle2);
        projectNav.appendChild(projectNameInput);
        projectNameInput.focus();
    });
};

export { screenController };
