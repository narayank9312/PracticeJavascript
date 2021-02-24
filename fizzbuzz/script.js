let inputNum = document.getElementById("inputNum")
let btnPrint = document.getElementById("btnPrint")
let ulNumList = document.getElementById("ulNumList")


btnPrint.onclick = function () {
 let start = Date.now()

 //let N = parseInt(inputNum.value);

 ulNumList.innerHTML = ''
 for(let i=1; i<=inputNum.value; i++){
 

    let li = document.createElement('li')

    let print = ""
    if (i % 3 == 0 ) print += 'fizz'
    if (i % 5 == 0 ) print += 'buzz'
   
    if(print === '') print = i


    li.textContent = print
    ulNumList.appendChild(li)

    

 }
 








 console.log('time taken', Date.now() - start)

}