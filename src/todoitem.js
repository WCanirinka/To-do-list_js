import TodoItem from './models/todoitem';

const toDoItem = (() => {
  const updateTodoItemStatus = (name, index) => {
    const toDoLists = JSON.parse(localStorage.getItem('todolist'));
    const existingProject = toDoLists.find((element) => element.name === name);
    const toDoItem = existingProject.todos.find((element, idx) => index === idx);
    toDoItem.completed = !toDoItem.completed;
    localStorage.setItem('todolist', JSON.stringify(toDoLists));
  };

  const addToDoItem = (project, title, description, priority, dueDate) => {
    const newToDo = new TodoItem(title, description, dueDate, priority);

    const toDoLists = JSON.parse(localStorage.getItem('todolist'));

    const existingProject = toDoLists.find((element) => element.name === project);

    if (!existingProject.todos) {
      existingProject.todos = [];
      existingProject.todos.push(newToDo);
    } else {
      existingProject.todos.push(newToDo);
    }

    localStorage.setItem('todolist', JSON.stringify(toDoLists));
  };

  const deleteToDoItem = (project, index) => {
    const toDoLists = JSON.parse(localStorage.getItem('todolist'));
    const existingProject = toDoLists.find((element) => element.name === project);

    if (existingProject.todos) {
      existingProject.todos.splice(index, 1);
    }

    localStorage.setItem('todolist', JSON.stringify(toDoLists));
  };

  const updateToDoItem = (project, index, title, description, date, priority) => {
    const toDoLists = JSON.parse(localStorage.getItem('todolist'));
    const existingProject = toDoLists.find((element) => element.name === project);
    const toDoItem = existingProject.todos.find((element, idx) => index === idx);

    toDoItem.title = title;
    toDoItem.description = description;
    toDoItem.priority = priority;
    toDoItem.dueDate = date;

    localStorage.setItem('todolist', JSON.stringify(toDoLists));
  };

  return {
    updateTodoItemStatus,
    addToDoItem,
    deleteToDoItem,
    updateToDoItem,
  };
})();

export default toDoItem;
