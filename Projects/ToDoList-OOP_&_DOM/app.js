//Define a Task class using OOP
class Task{
    constructor(description){
        this.description = description
        this.completed = false
    }
    
    //Method to toggle task completion
    toggleCompleted(){
        this.completed = !this.completed
    }

    //Method to create a list item element for the task 
    createTaskElement() {
        const taskElement = document.createElement('li')
        taskElement.textContent = this.description

        //Add event listener to toggle completion on click
        taskElement.addEventListener('click', () =>  {
            this.toggleCompleted()
            this.updateTaskElement(taskElement)
          })

          this.updateTaskElement(taskElement) //Initial update
          return taskElement
    }

    //Method to change the appearance of the task list element based on completion status
    updateTaskElement(taskElement){
        if(this.completed){
            taskElement.style.textDecoration = 'line-through'
        }
        else{
            taskElement.style.textDecoration = 'none'
        }
    }

}

//Function to handle adding a new task

function addTask() {
    const newTaskInput = document.getElementById('newTaskInput')
    const taskDescription = newTaskInput.value

    if(taskDescription.trim() !== ''){
        const newTask = new Task(taskDescription)
        const taskList = document.getElementById('taskList')
        const taskElement = newTask.createTaskElement()

        taskList.appendChild(taskElement)
        newTaskInput.value = '' //Clear the input
    }
  }

//Add event listener to the add task button in the html
document.getElementById('addTaskBtn').addEventListener('click', addTask)