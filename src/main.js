const Main = document.querySelector("main");

const clearMain = () => {    
    while(Main.lastChild) {
        Main.removeChild(Main.lastChild);
    }
}

export {Main, clearMain};