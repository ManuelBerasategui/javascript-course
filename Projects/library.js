/* Estructura del programa
    Crea un sistema de biblioteca donde tengas objetos que representen libros, usuarios y la propia biblioteca.
Implementa métodos para prestar y devolver libros, así como para hacer un seguimiento de los libros vencidos.
Utiliza prototipos para definir comportamientos comunes compartidos entre diferentes tipos de objetos.
     */

/* Estructura
    Step 1: Declare objects of books, users and library. Include in books the name, author and due date. In the users object don't forget name and ID. Try to include an array of books and users inside the library object. 
    Step 2: Set up methods. Use prototypes to create borrow book and hand in methods. More if you want. Also include due dated books method.
    Step 3: (Optional) give functionality to your program and include prompts to users to make interactable
*/

/* Pseudocodigo
    var Books = information contained inside books object
    var Users = name and ID of the user
    var Library = arrays of books and users. This object will include the methods needed
    
    Library.prototype.borrow = function(){
        Prompt the user to choose the book to borrow
        Spread a message like "Thanks for choosing us"
    }
    
    Library.prototype.hand = function(){
        Prompt the user to tell the book to hand in
        message
    }
    
    Leave the due dated books 'cause I don't know how to do it
    
    exit = false
    while(exit === false){
        Prompt the user to choose an option between borrowing a book, handing in or exiting the program.
        if(option === borrow){
            Library.borrow()
        }
        if(option === hand){
            Library.hand()
        }
        if(option === exit){
            break
        }
    }*/



var Books = {}
var Users = {}
let Library = {}

Library.prototype.borrow() = function(){
    let bookBorrowed = prompt('Choose a book to borrow')
    alert('Borrowed ' + bookBorrowed)
}

Library.prototype.hand() = function () {
    let handed = prompt('Wich book will the user hand in? ')
    alert('Handed in ' + handed + ' succesfully')
  }

var exit = false

while(exit === false){
    let option = prompt('Choose an option : 1 "Borrow a book" 2 "Hand in a book" 3 "Exit"')
    if(option === 1){
        Library.borrow()
    }
    else if(option === 2){
        Library.hand()
    }
    else if(option === 3){
        exit = true
        break
    }
}