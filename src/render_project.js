import { createHtmlElement } from "./create_html_element";
import plusIcon from './assets/plus-circle-outline.svg';
import textIcon from './assets/text.svg';
import clockIcon from './assets/clock-outline.svg';
import starIcon from './assets/star-outline.svg';
import starFilledIcon from './assets/star.svg';
import { clearMain } from "./main";
import { Todo } from "./todo";
//Project page
const content = document.querySelector('main');

const render = (project) => {
    clearMain();
    const title = createHtmlElement('h2', null, null, `${project.title}`);
    const addTodoBtn = createHtmlElement('button', null, ['addBtn'], null);
    const icon = new Image();
    icon.src = plusIcon;
    addTodoBtn.appendChild(icon);
    addTodoBtn.appendChild(document.createTextNode('Add Task'));
    addTodoBtn.dataset.project = project.id;

    const handleAddTodo = (e) => {
        addTodoBtn.style.display = 'none';

        // todo input div
        const todoInputDiv = document.createElement('div');
        todoInputDiv.classList.add('todo-input-div');

        const todoInput = document.createElement('input');
        todoInput.type = 'text';
        todoInput.placeHolder = 'New Task';

        const utilityDiv = document.createElement('div');
        utilityDiv.classList.add('utility-div');

        
        
        const importantButton = document.createElement('button');
        importantButton.classList.add('star');
        const dateButton = document.createElement('span');
        dateButton.classList.add('datepicker-toggle-button');
        const saveButton = document.createElement('button');        
        saveButton.classList.add('save');

        const starI = document.createElement('img');
        starI.src = starIcon;
        const starFilledI = document.createElement('img');
        starFilledI.src = starFilledIcon;
        const clockI = document.createElement('img');
        clockI.src = clockIcon;        

        const dateSpan = document.createElement('span');
        dateSpan.classList.add('datepicker-toggle');
        const dateInput = document.createElement('input');
        dateInput.classList.add('datepicker-input')
        dateInput.type = 'date';
        dateSpan.appendChild(dateButton);
        dateSpan.appendChild(dateInput);

        
        importantButton.appendChild(starI);
        dateButton.appendChild(clockI);
        saveButton.textContent = 'Save';

        const importantButtonHandler = e => {
            if (!importantButton.classList.contains('stared')) {
                importantButton.removeChild(starI);
                importantButton.appendChild(starFilledI);
                importantButton.classList.add('stared');
            } else {
                importantButton.classList.remove('stared');
                importantButton.removeChild(starFilledI);
                importantButton.appendChild(starI);
            }
        }

        importantButton.addEventListener('click', importantButtonHandler);

        // handling of save of task input 
        const saveButtonHandler = e => {
            const taskValue = todoInput.value;
            const imp = importantButton.classList.contains('stared');
            const d = dateInput.value;
            
            const _todoDiv = project.addTodo(taskValue, d, imp);            
            content.appendChild(_todoDiv);
            content.removeChild(todoInputDiv);        
            addTodoBtn.style.display = 'flex';   
            content.appendChild(addTodoBtn); 
        };
        saveButton.addEventListener('click', saveButtonHandler);


        //creating a div to encompass the datepicker elements to make it easier for styling
        const dateSpanDiv = document.createElement('div');
        dateSpanDiv.classList.add('datepicker-div');
        dateSpanDiv.appendChild(dateSpan);

        utilityDiv.appendChild(dateSpanDiv);
        utilityDiv.appendChild(importantButton);
        utilityDiv.appendChild(saveButton);

        todoInputDiv.appendChild(todoInput);
        todoInputDiv.appendChild(utilityDiv);

        content.appendChild(todoInputDiv);
    }


    addTodoBtn.addEventListener('click', handleAddTodo);

    content.appendChild(title);
    project.todoDivs().map(_todoDiv => content.appendChild(_todoDiv));
    content.appendChild(addTodoBtn);
}

export {render as renderProject};