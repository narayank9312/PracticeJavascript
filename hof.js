function greet(name){
    console.log('hello',name)
}



function createGreeter(greeting){
    function greet(name){
        console.log(greeting,name())
    }
    return greet
}

// typeof x= 'function'

function getName()
{
    return document.getElementById('namebox').value
}

let g1 = createGreeter('good morning')
let g2 = createGreeter('good evening')
console.log(typeof(g1))
console.log(typeof(g2))

console.log(greet('narayan'))
console.log(greet('himanshu'))

console.log(g1('narayan'))
console.log(g1('harshiit'))

console.log(g2('narayan'))
console.log(g2('harshiit'))
