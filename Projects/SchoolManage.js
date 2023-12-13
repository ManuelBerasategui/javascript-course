class Student {
    constructor(id, name, age, grade){
        this.id = id,
        this.name = name,
        this.age = age,
        this.grade = grade,
        this.courses = []
    }

    addCourse(course){
        this.courses.push(course)
    }
    deleteCourse(deleted){
        for(let i = 0; i < this.courses.length; i++){
            if(this.courses[i] === deleted){
                this.courses.pop(deleted)
            }
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
        this.students.push(studentName)
        
    }
    removeStudent(student) {
        this.students.pop(student)
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
    removeStudent(student){
        this.students.pop(student)
    }
    removeCourse(course){
        this.courses.pop(course)
    }
    addStudent(student){
        this.students.push(student)
    }
    addCourse(course){
        this.courses.push(course)
    }
    displayStudents(){
        console.log('Student Body: \n')
        for(let i = 0; i < this.students.length; i++){
            console.log(i + this.students[i])
        }
        
    }
    displayCourses(){
        console.log('Course Catalog: \n')
        for(let i = 0; i < this.courses.length; i++){
            console.log('Course ID: ' + this.courses[i].id + '\n' + 'Course Name: ' + this.courses[i].name + '\n' + 'Instructor: ' + this.courses[i].instructor + '\n')
        }
        for(let i = 0; i < this.courses.st; i++)
    }
}