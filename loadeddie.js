// // var rollDie = function () {
// //   return Math.floor(1 + Math.random() * 6);
// // }

// // console.log(rollDie());  // 1 (for example)

// function makeLoadedDie() {
//   var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
//   var rollLoadedDie = list.map(function() {
//     return number;
// console.log(rollLoadedDie);
//   });
// }

//   /* your code here */

// // var loadedDie function() {
// //   return
// //   }
// // }

// // // var rollLoadedDie = makeLoadedDie();


// var rollLoadedDie = makeLoadedDie();

// function makeLoadedDie() {
//   var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];

//  return function() {
//     fakeRoll += 1;
//     return fakeRoll;
// })
//   }
//     }
 // return function rollLoadedDie() {
 //   rolled = list.slice(function()
// )};


function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var i = 0;

  return function() {
    var result = list[i];
    i++;
    return result;
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
