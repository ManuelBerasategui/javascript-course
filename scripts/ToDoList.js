class Task {
    constructor(id, description, dueDate) {
        this.id = id;
        this.description = description;
        this.isCompleted = false;
        this.dueDate = dueDate;
    }

    completeTask() {
        this.isCompleted = true;
    }

    displayDetails() {
        console.log(`Task ${this.id}: ${this.description}`);
        console.log(`Due Date: ${this.dueDate}`);
        console.log(`Status: ${this.isCompleted ? 'Completed' : 'Incomplete'}`);
    }
}

class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    completeTask(taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.completeTask();
        } else {
            console.log('Task not found!');
        }
    }

    displayTodoList() {
        console.log('Todo List:');
        this.tasks.forEach(task => {
            task.displayDetails();
            console.log('------------------------');
        });
    }
}

// Create a new task
const task1 = new Task(1, 'Complete JavaScript project', '2023-12-01');
const task2 = new Task(2, 'Read a book', '2023-12-05');

// Create a todo list
const todoList = new TodoList();

// Add tasks to the todo list
todoList.addTask(task1);
todoList.addTask(task2);

// Display the initial todo list
todoList.displayTodoList();

// Mark a task as completed
todoList.completeTask(1);

// Display the updated todo list
todoList.displayTodoList();
