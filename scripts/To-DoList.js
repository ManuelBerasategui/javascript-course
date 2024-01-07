/* Pseudocode
    Create tasks array

    
    exit the programme = no

    while(exit the programme === no){
    user's choose = Prompt the user to choose between adding, editing, deleting a task or to exit the programme

    If (user chooses to add a task){
      task to add auxiliar variable = prompt the user the task to add
      tasks array += add auxiliar variable
    }

    Else if (user chooses to edit a task){
        if(There are tasks to edit){
        
          prompt the user to choose a task to edit
          edited task auxiliar variable = prompt the user to edit
          for(length of the tasks array){
              if (task to edit === any task of the tasks array){
                  prompt the user to edit that task
                  update task
              }
              else{
              tell the user there no tasks called as the auxiliar edit variable
              }
          }
          
        }
        else{
        tell the user there are no tasks to edit
        continue
    }
    }

    Else if (user chooses to delete a task ){
        if(There are any tasks to delete){
            delete task auxiliar variable = prompt the user wich task to edit
            for(tasks array length){
                if (del auxiliar variable === any variable in main task's array){
                    delete that task in the main task's array
            }
        }
        else{
        Tell the user there are no tasks to delete
        }
        
      
    }
    }

    Else if (user chooses to exit the programme){
      break
    }
    else{
    alert('The user didn't give any type of option')
    continue
    }

    
    }
    
    */
