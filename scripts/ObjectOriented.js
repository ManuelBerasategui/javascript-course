var dog = {
    name: 'Pancake',
    legs: 4,
    isAwesome: true
}

dog.name //Pancake

dog.age = 6
dog

dog.bark = function(){
    console.log('Woof my name is ' + this.name + '!')
}

dog.bark()
//Woof my name is Pancake!

//Sharing a method with multiple objects

var speak = function(){
    console.log(this.sound + '! My name is ' + this.name + '!')

}

var cat = {
    sound: 'Meow',
    name: 'Mittens',
    speak: speak
}

cat.speak()
//Meow! My name is Mittens

var pig = {
    sound: 'Oink',
    name: 'Charlie',
    speak: speak
}

var horse = {
    sound: 'Neigh',
    name: 'Marie',
    speak: speak
}

pig.speak()
//Oink! My name is Charlie

horse.speak()
//Neigh! My name is Marie

