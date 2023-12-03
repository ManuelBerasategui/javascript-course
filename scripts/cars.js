var Car = function(x, y){
    this.x = x,
    this.y = y
}

var tesla = new Car(10, 20)
tesla

var drawCar = function(car){
    var carHtml = '<img src="https://nostarch.com/images/car.png">'

    var carElement = $(carHtml)

    carElement.css({
        position: 'absolute',
        left: car.x,
        top: car.y
    })

    $('body').append(carElement)
}

