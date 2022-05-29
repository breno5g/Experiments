let input = document.querySelector('.task-input');
const createBtn = document.querySelector('.task-createBtn');
const editBtn = document.querySelector('.task-editBtnForm');
let tasksContainer = document.querySelector('.task-container');
const deleteBtn = document.querySelectorAll('.task-deleteBtn');

class Task {
  constructor(text) {
    this.id = Date.now();
    this.text = text;
  }
}

class Todo {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasksPoo')) || [];
    this.selected = 0;
    // createBtn.addEventListener('click', this.#createNewTask.bind(this));
    createBtn.addEventListener('click', () => this.#createNewTask());
    // Chamando dentro de uma arrow o this passa a ser do contexto externo, vulgo da classe
    deleteBtn.forEach((btn) => {
      btn.addEventListener('click', () => this.#deleteTask());
    });
    editBtn.addEventListener('click', () => this.#editTask());
    this.#render();
  }

  #createNewTask() {
    if (!input.value) return;
    const text = input.value;
    const task = new Task(text);
    this.tasks.push(task);
    this.#render();
    this.#saveTaks();
    this.#clearInput();
  }

  #saveTaks() {
    localStorage.setItem('tasksPoo', JSON.stringify(this.tasks));
  }

  #render() {
    tasksContainer.innerHTML = '';
    this.tasks.forEach(({ text, id }) => {
      const li = document.createElement('li');
      li.setAttribute('data-id', id);
      const span = document.createElement('span');
      span.textContent = text;
      li.appendChild(span);
      const btnContainer = document.createElement('div');
      const remove = document.createElement('button');
      remove.classList.add('task-deleteBtn');
      remove.textContent = 'X';
      remove.addEventListener('click', this.#deleteTask.bind(this));
      const edit = document.createElement('button');
      edit.textContent = 'edit';
      edit.classList.add('task-editBtn');
      edit.addEventListener('click', this.#selectToEdit.bind(this));
      btnContainer.appendChild(edit);
      li.appendChild(btnContainer);
      btnContainer.appendChild(remove);
      tasksContainer.appendChild(li);
    });
  }

  #clearInput() {
    input.value = '';
  }

  #selectToEdit(event) {
    let id = 0;
    if (event) {
      id = event.target.parentElement.parentElement.dataset.id;
    }
    this.selected = Number(id);
    createBtn.classList.toggle('hidden');
    editBtn.classList.toggle('hidden');
  }

  #editTask() {
    const text = input.value;
    const newtaskArr = this.tasks.map((task) => {
      if (task.id === this.selected) {
        return {
          ...task,
          text,
        };
      }
      return task;
    });
    this.tasks = newtaskArr;
    this.#clearInput();
    this.#selectToEdit();
    this.#saveTaks();
    this.#render();
  }

  #deleteTask({
    target: {
      parentElement: { parentElement },
    },
  }) {
    const taskId = Number(parentElement.dataset.id);
    this.tasks = this.tasks.filter(({ id }) => id !== taskId);
    this.#saveTaks();
    this.#render();
  }
}

const todo = new Todo();
