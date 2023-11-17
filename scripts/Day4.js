//Functions 

let ourFirsFunction = function(){
    console.log('Hello World!')
}

ourFirsFunction()

//Implementing arguments

let sayHelloTo = function(name){
    console.log('Hello ' + name + '!')
}

sayHelloTo('Nick')

//Printing cat faces

let drawCats = function (howManyTimes){
    for (let i = 0; i < howManyTimes; i++){
        console.log(i + ' =1=1=')
    }
}

//Implement multiple arguments

let printMultipleTimes = function(howManyTimes, whatToDraw){
    for(let i = 0; i < howManyTimes; i++){
        console.log(i + ' ' + whatToDraw)
    }
}

//Returning values

let double = function(number){
    return number * 2
}

//Using function calls as values
double(5) + double(6)//22

double(double(3)) //12

//Simplifying picking random words

let pickRandomWord = function (words){
    return words[Math.floor(Math.random() * words.length)]
}

let randomWords = ['words', 'fdcs', 'dffecvsa', 'gtnkpotn']

//Simplifying Random insult generator

let cuerpo = ['cabezon', 'palo', 'panzon', 'peludo', 'narigon', 'ojudo']
let adjetivos = ['feo', 'asqueroso', 'repugnante', 'termo', 'pechofrio', 'bobo']
let palabra = ['pelotudo', 'mierda', 'boludo', 'tarado', 'inutil', 'imbecil']


/* Pick a random body part from the cuerpo array */
let parteCuerpo = cuerpo[pickRandomWord(cuerpo)]
/* Pick a random adjective from adjetivos array */
let adjetivo = adjetivos[pickRandomWord(adjetivos)]
/* Pick a random word from the palabra array */
let palabrota = palabra[pickRandomWord(palabra)]
/* Join all the random strings into a sentence */


let randomString = function(){
    let ranString = 'Tu ' + pickRandomWord(cuerpo) + ' es como un ' + pickRandomWord(adjetivos) + ' de ' + pickRandomWord(palabra)
    return ranString
}
randomString()

//Fifth character of your name

let fifthLetter = function(name){
    if(name.length < 5){
        return
    }
    return 'The fifth letter of your name is ' + name[4]
}

fifthLetter('Manuel')

//Return instead of if...else

let medalForScore = function(score){
    if(score < 3){
        return 'Bronze'
    }
    if(score < 7){
        return 'Silver'
    }
    if(score > 7){
        return 'Gold'
    }
}

//Longhand fuctions and shorthand functions
//Longhand

let doublee = function(number){
    return number * 2
}

//Shorthand

function double(number){
    return number * 2
}

//Book exercises
//#1 Doing arithmetic with functions

/* Add function */
// declare function with 2 arguments
// return the sum of both arguments
function add(n1, n2){
    return n1 + n2
}


/* Multiply function */
// declare function with 2 arguments
// return the multiplication of both arguments

function multiply(n1, n2){
    return n1 * n2
}

add(multiply(36325, 9824), 777)

//#2 Are these arrays the same?

let areTheSame = false

function areArraysSame(array1, array2){

    if(array1.length === array2.length){
    for(let i = 0; i < array1.length; i++){
        if(array1[i] === array2[i]){
            areTheSame = true
        }
        else{
            return false
        }
    }
    return true
    }
    else{
        return false
    }
}

areArraysSame([1, 2, 3], [4, 5, 6])

//#3 HangMan using functions

let words = [
    'javascript',
    'monkey',
    'banana',
    'spidey',
    'spider',
    'lion',
    'good'
    
]

function pickWord(){
    return words[Math.floor(Math.random() * words.length)]
}

function setupAnswerArray(x){
    let answer = []
    for(let i = 0; i < x.length; i++){
        answer.push('_')
    }
    return answer
}

function showPlayerProgress(x){
    return alert(x.join(' '))
}

function getGuess(){
    return prompt('Guess a letter ')
}

function updateGameState(x, y, z){
    for(let j = 0; j < y.length; j++){
        if(y[j] === x.toLowerCase() && x.toLowerCase() !== z[j]){
            z[j] = x.toLowerCase()
            remainingLetters--
        }
    }
}

function showAnswerAndCongratulatePlayer(x){
    return alert('Congrats the answer was ' + x)
}



let word = pickWord()
let answerArray = setupAnswerArray(word)
let remainingLetters = word.length

while(remainingLetters > 0){
    showPlayerProgress(answerArray)
    let guess = getGuess()
    if (guess === null){
        break
    } else if (guess.length !== 1){
        alert('Please enter a single character')
    } else{
        let correctGuess = updateGameState(guess, word, answerArray)
        remainingLetters -= correctGuesses
    }
}

showAnswerAndCongratulatePlayer(answerArray)




