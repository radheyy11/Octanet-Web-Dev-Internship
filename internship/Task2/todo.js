// script.js

const form = document.getElementById('task-form');
const taskInput = document.getElementById('task');
const deadlineInput = document.getElementById('deadline');
const priorityInput = document.getElementById('priority');
const taskList = document.getElementById('task-list');

// Event listener for form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const taskValue = taskInput.value.trim();
    const deadlineValue = deadlineInput.value;
    const priorityValue = priorityInput.value;

    if (taskValue === '') {
        alert('Please enter a task');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
        <span>${taskValue}</span>
        <span>Deadline: ${deadlineValue}</span>
        <span>Priority: ${priorityValue}</span>
        <button class="delete-btn">Delete</button>
    `;

    // Append task to the task list
    taskList.appendChild(taskItem);

    // Clear input fields
    taskInput.value = '';
    deadlineInput.value = '';
    priorityInput.value = 'low';

    // Attach event listener for delete button
    const deleteBtn = taskItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        taskItem.remove();
    });
});
