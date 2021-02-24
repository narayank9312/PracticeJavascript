
console.log(beta())

function alpha(){
    return "A"
}

console.log(beta())

function beta(){
    return "B"
}

let gamma = function () {
    return "c"
}

console.log(beta())

function area(height , width){

    if(!width){
        return Math.PI*height*height
    }
    console.log("height = ", height ,"width = ", width)
    return height * width

}

console.log("area 3,4", area(3,4))
console.log("area 4", area(4))

function hello() {
    
console.log("hello world " + arguments[0] + arguments[1])

}

hello("narayan ","kumar jha")
