import Task from 'js.js';
import ToDoList from 'ToDoList.js';

const todoList = new ToDoList();
const taskListElement = document.getElementById('task-list');
const taskForm = document.getElementById('task-form');
const taskTitle = document.getElementById('task-title');
const taskDesc = document.getElementById('task-desc');
const taskDate = document.getElementById('task-date');

function renderTasks() {
    taskListElement.innerHTML = '';
    todoList.tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.className = task.completed ? 'completed' : '';
        taskElement.innerHTML = `
            <span>${task.title} - ${task.description} - ${task.dueDate}</span>
            <button onclick="deleteTask(${index})">X</button>
            <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTaskCompletion(${index})">
        `;
        taskListElement.appendChild(taskElement);
    });
}
taskForm.addEventListener('submit', event => {
    event.preventDefault();
    const newTask = new Task(taskTitle.value, taskDesc.value, taskDate.value);
    todoList.addTask(newTask);
    renderTasks();
    taskTitle.value = '';
    taskDesc.value = '';
    taskDate.value = '';
});

window.deleteTask = index => {
    todoList.deleteTask(index);
    renderTasks();
};

window.toggleTaskCompletion = index => {
    todoList.toggleTaskCompletion(index);
    renderTasks();
};

document.addEventListener('DOMContentLoaded', () => {
    renderTasks();
});