class person {
    constructor(name, age){
        this.name=name
        this.age = age
    }
    isAdult() {
        return this.age >= 18
    }
}

let p1 = new person('navneet',22)
let p2 = new person('himanshu',15)
console.log(typeof peroson);  // there is no new datatype called 'class'

class Student extends person {
    constructor(name , age , grade){
        super(name,age)
        this.grade = grade
    }
}

let s1 = new Student("narayan ",21,12)
let s2 = new Student("hianshu",20.12)
console
console.log(s1.__proto__ == Student.prototype)
console.log(s1.__proto__.__proto__ == person.prototype)
console.log(s1.__proto__.__proto__.__proto__ == Object.prototype)

// inheritance chain
//Object.protoptype - person.prototype - student.prototype 