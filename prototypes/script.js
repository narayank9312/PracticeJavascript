let str = 'narayan'              // 3 levels from null
let num = 233                   // 3 levels from null
let bool = true                 // 3 levels from null
let arr = [246,436,6,346]       // 3 levels from null
let obj = {a:10, b: 'asdasd'}   //2 levels from null
let fun = function () {              // 3 levels from null
    console.log('yay!')
}


console.log("======= types ========")
console.log('typeof String '+ typeof String)
console.log('typeof Object '+ typeof Object )
console.log('typeof Boolean ' + typeof Boolean   )
console.log('typeof Array ' + typeof Array   )
console.log('typeof Function ' ,typeof Function)  
console.log('type of Number' , typeof Number)

console.log(str.__proto__)


console.log('====== proto chain ======')
console.log(str.__proto__.__proto__ == obj.__proto__)
console.log(num.__proto__.__proto__ == obj.__proto__)
console.log(arr.__proto__.__proto__ == obj.__proto__)
console.log(fun.__proto__.__proto__ == obj.__proto__)
console.log(bool.__proto__.__proto__ == obj.__proto__)

// everthing indirectly inherit from same thing 
//that obj is inherited from
//i.e in javascript , everything is essentially an Object

console.log('========== prototype =========')
console.log(obj.__proto__ == Object.prototype)
console.log(str.__proto__ == String.prototype)
console.log(num.__proto__ == Number.prototype)
console.log(bool.__proto__ == Boolean.prototype)
console.log(arr.__proto__ == Array.prototype)
console.log(fun.__proto__ == Function.prototype)


// String.prototype inherit from Object.prpototype

// typeof Object.create(Boolean.prototype)

let x = Object.create(Boolean.prototype)

console.log(str.charAt(4))

console.log(typeof str.charAt(4))
console.log(typeof str.charAt)

let str2 = "dhihds"
console.log(str.charAt == str2.charAt)

str.charAt = function () { return 'x'} // does not make difference

String.prototype.charAt = function () {  return 'x' }      
console.log(str.charAt(1))        


Array.prototype.joinOriginal = Array.prototype.join
Array.prototype.join = function () {
    console.log('join called on',this)
    return this.joinOriginal(... arguments)
}
