//Get a random number from 0 to size
function getRandomNumber(size){
    return Math.floor(Math.random() * size)
}

//Set up variables
var width = 400
var height = 400

//Create a random target location
var target = {
    x: getRandomNumber(400),
    y: getRandomNumber(400)
}

//Set up variables
var clicks = 0

//Calculate distance between click and target
function getDistance(event, target){
    var diffX = event.offsetX - target.x
    var diffY = event.offsetY - target.y
    return Math.sqrt((diffX * diffX) + (diffY * diffY))
}

//Get a string representing the distance
function getDistanceHint(distance){
    if(distance < 10){
        return 'Boiling hot'
    }
    else if(distance < 20){
        return 'Really hot'
    }
    else if(distance < 40){
        return 'Hot'
    }
    else if(distance < 80){
        return ' Warm'
    }
    else if(distance < 160){
        return 'Cold'
    }
    else if(distance < 320){
        return 'Really cold'
    }
    else{
        return 'Freezing!'
    }
}
$('#map').click(function (event){
    clicks++

    //Get distance between event and target
    let distance = getDistance(event, target)
    //Convert distance into a hint
    let distanceHint = getDistanceHint(distance)

    //Update the #distance element with the new hint
    $('#distance').text(distanceHint)
    
})

//If the click is close enough, tell that won
if(distance < 8){
    alert('Found the treasure in ' + clicks + ' clicks!')
}
