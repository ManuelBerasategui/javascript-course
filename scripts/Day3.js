//Other ways of using for loops

for(let x = 2; x < 10000; x * 2){
    console.log(x)
}

//Practice with conditionals and loops
//#1 Awesome animals

let animals = ['Cat', 'Dog', 'Lion', 'Tiger']

for(let i = 0; i < animals.length; i++){
    animals[i] = 'Awesome ' + animals[i]
}

console.log(animals)

//#2 Random string generator

let alphabet = 'abcdefghijklmnopqrstuvwxyz'
let string = ''
for(i = 0; string.length < 6; i++){
    string = string + alphabet[Math.floor(Math.random() * alphabet.length)]
}
console.log(string)

//#3 Hacker Speak
let input = 'hacker speak'
let output = ''

for(i = 0; i < input.length; i++){
    if(input[i] === 'a'){
        output += 4
    } else if(input[i] === 'e'){
        output += 3
    } else if (input[i] === 'o'){
        output += 0
    } else if(input[i] === 'i'){
        output += 1
    } else{
        output += input[i]
    }
}

console.log(output)