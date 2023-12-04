var Car = function(x, y){
    this.x = x
    this.y = y
    
    this.draw()
    this.speed = 1
}

Car.prototype.draw = function(){
    
    var carHtml = '<img src=https://nostarch.com/images/car.png>'
    this.carElement = $(carHtml)

    this.carElement.css({
        position: "absolute",
        left: this.x,
        top: this.y
    })

    $('body').append(this.carElement)
}

/* Car.prototype.moveRight = function(){
    this.x += 5

    this.carElement.css({
        left: this.x,
        top: this.y
    })
}
Car.prototype.moveLeft = function(){
    this.x -= 5

    this.carElement.css({
        left: this.x,
        top: this.y
    })
}
Car.prototype.moveUp = function(){
    this.y -= 5

    this.carElement.css({
        left: this.x,
        top: this.y
    })
}
Car.prototype.moveDown = function(){
    this.y += 5

    this.carElement.css({
        left: this.x,
        top: this.y
    })
} */



var tesla = new Car(20, 20)
var nissan = new Car(100, 200)

/* tesla.draw()
nissan.draw()
 */


/* setInterval(function(){
    tesla.moveRight()
}, 100)

setInterval(function(){
    tesla.moveDown()
}, 100) */

/* Car.prototype.moveRight = function(){
    this.x += this.speed

    this.carElement.css({
        left: this.x,
        top: this.y
    })
}
Car.prototype.moveLeft = function(){
    this.x -= this.speed

    this.carElement.css({
        left: this.x,
        top: this.y
    })
}
Car.prototype.moveUp = function(){
    this.y -= this.speed

    this.carElement.css({
        left: this.x,
        top: this.y
    })
}
Car.prototype.moveDown = function(){
    this.y += this.speed

    this.carElement.css({
        left: this.x,
        top: this.y
    })

} */

/* setInterval(function(){
    tesla.moveRight()
}) */

/* Car.prototype.moveLeft = function(){
    this.x -= this.speed

    this.carElement.css({
        left: this.x,
        top: this.y
    })
}
Car.prototype.moveUp = function(){
    this.y -= this.speed

    this.carElement.css({
        left: this.x,
        top: this.y
    })
}
Car.prototype.moveDown = function(){
    this.y += this.speed

    this.carElement.css({
        left: this.x,
        top: this.y
    })

} */

setInterval(function(){
    tesla.moveRight(400)
}, 200)