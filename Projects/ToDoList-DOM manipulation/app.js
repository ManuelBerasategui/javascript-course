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
            Esto, recordemos, se hace con la funcion onclick="" de html.
            La función de marcar como completado hará que el texto de la lista aparezca tachado o cambie de color, como se prefiera.
        
        Task Removal
            
            Cuando se cree un elemento de lista que esté representando a una task, se va a crear a su lado un botón de borrar.
            Para checkear si ese botón es presionado, hay que usar la función onclick="" de html.
            En el momento en que se clickea el botón, se llamará a la función correspondiente del js para borrar un elemento de la lista.
            Para saber qué elemento de la lista borrar, se debe usar su ID
                */

function addTask() {
    var li = document.createElement('li')
    var inp = document.getElementById('taskName').value
    li.innerHTML = inp

    //Agrego el elemento de lista a la unordered list
    document.getElementById('unordered').appendChild(li)
    //Reseteo el campo de texto del input
    document.getElementById('taskName').value = ''
}



            