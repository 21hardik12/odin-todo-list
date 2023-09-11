const createHtmlElement = (type, id, classArray, textContent) => {
    const element = document.createElement(type);
    if (id) element.id = id;
    if (classArray) classArray.map(_class => element.classList.add(_class));
    if (textContent) element.textContent = textContent;

    return element;
};

export {createHtmlElement}