// const { tasKHasSucceed, tasKHasFailed } = require("./handlers");

function destiny() {
  return Math.random() < 0.5;
}

function aSimplePromise() {
  return new Promise((resolve, reject) => { // implicit
    if (destiny()) resolve("yay");
    else reject("nay");
  });
}
setInterval(() => {
  aSimplePromise()
    .then(success => {
      console.log(`${success} promise resolved !!!`);
    })
    .catch(err => {
      console.error(`${err}...  promise rejected`);
    });
}, 2000);

/* let's elaborate */
/* provide imported handlers return values as promise resolve/reject value*/
/* check ./handlers.js before further reading */ 

function task(successClbk, errorClbk) {
  return new Promise((resolve, reject) => {
    if (destiny()) resolve(successClbk());
    else reject(errorClbk());
  });
}

setInterval(() => {
  //   task(tasKHasSucceed, tasKHasFailed)
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
}, 5000);
