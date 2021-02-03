"use strict"


var button = document.getElementById("button");

var register = []
///// Initializer
var membersList = retrieveDataKit("Nurse Members List")
    for (var i= 0; i < membersList.members.length; i++){
        var nurse = membersList.members[i]
        register.push(nurse)
    }
tableHeader(register[0])
for (var i=0; i<  register.length; i++){
    tableData(register[i])
}




///// Button Click Event
button.addEventListener("click",function(event) {
event.preventDefault()
refresh_table('table-body')
console.log("refresh")

var sortedList = [] // Objects
var sortNames = []  // Names of the objects
var newSortedList = []
///// Initializer
var membersList = retrieveDataKit("Nurse Members List")
        console.log(membersList.members, "From Storage")
    for (var i= 0; i < membersList.members.length; i++){
        var nurse = membersList.members[i]
        sortedList.push(nurse)
        sortNames.push(nurse.nurseName)
    }

    sortNames.sort()
    for (var i=0; i < sortNames.length; i++){
    
        for (var j=0; j < sortedList.length; j++) {
            if (sortNames[i] === sortedList[j].nurseName){
              newSortedList.push(sortedList[j])
              break
            }
        }
    }

    
tableHeader(newSortedList[0])
for (var i=0; i<  newSortedList.length; i++){
    tableData(newSortedList[i])
}

})





