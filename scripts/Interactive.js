function timeUp(){
    alert('Times up!')
    }

/* setTimeout(timeUp, 3000)
setTimeout(timeUp, 5000) */

//Do your homework

function doHomework(){
    alert('Hey! Do your fucking homework man you lazy boy')
}

let timeoutId = setTimeout(doHomework, 6000)
clearTimeout(timeoutId)

//Calling multiple times

let counter = 1

function printMessage(){
    console.log('You have been staring at your console for ' + counter * 5 + ' seconds')
    counter++
}

let intervalId = setInterval(printMessage, 5000)
clearInterval(intervalId)


//Animating h1 object
/* 


let leftOffset = 0

function moveHeading(){
    $("#heading").offset({left: leftOffset})

    leftOffset += 2

    if(leftOffset > 1000){
        leftOffset = 0
    }
}

setInterval(moveHeading, 30)


 */
//Responding to user clicks

let clickHandler = function (event) {
    console.log('Click! ' + event.pageX + ' ' + event.pageY)
}

$('h1').click(clickHandler)

//Responding to mouse moves
/* 

$('html').mousemove(function (event) {
    $('#heading').offset({
        left: event.pageX,
        top: event.pageY
    })
  })


 */
//Challenges
//#1 Follow the clicks
/* 

$('html').click(function (event) {
    $('#heading').offset({
        left: event.pageX,
        top: event.pageY
    })
  })


 */  
//#2 Create your own animation

let leftOffset1 = 0
let rightOffset1 = 0
let topOffset1 = 0
let bottomOffset1 = 0
let enteredUp = false

i = 0

function moveHeading(){

    //Right
    if(leftOffset1 < 200 && topOffset1 < 200 && enteredUp === false){
        
        $('#heading').offset({
            top: topOffset1,
            left: leftOffset1
        })
        leftOffset1++
    }
    
    
    //Down
    if(leftOffset1 >= 200 && topOffset1 < 200 && topOffset1 !== 200){
            $('#heading').offset({
                left: leftOffset1,
                top: topOffset1
            })  
            topOffset1++
            leftOffset1--
            
            
    }

    //Left
    if(leftOffset1 <200 && topOffset1 === 200 && leftOffset1 > 0 && enteredUp === false){

        $('#heading').offset({
            top: topOffset1,
            left: leftOffset1
        })
        leftOffset1--
        
        
    }

    //Up
    if(leftOffset1 === 0 && topOffset1 <= 200){
        enteredUp = true
        
        $('#heading').offset({
            left: leftOffset1,
            top: topOffset1
        })  
        topOffset1--    
}
    if(topOffset1 === 0){
        enteredUp = false
    }
    
    
}

let intervalId2 = setInterval(moveHeading, 10)

//#3 Cancel animation with a click

/* const button = document.getElementById('heading'); //Take the h1 element from html

button.addEventListener('click', function handleClick() { //calling the h1 element by its variable, aplying the addEventListener function, to detect when an event (click) happens, and finally setting what will happen with the function handleClick
  clearInterval(intervalId2)
}); */

//#4 Speed up heading by Click

const button = document.getElementById('heading'); //Take the h1 element from html

let speed = 1
let clicks = 0
var intervalId3
var auxIntervalId3
button.addEventListener('click', function handleClick() {
    clicks += 1
    intervalId3 = auxIntervalId3
    if(clicks < 10){
        clearInterval(intervalId3)
        clearInterval(intervalId2)
        auxIntervalId3 = setInterval(moveHeading, speed *= 0.001)
        $('#heading').text(clicks)
    }
    else{
        $('#heading').text('You win')
        clearInterval(intervalId3)
    }

});









