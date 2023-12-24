document.addEventListener('DOMContentLoaded', function(){
    const taskInput = document.getElementById('taskInput')
    const addTaskBtn = document.getElementById('addTaskBtn')
    const taskList = document.getElementById('taskList')

    //Add task event
    addTaskBtn.addEventListener('click', function(){
        const taskText = taskInput.value.trim()

        if(taskText !== ''){
            addTask(taskText)
            taskInput.value = ''
        }
    })

    //Add task function
    function addTask(text){
        const li = document.createElement('li')
        const button = document.createElement('button')
        button.textContent = 'Delete'
        button.id = 'DeleteBtn'

        li.textContent = text
        li.appendChild(button)
        
        li.addEventListener('click', function () {
            li.classList.toggle('completed')
          })

          taskList.appendChild(li)

          if(button.addEventListener('click', function deleteTask () {
            li.remove()
            })){
                deleteTask()
            }
    }
})



