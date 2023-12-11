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
        console.log(` Course ID: ${this.id}`);
        console.log(`Course Name: ${this.name}`);
        console.log(`Course Instructor: ${this.instructor}`);
        console.log(`Course Students: ${this.students}`);
    }
}