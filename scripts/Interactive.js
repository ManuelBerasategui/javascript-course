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

let intervalId2 = setInterval(moveHeading, 0.000000001)


