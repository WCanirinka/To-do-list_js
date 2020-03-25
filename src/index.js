import dom from './dom';

const todoList = [
  {
    name: 'Build A House',
    todos: [
      {
        title: 'Consult Architect',
        description: 'Have a face meeting with the architect',
        dueDate: '2020-03-25',
        priority: 'High',
        completed: false,
      },
      {
        title: 'Meet with Project Engineer',
        description: 'Meet with the Project Engineer to discuss project scope',
        dueDate: '2020-03-27',
        priority: 'High',
        completed: false,
      },
    ],
  },
];
const storedTodo = JSON.parse(localStorage.getItem('todolist'));
if (!storedTodo) {
  localStorage.setItem('todolist', JSON.stringify(todoList));
}

dom.renderProjects();