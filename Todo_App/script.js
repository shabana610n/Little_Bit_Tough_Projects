// Select DOM elements
const inputField = document.getElementById('textInput');
const addButton = document.getElementById('add-todo');
const todoListContainer = document.getElementById('todoItemContainer');
const alertMsg = document.getElementById('alertMsg');

// Function to get todo items from local storage
const getTodosFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

// Load todos from local storage
let todoItems = getTodosFromLocalStorage();

// Function to create and add a todo item to the DOM
const createTodoElement = (todoText) => {
    const ulElement = document.createElement('ul');
    ulElement.classList.add('todoItemList');
    ulElement.innerHTML = `
        <li>
            <h2 class="todoItem">${todoText}</h2>
        </li>
        <button class="del-todo" type="button">Delete</button>
    `;
    todoListContainer.appendChild(ulElement);
}

// Function to add a new todo item to the list and local storage
const addTodoItem = () => {
    const newTodo = inputField.value.trim();
    if (newTodo) {
        if (!todoItems.includes(newTodo.toLowerCase())) {
            todoItems.push(newTodo.toLowerCase());
            todoItems = [...new Set(todoItems)]; // Remove duplicates
            alertMsg.innerHTML = '';
            localStorage.setItem('todos', JSON.stringify(todoItems));
            createTodoElement(newTodo); // Update the DOM immediately
        } else {
            alertMsg.innerHTML = 'You have already added this todo list, please try a different one!';
        }
        inputField.value = ''; // Clear the input field
    }
};

// Function to display already saved todos when the page loads
const displaySavedTodos = () => {
    todoItems.forEach(todo => {
        createTodoElement(todo);
    });
}

// Function to delete a todo item from the list and local storage
const deleteTodoItem = (e) => {
    if (e.target.classList.contains('del-todo')) {
        const todoElement = e.target.parentElement; // Get the parent element of the clicked button
        const todoText = todoElement.querySelector('.todoItem').innerText.toLowerCase(); // Get the text of the todo item

        // Filter the todoItems array to exclude the item to be deleted
        todoItems = todoItems.filter(todo => {
            return todo !== todoText; // Explicitly return true for items to keep and false for items to remove
        });

        // Update local storage with the new todoItems array
        localStorage.setItem('todos', JSON.stringify(todoItems));

        // Remove the todo item from the DOM
        todoElement.remove();
    }
}

// Event listener for the Add Todo button
addButton.addEventListener('click', (event) => {
    event.preventDefault();
    addTodoItem();
});

// Event listener for the Delete Todo button
todoListContainer.addEventListener('click', (e) => {
    e.preventDefault();
    deleteTodoItem(e);
});

// Initial call to display saved todos
displaySavedTodos();