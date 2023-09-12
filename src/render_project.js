import { createHtmlElement } from "./create_html_element";
import plusIcon from './assets/plus-circle-outline.svg';
import { clearMain } from "./main";
//Project page
const content = document.querySelector('main');

const render = (project) => {
    clearMain();
    const title = createHtmlElement('h2', null, null, `${project.title}`);
    const addBtn = createHtmlElement('button', null, ['addBtn'], null);
    const icon = new Image();
    icon.src = plusIcon;
    addBtn.appendChild(icon);
    addBtn.appendChild(document.createTextNode('Add Task'));


    content.appendChild(title);
    content.appendChild(addBtn);
}

export {render as renderProject};