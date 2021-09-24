var monitorsListArray = ["Apple", "Peach", "Berry"];

function myMonitorsFunction(arr) {
   var newMonitorList = [...arr];
   var monitorsList = []
   var counter = 1;
   for (i=0; i<newMonitorList.length; i++) {
      var newElement = []
      newElement.push(newMonitorList[i],counter)
      counter++
      monitorsList.push(newElement)
   }

   return monitorsList;

}

console.log(myMonitorsFunction(monitorsListArray));

module.exports = myMonitorsFunction;