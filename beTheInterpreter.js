
//Problem 1
(function(){
var first_variable;
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);
first_variable = "Yipee I was first!";
console.log(first_variable);
})();


//Problem 2
(function() {
var food; 
function eat() {
  var food; 
  food = "half-chicken";
  console.log(food);
  food = "gone";       // CAREFUL!
  console.log(food);
}
food = "Chicken";
eat();
console.log(food);
})();

//Problem 3
(function() {
var new_word;
function lastFunc() {
   var new_word;
   new_word = "old";
}
new_word = "NEW!";
console.log(new_word);
})();