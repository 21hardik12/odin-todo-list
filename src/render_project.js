import { createHtmlElement } from "./create_html_element";
//Project page
const content = document.querySelector('main');

const render = (project) => {
    content.innerHTML = '';
    const title = createHtmlElement('h2', null, null, `${project.title}`);
    const addBtn = createHtmlElement('button', null, ['addBtn'], 'Add Task');
    addBtn.innerHTML = "<img src='./assets/plus-circle-outline.svg'>Add Task";
    // const addIconImg = document.createElement('img');

    // const addImage = new Image();
    // addImage.src = addIcon;
    // console.log(addBtn);
    // addBtn.appendChild(addImage);
    // addBtn.textContent = 'Add Task';

    content.appendChild(title);
    content.appendChild(addBtn);
}

export {render as renderProject};