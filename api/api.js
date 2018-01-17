

// let promise = new Promise(function(resolve, reject) {
//   // console.log(arguments[0]);
//   resolve();
// });

//   promise.then(function(resolve, reject) {
//      // return "name"
//     // console.log(arguments);
//     // return "name"
//     resolve('name')
//   },function(){
//       // return "error"

//   }).then(function(data){
//     console.log(data);
//   });


//   console.log('Hi!');


// const p1 = new Promise((resolve, reject) => {
//   resolve('hello');
// })
// .then(result => result)
// .done(function(){
//   console.log('done')
// });

// const p2 = new Promise((resolve, reject) => {
//   resolve('hello p2');
// })
// .then(result => result)
// .catch(e => e);

// Promise.all([p1])
// .then(result => console.log(result))
// .catch(e => console.log(e));

import TrainModel from './train.api.js';

var API = {
  getTrains(options, callback) {
    return (new TrainModel(options,callback)).start();
  }
}







export default API;
