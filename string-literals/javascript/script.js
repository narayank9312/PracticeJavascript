let obj1 = {
    a:20,
    b: 10,
    c: 30

}

let obj2 = Object.create(obj1)

obj2.p="abc"
obj2.r="def"
obj2.q="ghi"

let obj3 = Object.create(obj2)



/*
obj2.a -> it will try to find a in obj2
-> if not dound

-> it will try to fond it in obj2.__proto__
->if not found 
->it wil try to find ti in obj2.__proto__.__proto__
till .__proto__becomes null
*/