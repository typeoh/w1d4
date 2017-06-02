var countdownGenerator = function (x) {

  var list = x;

  return function() {

    if (list > 0){
    console.log("T-minus " + list);
    }
    if (list === 0) {
    console.log("Blast Off!");

    }
    if (list < 0) {
    console.log("Rockets already gone, bub!");
    }

    return list-- ;
  }
};

var countdown = countdownGenerator(10);
console.log(countdownGenerator);
countdown();
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already



// T-minus  x > 0

// Blast Off x === 0

// Doesn't work anymore  x < 0




//input is x
//first create an variable that host an array counting down from input x
//if statement that breaks loop when x === 0
//
