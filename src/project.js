import icon from './assets/format-list-bulleted-square.svg';
import starIcon from './assets/star-outline.svg';
import staredIcon from './assets/star.svg';
import circle from './assets/circle-outline.svg';
import { Todo } from './todo';
import { createHtmlElement } from './create_html_element';
import { Main, clearMain } from './main';
import { renderProject } from './render_project';

const Project = (id, title) => {
    const todoList = [];
    let todoId = 0;

    const createTodoBtn = (_todo) => {
        const todoDiv = document.createElement('div');
        const todoTitle = document.createElement('span');
        const todoDate = document.createElement('span');
        const todoImportantBtn = document.createElement('button');
        const todoImportant = document.createElement('img');
        const todoFinishedBtn = document.createElement('button');

        const circleIcon = document.createElement('img');
        circleIcon.src = circle;
        todoFinishedBtn.appendChild(circleIcon);
 
        todoFinishedBtn.classList.add('todo-finished-btn');
        todoDiv.classList.add('todo-div');
        todoTitle.classList.add('todo-title');
        todoDate.classList.add('todo-date');
        todoImportant.classList.add('todo-important');

        todoTitle.textContent = _todo.title;
        todoDate.textContent = _todo.dueDate;
        todoImportant.src = _todo.important ? staredIcon : starIcon;
        todoImportantBtn.appendChild(todoImportant);

        todoImportantBtn.addEventListener('click', e => {
            if (_todo.important) {
                console.log('stared');
                todoImportant.src = starIcon;               
            } else {
                console.log('not stared');
                todoImportant.src = staredIcon;               
            }
            _todo.toggleImportant();
        })

        todoFinishedBtn.addEventListener('click', e => {
            Main.removeChild(todoDiv);
            removeTodo(_todo.id);
        })

        todoDiv.appendChild(todoFinishedBtn);
        todoDiv.appendChild(todoTitle);
        todoDiv.appendChild(todoDate);
        todoDiv.appendChild(todoImportantBtn);

        return todoDiv;
    }

    const todoDivs = () => {
        return todoList.map(_todo => createTodoBtn(_todo));
    }

    const addTodo = (title, duedate, imp) => {    
        const _todo = Todo(todoId++, title, duedate, imp);    
        todoList.push(_todo);

        return createTodoBtn(_todo);
    }

    const removeTodo = (todoId) => {
        todoList.splice(todoList.findIndex(_todo => _todo.id === todoId), 1);
    }

    const printTodo = () => console.log(todoList.map(_todo => _todo.title));

    return {id, title, addTodo, removeTodo, printTodo, todoDivs};
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