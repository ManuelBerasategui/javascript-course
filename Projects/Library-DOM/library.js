/* Estructura del programa
    Crea un sistema de biblioteca donde tengas objetos que representen libros, usuarios y la propia biblioteca.
Implementa métodos para prestar y devolver libros, así como para hacer un seguimiento de los libros vencidos.
Utiliza prototipos para definir comportamientos comunes compartidos entre diferentes tipos de objetos.
     */

/* Estructura
    Step 1: Declare objects of books, users and library. Include in books the name, author and due date. In the users object don't forget name and ID. Try to include an array of books and users inside the library object. 
    Step 2: Set up methods. Use prototypes to create borrow book and hand in methods. More if you want. Also include due dated books method.
    Step 3: (Optional) give functionality to your program and include prompts to users to make interactable
    Step 4: Ask if the user is loged in
        - If the user is loged in, ask for his name, wich will be a key in the users object
        - If the user is not loged in, ask for his name and create a key with a random value, wich will be his ID
        - Once the user is already loged in, you shouldn't ask again for logging in. Unless the page resets.
    Step 5: Check history of the user
        - If the user takes out a book, you have to register that somewhere
        - If the user hands in a book, you must check if the due date is out. And if it is, do something with the user like a tax
    
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



var Books = {
    book1: {
        title: 'Atomic Habits',
        borrowedDate: null
    },
    book2: {
        title: '12 Rules of Life',
        borrowedDate: null
    },
    book3: {
        title: 'Rich Dad Poor Dad',
        borrowedDate: null
    },
    book4: {
        title: 'The richest man in Babylon',
        borrowedDate: null
    },
    book5: {
        title: 'The inteligent Investor',
        borrowedDate: null
    }
    

}

var borrowedBooks = {}

function toStringObject(obj) {
    let result = '';
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let value = obj[key];
            if (borrowedBooks.hasOwnProperty(key)) {
                result += key + ': Borrowed ' + value + '\n';
            } else {
                result += key + ': ' + value + '\n';
            }
        }
    }
    return result;
}



var Users = {
    Manuel: Math.floor(Math.random() * 1000)
}
var libraryObject = {}

function Library(){}

var findedBook = false
let userName = prompt('Can you give me your users name? ')
Library.prototype.borrow = function(){
    let borrowedBook = prompt('Choose a book to borrow ')
    

    while(findedBook === false){
        for(let book in Books){
            let bookExists = Object.values(Books[book]).includes(borrowedBook)
        if(bookExists){
            let userID = Users[userName]
            Books[book].borrowedDate = new Date()
            borrowedBooks[userID] = borrowedBook
            let currentDate = new Date()
            alert('Borrowed ' + borrowedBook + ' at ' + currentDate + '\n' + 'Remember to hand in the book before the day ends')
            break
        }
        else if (bookExists === false){
            alert('That book does not exist')
        }
        }
        
        

    }}

Library.prototype.hand = function() {
    let handed = prompt('Wich book will the user hand in? ')
    
    if (Books.hasOwnProperty(handed) && Books[handed].borrowedDate !== null) {
        
        var currentDate = new Date();
        let borrowedDate = Books[handed].borrowedDate;

        if (currentDate > borrowedDate) {
            alert('The book is overdue.');
        } else {
            alert('Handed in ' + handed + ' successfully!');
        }

        Books[handed].borrowedDate = null;

}


    else {
        alert('Either that book does not exist or has not been borrowed');
    }
}


var libraryInstance = new Library()
var exit = false

var logedIn = false
while(logedIn === false){
    let loged = prompt('Are you already loged in? "yes" or "no"')
    var exitUser = false
        if(loged === 'yes'){
            while(exitUser != true){
                
                if(Users.hasOwnProperty(userName)){
                    alert('Welcome back ' + userName + '!')
                    exitUser = true
                }
                if(Users.hasOwnProperty(userName) === false){
                    alert('Could not find user')
                    userName = prompt('Please, tell us your user name')
                    Users[userName] = Math.floor(Math.random() * 1000)
                    alert('Good to see you ' + userName)
                    exitUser = true
                }
            }
            logedIn = true
        }
        else if(loged === 'no'){
            let userName = prompt('Please, give tell me, wich would you like it to be your users name? ')
            Users[userName] = Math.floor(Math.random() * 1000)
            alert('Good to see you ' + userName + '!')
            logedIn = true
        }
        else if(loged != 'yes' && loged != 'no'){
            prompt('That is not an option')
            logedIn = false
        }
    }

    let catalogString = ''
    while (exit === false) {
        for(let book in Books){
            if(Books.hasOwnProperty(book)){
                

                if (typeof Books[book] === 'object') {
                    // Iterate over properties of the book object
                    for (let prop in Books[book]) {
                        if (Books[book].hasOwnProperty(prop) && typeof Books[book][prop] === 'string') {
                        }
                        catalogString += '  ' + prop + ': ' + Books[book][prop] + '\n';
                    }
                }
    
                //Iterate over titles in each book
               
            }
        }
    

        alert(catalogString)

        let option = prompt('Choose an option: 1 "Borrow a book" 2 "Hand in a book" 3 "Exit"');
        if (option === "1") {
            libraryInstance.borrow();
        } else if (option === "2") {
            libraryInstance.hand();
        } else if (option === "3") {
            exit = true;
            break;
        }
    }
    