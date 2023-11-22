//#1 Listing friends

$('#main-heading').text('My friends')

let friends = ['Bobby', 'David', 'Jerry', 'Tom']

/* for(let i = 0; i < friends.length; i++){
    $('body').append('<p></p>').append(friends[i]).append(' smells!').hide().fadeIn(1000);
} */

//#2 Heading flash

for(let i = 0; i < 10; i++){
    console.log('I entered')
    $('#main-heading').hide();
    $('#main-heading').fadeIn(i * 1000).fadeOut(i * 1000);
}

//#3 Delaying animations

/* $('body').append('<p id ="third-exercise"></p>').text('This is the third exercise').hide().fadeIn(1000).delay(5000).fadeOut(1000) */

//#4 Using FadeTo

$('body').append('<p></p>').text('This is the fourth exercise').fadeTo(2000, 0.7);