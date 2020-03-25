import Project from './models/project';

const project = (() => {
  const addProject = (name) => {
    const newProject = new Project(name);
    let toDoLists = JSON.parse(localStorage.getItem('todolist'));
    toDoLists = toDoLists.concat(newProject);
    localStorage.setItem('todolist', JSON.stringify(toDoLists));
  };

  const deleteProject = (name) => {
    let toDoLists = JSON.parse(localStorage.getItem('todolist'));
    toDoLists = toDoLists.filter((project) => project === name);
    localStorage.setItem('todolist', JSON.stringify(toDoLists));
  };

  return {
    addProject,
    deleteProject,
  };
})();

export default project;
