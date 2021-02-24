function hellosayer() {
    console,log('world')
    return 'hello';
}

let x = () => {hellosayer();}
console.log(x)

console.log(() => {hellosayer();})