/* Pseudocodigo
        Task Addition
        
            Cuando el boton 'add' sea presionado, se creará en el html un elemento de lista
            Para esto, lo más sencillo es usar la función onclick="" en el elemento que contenga al botón en el html, para detectar cuando sea presionado.
            Ese elemento de lista contendrá el texto escrito en el input
            El input tendrá un ID donde se guardará la información, para utilizarla luego en el elemento de lista
            Luego hay que usar la función appendChild para unir el elemento li al ul
        
        Task Display

            Automáticamente cuando se cree el elemento de lista con el texto que le corresponda, se verá en la página web
        
        Task Completion

            Si el usuario toca encima del elemento de lista, se llamará a la funcion que corresponda marcar como completado la task.
            Para detectar no voy a poder usar onclick="", puesto que voy a estar trabajando sobre elementos que todavia no fueron creados, como son los li. 
            La función de marcar como completado hará que el texto de la lista aparezca tachado o cambie de color, como se prefiera.
        
        Task Removal
            
            Cuando se cree un elemento de lista que esté representando a una task, se va a crear a su lado un botón de borrar.
            Para checkear si ese botón es presionado, hay que usar la función onclick="" de html.
            En el momento en que se clickea el botón, se llamará a la función correspondiente del js para borrar un elemento de la lista.
            Para saber qué elemento de la lista borrar, se debe usar su ID
                */



//Task addition
function addTask() {
    var li = document.createElement('li')
    var inp = document.getElementById('taskName').value
    li.innerHTML = inp
    li.id = 'listItem'
    
    button = document.createElement('button')
    button.innerHTML = 'Delete'
    button.id = 'deleteBtn'
    
    //Agrego el elemento de lista a la unordered list
    document.getElementById('unordered').appendChild(li)
    li.appendChild(button)
    //Reseteo el campo de texto del input
    document.getElementById('taskName').value = ''
}

//Task completion

document.getElementById('unordered').addEventListener('click', function () {
    if(event.target.id === 'listItem'){
        console.log('dfefes')
        event.target.style.textDecoration = 'line-through'
    }
})















            