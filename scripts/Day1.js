/* Variables */
var myvariable
let myvariable2
const myvariable3 = 3

/* Data types */
String = 'string'
Number = 5
Boolean = true

/* Example */

/* Strings */

let message
message = 'Hello Javascript!'
console.log(message)

/* Numeric */

let num1 = 5
let num2 = 10

/* Boolean */

let isPositive = true

/* Difference between var, let and const */

var x = 5
/* var x = 6 SyntaxError: Identifier 'x' has already been declared*/

let y = 9
/* let y = 10 Error */
y = 10

const z = 15
// const z = 90 Error 
// z = 1 Uncaught TypeError: Assignment to constant variable.

/* Statements */
/* Variable Declaration and Assignment */

let variable
variable = 5

/* Function Declaration */

function greet(){
    console.log('Hello!')
}

/* Conditionals */

if (x > 0){
    console.log('Positive')
} else if (x < 0){
    console.log('Negative')
} else{
    console.log('Zero')
}

/* Loops */

for (let i = 0; i < 5; i++){
    console.log(i)
}

let i = 0
while (i < 5){
    console.log(i)
    i++
}

let count = 0

do{
    console.log(count)
    count++
} while(count < 5)

/* Switch */

switch (x){
    case 1: 
        console.log("One")
        break
    case 2:
        console.log('Two')
        break
    default:
        console.log('Other')
}

/* Throw */

let expression = 'error'
/* throw expression; */ //expression represents an error

function divide (x, y){
    if (y === 0){
        throw Error('Division by zero is not allowed')
    }
    return x / y
}

/* Try...Catch */

try {
    //Code that might throw an exception
} catch (error){
    //Code to handle the exception
} finally {
    // Code that will be executed regardless of whether an exception was thrown
}

function divide (x, y){
    try{
    if (y === 0){
        throw Error('Division by zero is not allowed')
    }
    return x / y
    } catch (error){
        console.error("An error occurred:", error.message)
        return NaN // Return a special value to indicate an error

    } finally{
        //This will always be executed
    }
}

let result = divide(10, 2)
console.log(result)

result = divide(10, 0)
console.log(result)

/* Return in Functions */

expression = 5
/* return expression */

function add(x, y){
    return x + y
}

result = add(3, 5)
console.log(result)

function greet(name){
    console.log('Hello ' + name + '!')
    //No return statement
}

let greeting = greet('John')
console.log(greeting)

function square(x){
    return x * x
}

result = square(5)
console.log(result)

/* Scope */
/* Global Scope */
let globalVariable = 'Im global'

function exampleFunction(){
    console.log(globalVariable)
}

exampleFunction()

/* Local Scope */

function exampleFunction(){
    let localVariable = 'Im local'
    console.log(localVariable)
}

exampleFunction()
// console.log(localVariable)  ReferenceError: localVariable is not defined

/* Block Scope */
function exampleFunction(){
    if (true){
        let blockScopedVariable = 'Im block-scoped'
        console.log(blockScopedVariable)
    }
    //console.log(blockScopedVariable) ReferenceError: blockScopedVariable is not defined
}

exampleFunction();










