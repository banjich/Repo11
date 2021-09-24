var myArrar = [
    [[2], [5, 6, 7], [19, 37]],
    [[2.5, 2], [0.5, 0.2], [8]],
    [[1.2, ], [3,4,5,6], [789]],
    ];

  
  function multiplyArrayFunction(arr) {
    var myArrar = [...arr];
    var product = [];
    
    for (i = 0; i < myArrar.length; i++) {
      var sum = 0,
        
      for (j = 0; j < myArrar[i].length; j++) {
      sum += myArrar[i][j];
      }
      
  
      product.push(sum);
    }
    return product;
  }
  
  console.log(multiplyArrayFunction(temps));
  
  module.exports = multiplyArrayFunction;
  













