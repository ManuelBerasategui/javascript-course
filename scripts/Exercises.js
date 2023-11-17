/* Basic syntax and Variables */

let name = 'Manuel'
let age = 15

let string = (name + ' ' + age) //Concatenates both name and age into a single string
console.log(string)

const PI = 3.14
console.log(PI)

let string2 = 'Hello Javascript!'

/* Triangle */

let side1 = 4
let side2 = 7
let side3 = 4
let perimeter = side1 + side2 + side3
console.log(perimeter)

console.log(typeof(age))

let a = 5
let b = 10

a = a + b
b = a - b
a = a - b
console.log(a, b)

let Number
number = 1

/* Statements */

let num = 4

if (num > 0){
    console.log('Positive')
} else if (num < 0){
    console.log('Negative')
} else{
    console.log('Zero')
}

for(let i = 0; i <= 10; i++){
    console.log(i)
}

function square(x){
    return x * x
}
console.log(square(5))

let x
switch(x){
    case 1: 
        console.log('Monday')
        break
    case 2: 
        console.log('Tuesday')
        break
    case 3: 
        console.log('Wednesday')
        break
    case 4: 
        console.log('Thursday')
        break
    case 5: 
        console.log('Friday')
        break
    case 6: 
        console.log('Saturday')
        break
    case 7: 
        console.log('Sunday')
        break1
}

try{
    /* const num = 5 + 4
    num = 10 */
}catch(error){
    console.error('An error ocurred', error.message)
    
}

function larger(x1, x2){
    x1 = prompt('Number 1')
    x2 = prompt('Number 2')

    if(x1 > x2){
        console.log(x1 + ' its bigger than' + x2)
    } else if(x2 > x1){
        console.log(x2 + ' its bigger than ' + x1)
    } else{
        console.log('Both numbers are the same')
    }
}

larger()

do{
    variable = prompt('Enter a number to finish the program')
}while(variable != number)

function len(str){
    str = new String(prompt('Insert a string, and see its length'))
    console.log(str.length)
}
len()

//Operators
//Exercise 1

let numero1 = 5
let num2 = 6

num1 -= 1
num1 += 1
num1 *= 2
num1 /= 2

num2 -= 4
num2 += 10
num2 *= 4
num2 /= 3

//Exercise 2

console.log(num1%num2)

//Exercise 3

console.log(num1 ++)
console.log(num1 --)

//Exercise 4

let variable1 = true
let variable2 = false

let vars = (variable1 === variable2) ? 'True': 'False'


//Exercise 5

let str1 = 'Hello'
let str2 = 'boy'

let str3 = 'str1 + " " + str2'

//Exercise 6

comp1 = 6
comp2 = 5

console.log(comp1 === comp2)

//Exercise 7

let bool1 = true
let bool2 = !bool1

//Exercise 8
let numer1 = 2

let recognizer = (num1%2 != 0) ? 'Odd': 'Even'
recognizer

//Exercise 10
let num1 = 15
let recognize = (num1%3 == 0 && num1%5 == 0) ? 'Its divisible': 'Its not divisible'
recognize






