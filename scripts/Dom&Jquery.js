//Replacing heading using DOM

let headingElement = document.getElementById('main-heading')
console.log(headingElement.innerHTML)
let newHeadingText = prompt('Please provide a new heading')
headingElement.innerHTML = newHeadingText


//Replacing heading using JQuery

newHeadingText2 = prompt('Please provide a new heading: ')
$('#main-heading').text(newHeadingText2)

//Creating new elements

$('body').append('<p>This is a new paragraph</p>')

//Adding multiple elements

for(let i = 0; i < 3; i++){
    let hobby = prompt('Tell me one of your hobbies!')
    $('body').append('<p>' + hobby + '</p>')
}

//Fading out element

$('h1').fadeOut(3000) //miliseconds

//Chaining JQuery animations

$('h1').text('This will be fade out').fadeOut(5000) //Chaining
$('h1').fadeOut(3000).fadeIn(2000)

$('h1').slideUp(1000)
$('h1').slideDown(1000)


//Try it out

for(let i = 0; i < 5; i++){
    $('p').fadeOut(1000)
    $('p').fadeIn(1000)

}






