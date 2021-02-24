let btnWait = document.getElementById('btnWait')
let inpTimeout = document.getElementById('inpTimeout')




let wait = function (timeout) {
  return new Promise((resolve, reject) => {
    if (isNaN(parseInt(timeout))) {
      reject(new Error('timeout should be number'));
    }

    setTimeout(resolve, timeout);
  });
};

//setTimeout(() => {
// this will happen after 10 second
//},10000)

btnWait.onclick = function () {
  wait(inpTimeout.value)
    .then(() => {
      console.log('waited over');
    })
    .catch((err) => {
      console.error(err);
    });
};
