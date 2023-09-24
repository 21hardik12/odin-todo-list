import icon from './assets/format-list-bulleted-square.svg';
import { Todo } from './todo';
import { createHtmlElement } from './create_html_element';
import { clearMain } from './main';
import { renderProject } from './render_project';

const Project = (id, title) => {
    const todoList = [];
    let todoId = 0;

    const addTodo = (title, duedate, imp) => {        
        todoList.push(Todo(todoId++, title, duedate, imp));
    }

    const removeTodo = (todoId) => {
        todoList.splice(todoList.findIndex(_todo => _todo.id === todoId), 1);
    }

    const printTodo = () => console.log(todoList.map(_todo => _todo.title));

    return {id, title, addTodo, removeTodo, printTodo};
}
let idCounter = 1;
const projectList = [];

const addProject = (title) => {    
    const project = Project(idCounter++, title);
    projectList.push(project);    
    return project;
}

const removeProject = (id) => {
    const _project = projectList.findIndex(_prj => _prj.id === id);
    projectList.splice(_project, 1);
}

const createProjectBtn = (prj) => {
    const addBtn = document.createElement('button');    
    addBtn.classList.add('prj-btn');
    const listIcon = document.createElement('img');
    listIcon.src = icon;
    
    const cancelDiv = createHtmlElement('div', null, ['delete-project-btn'], 'x');

    addBtn.appendChild(listIcon);
    addBtn.appendChild(document.createTextNode(prj.title));
    addBtn.appendChild(cancelDiv);
    
    addBtn.onclick = e => {
        renderProject(prj);
        if (e.target.classList.contains('delete-project-btn')) {
            removeProject(prj.id);
            addBtn.remove();         
            clearMain();   
        }
    };

    return addBtn;
}

export {Project, addProject, removeProject, createProjectBtn};