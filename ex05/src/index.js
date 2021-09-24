var myNestedArray = [];
var chocolates = ["Toblerone", "Milka"]

function myNestedFunction(arr) {
   var array = [...arr];
   var counter = 5;
   for (i=0; i<chocolates.length; i++) {
      var newElement = []
      newElement.push(array[i],counter)
      counter-=2
      myNestedArray.push(newElement)
   }

   return myNestedArray;

}

console.log(myNestedFunction(chocolates));

module.exports = myNestedFunction;