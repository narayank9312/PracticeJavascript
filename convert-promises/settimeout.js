let btnWait = document.getElementById('btnWait');
let inpTimeout = document.getElementById('inpTimeout');

function wait(timeout, done) {
  if (isNaN(parseInt(timeout))) {
    done(new Error('Timeout should be a number'));
  }

  setTimeout(() => {
    done(null);
  }, timeout);
}

btnWait.onclick = function () {
  wait(inpTimeout.value, (err) => {
    if (err) console.error(err);
    else {
      console.log('wait over');
    }
  });
};
