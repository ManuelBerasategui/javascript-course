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
        li.textContent = text

        li.addEventListener('click', function () {
            li.classList.toggle('completed')
          })

          taskList.appendChild(li)
    }
})