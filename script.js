document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements exactly as specified
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // addTask function implementation
    function addTask() {
        // Get and trim input value
        const taskText = taskInput.value.trim();
        
        // Check for empty input
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }
        
        // Create list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;  // Set textContent directly
        
        // Create remove button with exact class name
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        
        // Assign onclick event for removal
        removeButton.onclick = function() {
            taskList.removeChild(listItem);  // Remove via parent
        };
        
        // Append elements exactly as specified
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
        
        // Clear input field
        taskInput.value = '';
    }
    
    // Event listeners as specified
    addButton.addEventListener('click', addTask);
    
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
