class Student {
    constructor(id, name, age, grade){
        this.id = id,
        this.name = name,
        this.age = age,
        this.grade = grade,
        this.courses = []
    }

    addCourse(course){
        if(course instanceof Course){
            this.courses.push(course)
        }
        else{
            console.log('First, create an instance of course with the Course constructor')
        }
        
    }
    deleteCourse(deleted){
        if(deleted instanceof Course){
            for(let i = 0; i < this.courses.length; i++){
                if(this.courses[i] === deleted){
                    this.courses.pop(deleted)
                }
            }
        }
        else{
            console.log('First, create an instance of course with the Course constructor')
        }
        
    }
}

class Course {
    constructor(id, name, instructor){
        this.id = id,
        this.name = name,
        this.instructor = instructor,
        this.students = []
    }

    addStudent(studentName) {
        if(studentName instanceof Student){
            this.students.push(studentName)
        }
        else{
            console.log('First, create an instance of student with the Student constructor')
        }
        
        
    }
    removeStudent(student) {
        if(student instanceof Student){
            this.students.pop(student)
        }
        else{
            console.log('First, create an instance of student with the Student constructor')
        }
        
    }
    displayDetails(){
        console.log('Course ID: ' + this.id)
        console.log('Course Name: ' + this.name)
        console.log('Instructor: ' + this.instructor)
        console.log('Enrolled Students: \n')
        for(let i = 0; i < this.students.length; i++){
            console.log(i + '. ' + this.students[i])
        }
    }
    
}

class School {
    constructor(){
        this.students = []
        this.courses = []
    }
    
    addStudent(student){
        if(student instanceof Student){
            this.students.push(student)
        }
        else{
            console.log('First, use the Student constructor to create a student')
        }
        
    }
    addCourse(course){
        if(course instanceof Course){
            this.courses.push(course)
        }
        else{
            console.log('First, use the Course constructor to create a course')
        }
        
    }
    removeStudent(student){
        if(student instanceof Student){
            this.students.splice(student)
        }
        else{
            console.log('First, use the Student constructor to create a student')
        }
        
    }
    removeCourse(course){
        if(course instanceof Course){
            this.courses.splice(course)
        }
        else{
            console.log('First, use the Course constructor to create a course')
        }
        
    }
    
    displayStudents(){
        console.log('Student Body: \n')
        for(let i = 0; i < this.students.length; i++){
            console.log(i + '. ' + this.students[i].name)
        }
        
    }
    displayCourses(){
        console.log('Course Catalog: \n')
        
        for(let i = 0; i < this.courses.length; i++){
            console.log('Course ID: ' + this.courses[i].id + '\n' + 'Course Name: ' + this.courses[i].name + '\n' + 'Instructor: ' + this.courses[i].instructor + '\n')
        }
        
    }
}