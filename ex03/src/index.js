var myPets = ["Dog", "Cat"]

function myArrayFunction(myPets) {
   var myNewPets = [...myPets];
   
   myNewPets.push("Bird", "Fish")
   var firstPet = []
   var lastPet = []
   firstPet = myNewPets.shift()
   lastPet = myNewPets.pop()
   myNewPets.unshift("Lion")



   return myNewPets;

}

console.log(myArrayFunction(myPets));

module.exports = myArrayFunction;