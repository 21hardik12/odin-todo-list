import { Project } from "./project";
import { renderProject } from "./render_project";
import { renderThisWeek } from "./this_week";
import { renderToday } from "./today";


const main = document.querySelector('.main');

const inbox = Project(1, 'Inbox');

const screenController = () => {
    const inboxBtn = document.querySelector("#inboxBtn");
    const todayBtn = document.querySelector("#todayBtn");
    const thisWeekBtn = document.querySelector("#thisWeekBtn");
    const addProjectBtn = document.querySelector('#addProjectBtn');

    inboxBtn.addEventListener('click', e => {        
        renderProject(inbox);
    })
    inboxBtn.click();
    todayBtn.addEventListener('click', e => {
        renderToday();
    })
    thisWeekBtn.addEventListener('click', e => {
        renderThisWeek();
    })
};

export {screenController};