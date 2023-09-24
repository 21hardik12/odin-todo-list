const Todo = (i, t, dd = null, imp) => {
    const id = i;
    const title = t;
    const dueDate = dd;
    const important = imp;

    const toggleImportant = () => {
        important != important;
    }

    const pTodo = () => {
        console.log(id, title, dueDate, important);
    }

    return {id, title, dueDate, important, toggleImportant};
}

export {Todo};