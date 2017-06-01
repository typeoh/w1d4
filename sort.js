var array = [1, 2, 5, 9, 10];
// array.sort();
// console.log(array);
var sorted = array.sort(function(a,b){
return a - b
});
console.log(sorted);