const Project = (id, title) => {
    const todoList = [];

    const addTodo = (todo) => {
        todoList.push(todo);
    }

    const removeTodo = (todoId) => {
        todoList.splice(todoList.findIndex(_todo => _todo.id === todoId), 1);
    }

    const printTodo = () => console.log(todoList.map(_todo => _todo.title));

    return {id, title, addTodo, removeTodo, printTodo};
}

export {Project};