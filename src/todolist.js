import project from './project';

const toDoLists = JSON.parse(localStorage.getItem('toDoList'));

const toDoList = (() => {
    const addProject = (name) => {
        const newProject = project(name);
        toDoLists = toDoLists.concat(newProject);
        localStorage.setItem('toDoList', JSON.stringify(toDoLists));
    };

    const deleteProject = (name) => {
        toDoLists = toDoLists.filter((project) => project === name);
        localStorage.setItem('toDoList', JSON.stringify(toDoLists));
    };

    const updateStatus = (name, index) => {
        const existingProject = toDoLists.find((element) => element === name);
        const toDoItem = existingProject.toDos.find((element, idx) => index === idx);
        toDoItem.completed = !toDoItem.completed;
        localStorage.setItem('toDoList', JSON.stringify(toDoLists));
    };

    const addToDoItem = (project, title, description, priority, dueDate, completed) => {
        const newToDo = {title, description, priority, dueDate, completed};
        const existingProject = toDoLists.find((element) => element === project);
        existingProject.addToDo(newToDo);
        localStorage.setItem('toDoList', JSON.stringify(toDoLists));
    };

    const deleteToDoItem = (project, index) => {
        const existingProject = toDoLists.find((element) => element === project);
        existingProject.removeToDo(index);
        localStorage.setItem('toDoList', JSON.stringify(toDoLists));
    };

    const updateToDoItem = (project, index, values) => {
        const existingProject = toDoLists.find((element) => element === project);
        const toDoItem = existingProject.toDos.find((element, idx) => index === idx);
        const {title, description, priority, dueDate} = values;
        toDoItem.title = title;
        toDoItem.description = description;
        toDoItem.priority = priority;
        toDoItem.dueDate = dueDate;
        localStorage.setItem('toDoList', JSON.stringify(toDoLists));
    };

    return { addProject, deleteProject, updateStatus, addToDoItem, deleteToDoItem, updateToDoItem };
})();

export default toDoList;

