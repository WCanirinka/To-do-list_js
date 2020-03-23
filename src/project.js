const project = (name) => {
  let toDos = [];

  const addToDo = (todo) => {
    toDos = toDos.concat(todo);
  };

  const getToDo = () => toDos;

  const removeToDo = (index) => {
    toDos = toDos.filter((element, idx) => index !== idx);
  };

  return {
    name, addToDo, getToDo, removeToDo,
  };
};

export default project;