// function callMe(sum) {
//   console.log(sum);
// }
// function callThat(num, toCall) {
//   let sum = 0;
//   for (let i = 0; i < num; i++) {
//     sum += 1;

//   }
//   toCall(sum);
// }
// callThat(10, callMe);

// function callSomethingAfter(textToPrint, callMe) {
//   setTimeout(() => {
//     for (let i = 0; i < 10; i++) {
//       callMe(textToPrint);
//     }
//   }, 0);
// }
// callSomethingAfter('i l y a', console.log);
// callSomethingAfter('i l y n', console.log);
// console.log('hello world');

// async function* some(hello) {
//   while (true) {
//     let i = 0;
//     const promise = new Promise((res, rej) => {
//       setTimeout(() => {
//         res('hello world');
//       }, 1000);
//     });
//     const promiseValue = await promise;
//     console.log(promiseValue);
//     yield i;
//     i++;
//   }
// }
// const generator = some();
// generator.next().then(() => {});
// generator.next().then(() => {});
// generator.next().then(() => {});
// generator.next().then(() => {});
// generator.next().then(() => {});
// generator.next().then(() => {});

const myPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res('country ');
  }, 100);
});

myPromise
  .then((someString) => {
    console.error(someString);
  })
  .catch((someString) => {
    console.log('i really ' + someString.replace('i', '').trim());
  });
