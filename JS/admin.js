"use strict"

///// Credentials
var adminUser = prompt("Please input USERNAME")
var passwordUser = prompt("Please input PASSWORD")
var securityKit = new SecurityKitten(adminUser, passwordUser)
    if (securityKit.admin === 'admin' && securityKit.password === "FANCYKAT") {
        alert('Welcome back ' + securityKit.admin +'!')
    }
    while (securityKit.admin !== "admin" || securityKit.password !== "FANCYKAT") {
        alert("Incorrect Credentials")
        var adminUser = prompt("Please input USERNAME")
        var passwordUser = prompt("Please input PASSWORD")
        securityKit = new SecurityKitten(adminUser, passwordUser)
    }

var register = []
///// Initializer MUST BE AT THE TOP TO RENDER ANYTHING
var membersList = retrieveDataKit("Nurse Members List")
    for (var i= 0; i < membersList.members.length; i++){
        var nurse = membersList.members[i]
        register.push(nurse)
    }
tableHeader(register[0])
tableData(register)

var headSortName = document.getElementById("Name");
var headSortTitle = document.getElementById("Title");
var headSortEmail = document.getElementById("Email");
var headSortCityOrigin = document.getElementById("City of Origin");
var headSortEducation = document.getElementById("Occupation");
var headSortCurrentCity = document.getElementById("Current Orginzation");

///// Button Click Event
headSortName.addEventListener("click",function(event) {
    refresh_table('styled-table')
    var newSortedList = sortNames()
    tableHeader(newSortedList[0])
    tableData(newSortedList)
})

///// Button Click Event
headSortTitle.addEventListener("click",function(event) {
    refresh_table('styled-table')
    var newSortedList = sortTitles()
    tableHeader(newSortedList[0])
    tableData(newSortedList)
    
})

///// Button Click Event
headSortEmail.addEventListener("click",function(event) {
    refresh_table('styled-table')
    var newSortedList = sortEmail()   
    tableHeader(newSortedList[0])
    tableData(newSortedList)
})

///// Button Click Event
headSortCityOrigin.addEventListener("click",function(event) {
    event.preventDefault()
    refresh_table('styled-table')
    var newSortedList = sortCityOrigin()
    tableHeader(newSortedList[0])
    tableData(newSortedList)
})

///// Button Click Event
headSortEducation.addEventListener("click",function(event) {
    event.preventDefault()
    refresh_table('styled-table')
    var newSortedList = sortEducation()   
    tableHeader(newSortedList[0])
    tableData(newSortedList)
})

///// Button Click Event
headSortCurrentCity.addEventListener("click",function(event) {
    event.preventDefault()
    refresh_table('styled-table')
    var newSortedList = sortcurrentCity()   
    tableHeader(newSortedList[0])
    tableData(newSortedList)
})
