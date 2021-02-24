function outer(arg1){
    let var1 =10

    function inner(arg2){
        let var2=20
        let x=20
        console.log(arguments[0])

        console.log(arg1, var1, arg2,var2)

    }

    return inner

}

let x= outer("param1")

// scope of arg1 and vr1 are from lines 2 to 10

x("param2")
