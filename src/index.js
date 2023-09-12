import './style.css';
import {Todo} from './todo.js';
import {Project, addProject} from './project.js';
import {screenController} from './screen_controller.js';



screenController();

if (module.hot) {
    module.hot.accept();
}

