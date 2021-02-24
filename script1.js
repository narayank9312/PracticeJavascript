function checkThis () {
    console.log(this)
}


let obj={
    a: 10,
    b: "narayan",
    c: true,
    d: function () {
        console.log(this)
    },
    e: {
        l: 234,
        m: "name"

    }
}
