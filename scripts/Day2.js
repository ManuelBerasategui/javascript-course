// Arrays

[] //Empty array

let myarray = ['Dinosaur', 'Dinosaur2', 'Velociraptor', 'T Rex']

console.log(myarray[0]) //Dinosaur

myarray[3] = 'Tyrannosaurus Rex'
console.log(myarray[3]) //Tyrannosaurus Rex

let mixedarray = [3, 'Dinosaur4', ['velociraptor', 'tiranosaurus rex', 'moreandmore'], false    ]
mixedarray[0]
mixedarray[2][1]

//Length

mixedarray.length
mixedarray[mixedarray.length - 2][mixedarray[2].length - 1]

//Push (at the end)

mixedarray.push('Stegosaurus')
mixedarray
mixedarray.push(true)
mixedarray

mixedarray.length

//Unshift (at the beggining)

mixedarray.unshift('MyDynosaurs')
mixedarray
mixedarray.length

/* mixedarray[2].unshift('MyDynosaurs3')  TypeError: mixedarray[2].unshift is not a function */


//Pop
mixedarray.pop()
mixedarray

/* mixedarray[2].pop() TypeError: mixedarray[2].pop is not a function */
let element = mixedarray.pop()
mixedarray.unshift(element)
mixedarray

//Concatenating arrays

let mixedarray2 = [9, 'Hello', false]
mixedarray.concat(mixedarray2)

let mixedarray3 = [1024, 'kdfjvks', true, ['array', 'rardsacd', 'dfdvfsvc']]
let newarray = mixedarray.concat(mixedarray2, mixedarray3)
newarray

//IndexOf

mixedarray.indexOf(3)
mixedarray2.indexOf(false)
mixedarray3.indexOf('dfdvfsvc')

//Turn into a string

newarray.join()
newarray.join(' ')
newarray.join('sees')

let fullName = ['Manuel', 'Ernesto', 'Berasategui']
fullName.join(' ')

//Fun exercises
//Fin way back home

let myWay = []
myWay = []
myWay.push('Grandmas')
myWay.push('School')
myWay.push('Library')
myWay.push('Music')
myWay.push('Bar')
myWay.push('Shopping')
myWay.push('Ol house')
myWay.push('Joining')
myWay.push('Fun')
myWay.push('Park')
myWay.push('Campsite')
myWay.push('Hfidfwecv')
myWay.push('friends house')

myWay.push() //Gives me the places I have to go back one by one

//Desicion maker
//Math.random()
Math.random() //Always less than 1
Math.random() * 10 //Returns more than 1
//Math.floor()
Math.floor(3.1115771830868777) //3
Math.floor(Math.random() * 10)

let randomWords = ['words', 'fdcs', 'dffecvsa', 'gtnkpotn']
randomWords[Math.floor(Math.random() * 4)] //There are 4 elements in the array, so... that's why by 4

let desicions = [
    'Lets do it',
    'Dont do it',
    'Try it out',
    'Avoid it',
    'Go for it'
]

desicions[Math.floor(Math.random() * 5)]

//Random insult generator

let cuerpo = ['cabezon', 'palo', 'panzon', 'peludo', 'narigon', 'ojudo']
let adjetivos = ['feo', 'asqueroso', 'repugnante', 'termo', 'pechofrio', 'bobo']
let palabra = ['pelotudo', 'mierda', 'boludo', 'tarado', 'inutil', 'imbecil']

let insulto = [cuerpo[Math.floor(Math.random() * cuerpo.length)], adjetivos[Math.floor(Math.random() * adjetivos.length)], palabra[Math.floor(Math.random() * palabra.length)]]
console.log(insulto.join(' '))
console.log(cuerpo[Math.floor(Math.random() * cuerpo.length)] + ' ' + adjetivos[Math.floor(Math.random() * adjetivos.length)] + ' ' + palabra[Math.floor(Math.random() * palabra.length)])

//#4 join numbers

let numbers = [3, 2, 1]
numbers = numbers.join(' is bigger than ')





//Objects

let cat = {
    'legs': 3,
    'ful name': 'Harmony', // full name withouth quotes is not allowed
    'color': 'Tortoishell'
}

let mine = true

let cat2 = {
    legs: 4,
    name: 'Name',
    color: 'Red',
    isMine: true
} //'' are not necessary in keys

cat2['isMine']
cat2.isMine //Dot notation

//Getting the keys

Object.keys(cat2)

//Adding keys with dot notation

let cat3 = {}
cat3.legs = 5
cat3.name = 'Robert'
cat3.color = 'Red'

Object.keys(cat3)
console.log(cat3.legs)

//Combaining arrays and objects

let dinosaurios = [
    {name: 'Tyranosaurus', period: 'Late crateoceous'},
    {name: 'Stegosaurus', period: 'late jurassic'},
    {name: 'queseto', period: 'tercer milenio'}
]

dinosaurios[0]
dinosaurios[0]['name']
dinosaurios[0].name

//Example: Array of friends

let Anna = {
    name: 'Anna',
    age: 35,
    luckyNumbers: [1, 5, 234, 9]
}

let David = {
    name: 'David',
    age: 12,
    luckyNumbers: [2, 45, 7, 34]
}

let John = {
    name: 'John',
    age: 79,
    luckyNumbers: [0, 435, 2, 9]
}

let friends = [Anna, David, John]
friends[1]

//Exercises
//Keeping track of Owed money
let owedMoney = {}
owedMoney['Jimmy'] = 5
owedMoney['Frank'] = 7
owedMoney['Stefy'] = 16

/* let owedMoney = {
    Jimmy: 5,
    Frank: 7,
    Stefy: 16
} */

owedMoney.Jimmy += 3 //Jimmy owes more money
owedMoney

//Storing information about movies

let movies = {
    'Finding Nemo': {
        release: 2003,
        duration: 100,
        actors: ['Brooks', 'DeGeneres', 'Gould'],
        format: 'DVD'
    },
    'Star Wars': {
        release: '1983',
        duration: 134,
        actors: ['Hamill', 'Ford', 'Fisher'],
        format: 'DVD'
    },
    'Harry Potter': {
        release: 2005,
        duration: 157,
        actors: ['Radcliffe', 'Grint', 'Watson'],
        format: 'Blu-ray'
    }
}

let findingNemo = movies["Finding Nemo"]
findingNemo

let cars = {
    release: 2006,
    duration: 117,
    actors: ['Willson', 'Hunt', 'Newman'],
    format: 'Blu-ray'
}

movies['Cars'] = cars

movies.Cars
Object.keys(movies)

//Scorekeeper

scores = {
    tom: 5,
    jenny: 9,
    brian: 10
}

scores.brian ++
scores.jenny ++

//Digging into objects and arrays

let myCrazyObject = {
    'name': 'A ridicdfouc object',
    'some array': [7, 9, {purpose: 'confusion', number: 123}, 3.3],
    'random animal': 'dog'
}

//Get 123 from that object
myCrazyObject["some array"][2].number





//Conditionals and loops
//If statement

let name = 'Nick'
console.log('Hello ' + name)
if (name.length > 7){
    console.log('you have a really long name')
}

//If...else statements

let name1 = 'Nicholas'
console.log('Hello ' + name1)
if (name1.length > 7){
    console.log('you have a really long name')
} else{
    console.log('Your name is not very long')
}

//Chained if...else

let lemonChicken = false
let beefWithBlackBeen = true
let sweetAndSourPork = true

if(lemonChicken){
    console.log('Im having lemon chicken')
} else if(beefWithBlackBeen){
    console.log('im having beef with black bean')
} else {
    console.log('Give me rice with eggs')
}

//Name tracker

let name2 = 'Dad'

if(name2 === 'Manuel'){
    console.log('Hello me')
} else{
    console.log('Hello stranger')
}

if(name2 === 'Dad'){
    console.log('Hello dad')
} else if (name2 === 'Mom'){
    console.log('Hello Mom')
} else{
    console.log('Hello stranger')
}

//Loops 
//While

let sheepCount = 0

while(sheepCount <= 10){
    console.log('Counted ' + sheepCount + ' sheep')
    sheepCount++
}

console.log('zzzzzzzzzzzz')

//For

for (let sheepCount2 = 0; sheepCount2 <= 10; sheepCount2++){
    console.log('counted ' + sheepCount2 + ' sheep')
}
console.log('zzzzzzzzzzz')

let timesToSayHello = 3
for(let i = 0; i < 3; i++){
    console.log('Hello')
}

//Combining loops with arrays and strings

let animals = ['Lion', 'Flamingo', 'fdfv', 'dlegon', 'dragon']

for(let i = 0; i < animals.length; i++){
    console.log('This zoo contains a  ' + animals[i] + '.')
}

let name4 = 'Manuel'
for (let i = 0; i < name4.length; i++){
    console.log('My name contains the letter ' + name4[i])
}

// Operators

//Arithmetic 
let result = 10 + 5
console.log(result)

//Assignment 

let x = 5
x += 3 // x is now = 8

//Comparison

let a = 5
let b = 10
console.log(a == b)

//LOgical

let condition1 = true
let condition2 = false

console.log(condition1 && condition2)

//Unary

let num = 5
console.log(-num)

//Conditional

let age = 20

let status1 = (age >= 18) ? 'Adult': 'Minor' // ? is the operator here
//The same as
let status;
if (age >= 18) {
    status = "Adult";
} else {
    status = "Minor";
}



























