import toDoList from "./todolist";

const content = document.querySelector('#content');
const project = document.querySelector('#projects');
const todoItems = document.querySelector('#todo-items');

const toDoLists = JSON.parse(localStorage.getItem('toDoList'));

const dom = (() => {
    const generateSelectOption = (name) => {
        const option = document.createElement('option');
        option.text = name;
        return option;
    };

    const createNewProject = (projectName) => {
        const existingProject = toDoLists.find((element) => element === projectName);
        if (existingProject) {
            alert('Project already exists');
        } else
        { toDoList.addProject(projectName);
        renderProjects(); }
    };

    const showNewProjectModal = () => {
        const container = document.createElement('div');
        container.classList.add('modal-container');
        const backDrop = document.createElement('div');
        backDrop.classList.add('back-drop');
        const modal = document.createElement('div');
        modal.classList.add('modal');
        const textBox = document.createElement('input');
        textBox.setAttribute(type, 'text');
        textBox.classList.add('new-project-text-box');
        const saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.addEventListener('click', () => createNewProject(textBox.value));
        modal.appendChild(textBox);
        modal.appendChild(saveBtn);
        container.appendChild(backDrop);
        container.appendChild(modal);

        return container;
    };

    const displayProject = (projectName) => {
        todoItems.innerHTML = '';
        const projectHeader = document.createElement('div');
        const name = document.createElement('h3');
        name.classList.add('header-title');
        const newToDoBtn = document.createElement('button');
        newToDoBtn.classList.add('new-todo-btn');
        newToDoBtn.addEventListener('click', () => showToDoModal(projectName, null, 'create'));
        projectHeader.appendChild(name);
        projectHeader.appendChild(newToDoBtn);
    };

    const showToDoModal = (name) => {
        const container = document.createElement('div');
        container.classList.add('modal-container');
        const backDrop = document.createElement('div');
        backDrop.classList.add('back-drop');
        const modal = document.createElement('div');
        modal.classList.add('modal');
        const title = document.createElement('input');
        title.setAttribute(type, 'text');
        title.classList.add('todo-item-title');
        const description = document.createElement('textarea');
        description.classList.add('todo-item-desc');
        const date = document.createElement('input');
        date.setAttribute(type, 'date');
        date.classList.add('due-date');
        const priority = document.createElement('select');
        priority.classList.add('todo-item-priority');
        const high = document.createElement('option');
        high.text = 'High';
        const low= document.createElement('option');
        low.text = 'Low';
        priority.appendChild(high);
        priority.appendChild(low);
        const btn = document.createElement('button');
        btn.addEventListener('click', () => toDoList.addToDoItem(name, title.value, description.value, priority.value, date.value, false));
        modal.appendChild(title);
        modal.appendChild(description);
        modal.appendChild(priority);
        modal.appendChild(date);
        container.appendChild(backDrop);
        container.appendChild(modal);

        return container
    }

    const generateSelector = () => {
        const selectBox = document.createElement('select');
        selectBox.classList.add('select-box');
        const defaultText = document.createElement('option');
        defaultText.text = 'select option';
        defaultText.setAttribute(disabled, true);
        defaultText.setAttribute(selected, true);
        selectBox.appendChild(defaultText);
        toDoList.forEach((element) => {
            const option = generateSelectOption(element.name);
            selectBox.appendChild(option);
        });
        selectBox.addEventListener('change', () => displayProject(selectBox.value));

        return selectBox;
    };

    const addNewProject = () => {
        const btn = document.createElement('button');
        btn.classList.add('new-project-btn');
        btn.addEventListener('click', showNewProjectModal);

        return btn;
    };

    const renderProjects = () => {
        project.innerHTML = '';
        const newProject = generateSelector();
        const addProjectBtn = addNewProject();
        project.appendChild(newProject);
        project.appendChild(addProjectBtn);
    };
})();

export default dom;