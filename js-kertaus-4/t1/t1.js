'use strict';
// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

const ul = document.querySelector('ul');

function makeArray() {
  ul.innerHTML = '';
  /* for (const [i, todo] of todoList.entries())
    todoList.splice(todoList.indexOf(i), 1);
    Käytännössä sama mitä alla, mutta alempi omasta mielestä helpompi
    */
  for (const todo of todoList) {
    const li = document.createElement('li');
    const input = document.createElement('input');
    const label = document.createElement('label');
    const delButton = document.createElement('button');

    input.type = 'checkbox';
    input.id = 'todo-' + todo.id;
    input.checked = todo.completed;

    input.addEventListener('change', function (evt) {
      todo.completed = input.checked;
      console.log(todoList);
    });

    label.htmlFor = 'todo-' + todo.id;
    label.textContent = todo.task;

    delButton.innerHTML = '&#x2A09;';
    delButton.addEventListener('click', function () {
      ul.removeChild(li);
      todoList.splice(todoList.indexOf(todo), 1);
      console.log(todoList);
    });
    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(delButton);
    ul.appendChild(li);
  }
}

makeArray();

const addButton = document.querySelector('#add');
const dialog = document.querySelector('dialog');
addButton.addEventListener('click', function () {
  dialog.showModal();
});

const form = document.querySelector('form');
form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const formInput = document.querySelector('dialog input');
  const newTodo = {
    id: todoList.length + 1,
    task: formInput.value,
    completed: false,
  };
  todoList.push(newTodo);
  makeArray();
  dialog.close();
  formInput.value = '';
});
