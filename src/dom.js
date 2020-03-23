/* eslint-disable no-use-before-define */
import toDoList from './todolist';

const content = document.querySelector('#content');
const project = document.querySelector('#projects');
const todoItems = document.querySelector('#todo-items');

const dom = (() => {
  const generateSelectOption = name => {
    const option = document.createElement('option');
    option.text = name;
    return option;
  };

  const createNewProject = projectName => {
    const toDoLists = JSON.parse(localStorage.getItem('todolist') || '[]');

    const existingProject = toDoLists.find(element => element === projectName);
    if (existingProject) {
      // eslint-disable-next-line no-alert
      alert('Project already exists');
    } else {
      toDoList.addProject(projectName);
      const modal = document.querySelector('.modal');
      modal.remove();
      renderProjects();
    }
  };

  const showNewProjectModal = () => {
    const container = document.createElement('div');
    container.classList.add('modal-container');
    const backDrop = document.createElement('div');
    backDrop.classList.add('back-drop');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const textBox = document.createElement('input');
    textBox.setAttribute('type', 'text');
    textBox.classList.add('new-project-text-box');
    const saveBtn = document.createElement('button');
    saveBtn.innerText = 'Create Project';
    saveBtn.classList.add('save-btn');
    saveBtn.addEventListener('click', () => createNewProject(textBox.value));
    modal.appendChild(textBox);
    modal.appendChild(saveBtn);
    container.appendChild(backDrop);
    container.appendChild(modal);

    content.appendChild(container);
  };

  const showViewModal = (todo) => {
    const container = document.createElement('div');
    container.classList.add('modal-container');
    const backDrop = document.createElement('div');
    backDrop.classList.add('back-drop');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const title = document.createElement('p');
    title.classList.add('view-title');
    title.innerText = todo.title;
    const description = document.createElement('p');
    description.classList.add('view-desc');
    description.innerText = todo.description;
    const date = document.createElement('p');
    date.classList.add('view-date');
    date.innerText = new Date(todo.dueDate);
    const priority = document.createElement('p');
    priority.classList.add('view-priority');
    priority.innerText = todo.priority;
    const completed = document.createElement('p');
    completed.classList.add('completed-label');
    completed.innerText = 'Incomplete';
    if (todo.completed) {
      completed.classList.add('completed-task');
      completed.innerText = 'Complete';
    }

    modal.appendChild(title);
    modal.appendChild(description);
    modal.appendChild(priority);
    modal.appendChild(date);
    container.appendChild(backDrop);
    container.appendChild(modal);
    container.appendChild(completed);

    content.appendChild(container);
  };

  const showEditModal = (name, index, todo) => {
    const container = document.createElement('div');
    container.classList.add('modal-container');
    const backDrop = document.createElement('div');
    backDrop.classList.add('back-drop');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.classList.add('todo-item-title');
    title.textContent = todo.title;
    const description = document.createElement('textarea');
    description.classList.add('todo-item-desc');
    description.innerText = todo.description;
    const date = document.createElement('input');
    date.setAttribute('type', 'date');
    date.classList.add('due-date');
    date.innerText = todo.dueDate;
    const priority = document.createElement('select');
    priority.classList.add('todo-item-priority');
    const high = document.createElement('option');
    high.text = 'High';
    const low = document.createElement('option');
    low.text = 'Low';
    priority.appendChild(high);
    priority.appendChild(low);
    const btn = document.createElement('button');
    btn.innerText = 'Edit';

    const values = {
      title: title.value,
      description: description.value,
      priority: priority.value,
      dueDate: date.value,
    };

    btn.addEventListener('click', () => {
      toDoList.updateToDoItem(name, index, values);
      displayProject(name);
    });
    modal.appendChild(title);
    modal.appendChild(description);
    modal.appendChild(priority);
    modal.appendChild(date);
    modal.appendChild(btn);
    container.appendChild(backDrop);
    container.appendChild(modal);

    content.appendChild(container);
  };

  const generateTodoContent = (name, index, todo) => {
    const singleTodo = document.createElement('div');
    singleTodo.classList.add('single-todo');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('check-box');
    const title = document.createElement('h3');
    title.classList.add('title');
    title.innerText = todo.title;
    const priority = document.createElement('p');
    priority.classList.add('priority');
    priority.innerText = todo.priority;
    const viewBtn = document.createElement('i');
    viewBtn.classList.add('fa');
    viewBtn.classList.add('fa-eye');

    const editBtn = document.createElement('i');
    editBtn.classList.add('fa');
    editBtn.classList.add('fa-pencil-square-o');

    const deleteBtn = document.createElement('i');
    deleteBtn.classList.add('fa');
    deleteBtn.classList.add('fa-trash');

    deleteBtn.addEventListener('click', () => {
      toDoList.deleteToDoItem(name, index);
      displayProject(name);
    });

    editBtn.addEventListener('click', () => showEditModal(name, index, todo));

    viewBtn.addEventListener('click', () => showViewModal(todo));

    singleTodo.appendChild(checkbox);
    singleTodo.appendChild(title);
    singleTodo.appendChild(priority);
    singleTodo.appendChild(viewBtn);
    singleTodo.appendChild(editBtn);
    singleTodo.appendChild(deleteBtn);

    return singleTodo;
  };

  const displayProject = projectName => {
    todoItems.innerHTML = '';
    const projectHeader = document.createElement('div');
    const name = document.createElement('h3');
    name.classList.add('header-title');
    name.innerText = projectName;
    const newToDoBtn = document.createElement('button');
    newToDoBtn.classList.add('new-todo-btn');
    newToDoBtn.innerText = 'New Todo';
    newToDoBtn.addEventListener('click', () => showToDoModal(projectName, null, 'create'));
    projectHeader.appendChild(name);
    projectHeader.appendChild(newToDoBtn);

    const toDoLists = JSON.parse(localStorage.getItem('todolist'));
    const projectTodos = toDoLists.find((el) => el.name === projectName);

    todoItems.appendChild(projectHeader);

    if (projectTodos.todos) {
      projectTodos.todos.forEach((todo, index) => {
        const singleTodo = generateTodoContent(projectName, index, todo);
        todoItems.appendChild(singleTodo);
      });
    }
  };

  const showToDoModal = name => {
    const container = document.createElement('div');
    container.classList.add('modal-container');
    const backDrop = document.createElement('div');
    backDrop.classList.add('back-drop');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.classList.add('todo-item-title');
    const description = document.createElement('textarea');
    description.classList.add('todo-item-desc');
    const date = document.createElement('input');
    date.setAttribute('type', 'date');
    date.classList.add('due-date');
    const priority = document.createElement('select');
    priority.classList.add('todo-item-priority');
    const high = document.createElement('option');
    high.text = 'High';
    const low = document.createElement('option');
    low.text = 'Low';
    priority.appendChild(high);
    priority.appendChild(low);
    const btn = document.createElement('button');
    btn.innerText = 'Create Todo';
    btn.addEventListener('click', () => {
      toDoList.addToDoItem(
        name,
        title.value,
        description.value,
        priority.value,
        date.value,
        false,
      );

      displayProject(name);
      container.remove();
    });
    modal.appendChild(title);
    modal.appendChild(description);
    modal.appendChild(priority);
    modal.appendChild(date);
    modal.appendChild(btn);
    container.appendChild(backDrop);
    container.appendChild(modal);

    content.appendChild(container);
  };

  const generateSelector = () => {
    const selectBox = document.createElement('select');
    selectBox.classList.add('select-box');
    const defaultText = document.createElement('option');
    defaultText.text = 'select option';
    defaultText.setAttribute('disabled', true);
    defaultText.setAttribute('selected', true);
    selectBox.appendChild(defaultText);

    const toDoLists = JSON.parse(localStorage.getItem('todolist') || '[]');

    toDoLists.forEach(element => {
      const option = generateSelectOption(element.name);
      selectBox.appendChild(option);
    });

    selectBox.addEventListener('change', () => displayProject(selectBox.value));

    return selectBox;
  };

  const addNewProject = () => {
    const btn = document.createElement('button');
    btn.classList.add('new-project-btn');
    btn.innerText = 'New Project';
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

  return {
    renderProjects, addNewProject, generateSelector,
  };
})();

export default dom;
