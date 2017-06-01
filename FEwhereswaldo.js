// Modify the callback function in the previous example so that logs the index of the array where Waldo is found, ie. "Found Waldo at index 2!". (You will need to modify actionWhenFound to receive the index.)
 var indexPosition;


function findWaldo(arr, found) {
  //loops through array
  arr.forEach(function(element, index) {
  // for (var i = 0; i < arr.length; i++) {
    if (element === "Waldo") {
      indexPosition = index;
      found();   // execute callback
    }
  });
}

function actionWhenFound() {
  console.log("Found Waldo at " + indexPosition + "!");
}
//executes function findWaldo, provides parameter of array and executes actionwhenFound

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);