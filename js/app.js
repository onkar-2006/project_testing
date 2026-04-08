document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');

    // Load tasks from local storage on startup
    loadTasks();

    // Event Listeners
    addBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    taskList.addEventListener('click', handleTaskAction);

    // Functions
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === '') {
            return; // Prevent adding empty tasks
        }

        createTaskElement(taskText, false);
        taskInput.value = '';
        saveTasks();
    }

    function createTaskElement(text, isCompleted) {
        const li = document.createElement('li');
        if (isCompleted) {
            li.classList.add('completed');
        }

        const span = document.createElement('span');
        span.textContent = text;

        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('task-actions');

        const updateBtn = document.createElement('button');
        updateBtn.textContent = 'Update';
        updateBtn.classList.add('update-btn');

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');

        actionsDiv.appendChild(updateBtn);
        actionsDiv.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(actionsDiv);
        taskList.appendChild(li);
    }

    function handleTaskAction(e) {
        // Handle Delete
        if (e.target.classList.contains('delete-btn')) {
            const li = e.target.closest('li');
            li.remove();
            saveTasks();
        } 
        // Handle Update
        else if (e.target.classList.contains('update-btn')) {
            const li = e.target.closest('li');
            const span = li.querySelector('span');
            const newText = prompt('Update your task:', span.textContent);
            if (newText !== null && newText.trim() !== '') {
                span.textContent = newText.trim();
                saveTasks();
            }
        }
        // Handle Toggle Completed
        else if (e.target.tagName === 'LI' || e.target.tagName === 'SPAN') {
            const li = e.target.tagName === 'SPAN' ? e.target.parentElement : e.target;
            li.classList.toggle('completed');
            saveTasks();
        }
    }

    // Local Storage Functions
    function saveTasks() {
        const tasks = [];
        const taskElements = taskList.querySelectorAll('li');
        
        taskElements.forEach(li => {
            tasks.push({
                text: li.querySelector('span').textContent,
                completed: li.classList.contains('completed')
            });
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        savedTasks.forEach(task => {
            createTaskElement(task.text, task.completed);
        });
    }
});