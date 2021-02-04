"use strict"


var register = []
///// Initializer MUST BE AT THE TOP TO RENDER ANYTHING
var membersList = retrieveDataKit("Nurse Members List")
    for (var i= 0; i < membersList.members.length; i++){
        var nurse = membersList.members[i]
        register.push(nurse)
    }
tableHeader(register[0])
for (var i=0; i<  register.length; i++){
    tableData(register[i])

}

var headSortName = document.getElementById("Name");
var headSortTitle = document.getElementById("Title");
var headSortEmail = document.getElementById("Email");
var headSortCityOrigin = document.getElementById("City of Origin");
var headSortEducation = document.getElementById("Occupation");
var headSortCurrentCity = document.getElementById("Current Orginzation");




///// Button Click Event
headSortName.addEventListener("click",function(event) {
    event.preventDefault()
    refresh_table('table-body')

    var newSortedList = sortNames()

    console.log(newSortedList)
        
    tableHeader(newSortedList[0])
    for (var i=0; i<  newSortedList.length; i++){
        tableData(newSortedList[i])
    }
})

///// Button Click Event
headSortTitle.addEventListener("click",function(event) {
    event.preventDefault()
    refresh_table('table-body')

    var newSortedList = sortTitles()

    console.log(newSortedList)
        
    tableHeader(newSortedList[0])
    for (var i=0; i<  newSortedList.length; i++){
        tableData(newSortedList[i])
    }
})

///// Button Click Event
headSortEmail.addEventListener("click",function(event) {
    event.preventDefault()
    refresh_table('table-body')

    var newSortedList = sortEmail()


    console.log(newSortedList)
        
    tableHeader(newSortedList[0])
    for (var i=0; i<  newSortedList.length; i++){
        tableData(newSortedList[i])
    }
})

///// Button Click Event
headSortCityOrigin.addEventListener("click",function(event) {
    event.preventDefault()
    refresh_table('table-body')


    var newSortedList = sortCityOrigin()


    console.log(newSortedList)
        
    tableHeader(newSortedList[0])
    for (var i=0; i<  newSortedList.length; i++){
        tableData(newSortedList[i])
    }
})

///// Button Click Event
headSortEducation.addEventListener("click",function(event) {
    event.preventDefault()
    refresh_table('table-body')

    var newSortedList = sortEducation()

    console.log(newSortedList)
        
    tableHeader(newSortedList[0])
    for (var i=0; i<  newSortedList.length; i++){
        tableData(newSortedList[i])
    }
})

///// Button Click Event
headSortCurrentCity.addEventListener("click",function(event) {
    event.preventDefault()
    refresh_table('table-body')

  var newSortedList = sortcurrentCity()

    console.log(newSortedList)
        
    tableHeader(newSortedList[0])
    for (var i=0; i<  newSortedList.length; i++){
        tableData(newSortedList[i])
    }
})





