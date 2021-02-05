'use strict';
////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////// OBJECT BUILDER BEWARE OF FLYING OJECTS ////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
            ////////// WARNING ////////// Global Maker ////////// WARNING ////////// 
                            ///// FancyKat stores your objects for your
                            var FancyKat = function (members) { // Connects to Prototype
                            this.members = members
                            }; // We only call FancyKat for commands
//                         // Product.allProducts.push(this);
//                       }; // We only call FancyKat for commands
// ////////////////////////////////////////////////////////////////////////////////////////////////
//     ///////////////////////////////////////////////////////////////////////////////////////
                              //                    /\__/\                      
                             // This is Fancy Kat \( ",," )/ General options
                            // are made to into this and stored as object array to be
                            //stored and retreive YOU CAN COUNT ON FANCY KAT 
//// Notes
// - Change all functions to call FancyKat by name and different variable time
// - Build a function that allows me to make a div with 3 images inside
//      -> Must call to Fancy Kat to get the first calculations to pick img
//      -> Once a Fancy Kat gave you the image Fancy Kat wants to help stick it on the page
//      -> Fancy Kat takes options[] to make section and how many slices/\_ /\ 
//      -> Fancy Kat glues everything to the page Thanks Fancy Kat!!! \(' = ' )/
//                                          /\_/\
// - Build some Functionality to Fancy Kat {/ ","}/ [[]]
//      -> Elements of the page building elements inside of and array
//      -> Fancy Kat needs to make a form and take the information store it
//      -> Fancy Kat Shelves Items so that they can be read later
//                              ^ ^
// - Build Kitten Constructors >'.'< KitKat
//      -> Kittens butild element to be constructed in order but saving to local makes it easier to sift
//      -> Kittens build single items in order to give to fancy Kat in an orderly fashion
//      -> One Special I want to give to a Kitten Constructor is to build each div creates ids set them into the html and set values
//      -> Sometimes Kittens put div -> section -> table -> tr -> td
// 
// - So why do we build Fancy Kat we are building Fancy Kat to make our moving parts Fancy, essenetially it is Array in an Array, each array
// inside FancyKat has an objects is the list of variable given functions so past 3D dimensional arrays from there are hard to track
// when in doublt make a Kitten and hand him to FancyKat
// Element Kitten Constructor

///// Stores in FancyKat for local storage
FancyKat.prototype.storeMembership = function(object) {
    this.members.push(object)
};

///// For filling up tables and appending
var LanguageKitten = function() {
    this.bodyCat = "body"
    this.tableId = "table-body"
    this.tableBody= 'tbody'
    this.tableRow = "tr"
    this.tableHead = "thead"
    this.heading = "th"
    this.tableData = "td"
    this.table = "styled-table"
    
}
var languageKit = new LanguageKitten() // Creating LanguageKit

var SecurityKitten = function(admin, password) {
    this.admin = admin
    this.password = password
    }

///// Converts Objects to us DOM Method
function tableHeader(kitten) {
    var table = document.getElementById(languageKit.table)
    var tableHead = document.createElement(languageKit.tableHead);
    var tableRow = document.createElement(languageKit.tableRow)
    for (var i= 0; i < kitten.objectInfo.length;  i++){
        var heading = document.createElement(languageKit.heading)
        heading.textContent = kitten.objectInfo[i]
        heading.setAttribute('id', kitten.objectInfo[i])
        tableRow.appendChild(heading)
        console.log(tableRow)
    }
    tableHead.appendChild(tableRow)
    table.appendChild(tableHead)

}

///// Table Data for Members
function tableData(kitten) {
    var tableBody = document.createElement(languageKit.tableBody)
    var table = document.getElementById(languageKit.table)
        for (var i=0; i < kitten.length; i++) {
            var tableRow = document.createElement(languageKit.tableRow)
            var tableData = document.createElement(languageKit.tableData)
            tableData.textContent = kitten[i].nurseName
            tableRow.appendChild(tableData)
            var tableData = document.createElement(languageKit.tableData)
            tableData.textContent = kitten[i].titles
            tableRow.appendChild(tableData)
            var tableData = document.createElement(languageKit.tableData)
            tableData.textContent = kitten[i].email
            tableRow.appendChild(tableData)
            var tableData = document.createElement(languageKit.tableData)
            tableData.textContent = kitten[i].cityOrgin
            tableRow.appendChild(tableData)
            var tableData = document.createElement(languageKit.tableData)
            tableData.textContent = kitten[i].education
            tableRow.appendChild(tableData)
            var tableData = document.createElement(languageKit.tableData)
            tableData.textContent = kitten[i].currentCity
            tableRow.appendChild(tableData)
            tableBody.appendChild(tableRow) 
        }
        table.appendChild(tableBody)
    }

///// Table Refresh
function refresh_table(elementID){
    var elementCleaner = document.getElementById(elementID);
    elementCleaner.innerHTML = ""
}

/// Stores Catalog Information
function storeDataKit(categoryName, object) { // categoryName is List Name in local storage and object is an object
    var stringObject = JSON.stringify(object);
    localStorage.setItem(categoryName, stringObject);
}

///// Fetchs Catalog Infromation
function retrieveDataKit(categoryName) { // categoryName is the List Name in local storage
    var reObjectify = localStorage.getItem(categoryName);
    if (reObjectify === null) {
        return null
    }
    var productsFromStorage = JSON.parse(reObjectify);
    return productsFromStorage;
}

///// Membership Constructor
var MemberShipKit = function(nurseName, titles, email, cityOrgin, education, currentCity) {
    this.objectInfo = ['Name', 'Title', 'Email', 'City of Origin', 'Occupation', 'Current Orginzation']
    this.nurseName = nurseName
    this.titles = titles
    this.email = email
    this.cityOrgin = cityOrgin
    this.education = education
    this.currentCity = currentCity
}

////// Function to Display Images
function displayList(elementID, textToShow) {      // Interacts with function chartGenerator
    var requiredId = document.getElementById(elementID)
    var element = document.createElement('button')
    element.textContent= textToShow
    requiredId.appendChild(element)
}

////// Function to sort Object Names
function sortNames() {
    var sortedList = [] // Objects
    var namesArray = []  // Names for Identifier
    var newSortedList = []
    ///// Initializer
    var membersList = retrieveDataKit("Nurse Members List")
        for (var i= 0; i < membersList.members.length; i++){
            var nurse = membersList.members[i]
            sortedList.push(nurse)
            namesArray.push(nurse.nurseName)
        }

        namesArray.sort()
        for (var i=0; i < namesArray.length; i++){
            for (var j=0; j < sortedList.length; j++) {
                if (namesArray[i] === sortedList[j].nurseName){
                newSortedList.push(sortedList[j])
                break
                }
            }
        }
        return newSortedList
}

////// Function to sort Object Titles
function sortTitles() {
var sortedList = [] // Objects
var titlesArray = []
var namesArray = []  // Names for Identifier
var newSortedList = []
///// Initializer
var membersList = retrieveDataKit("Nurse Members List")
    for (var i= 0; i < membersList.members.length; i++){
        var nurse = membersList.members[i]
        sortedList.push(nurse)
        titlesArray.push(nurse.titles)
        namesArray.push(nurse.nurseName)
    }
    namesArray.sort()
    titlesArray.sort()
    for (var i=0; i < titlesArray.length; i++){
        for (var j=0; j < sortedList.length; j++) {
            if (titlesArray[i] === sortedList[j].titles && namesArray[i] === sortedList[j].nurseName){
            newSortedList.push(sortedList[j])
            break
            }
        }
    }
    return newSortedList
}

////// Function to sort Object Names
function sortEmail() {
    var sortedList = [] // Objects
    var emailArray = [] 
    var newSortedList = []
///// Initializer
var membersList = retrieveDataKit("Nurse Members List")
    for (var i= 0; i < membersList.members.length; i++){
        var nurse = membersList.members[i]
        sortedList.push(nurse)
        emailArray.push(nurse.email)
    }

    emailArray.sort()
    for (var i=0; i < emailArray.length; i++){
        for (var j=0; j < sortedList.length; j++) {
            if (emailArray[i] === sortedList[j].email){
            newSortedList.push(sortedList[j])
            break
            }
        }
    }
    return newSortedList
}

////// Function to sort Object Names
function sortCityOrigin() {
var sortedList = [] // Objects
var cityOrginArray = [] 
var newSortedList = []
var namesArray = []  // Names for Identifier
///// Initializer
var membersList = retrieveDataKit("Nurse Members List")
    for (var i= 0; i < membersList.members.length; i++){
        var nurse = membersList.members[i]
        sortedList.push(nurse)
        cityOrginArray.push(nurse.cityOrgin)
        namesArray.push(nurse.nurseName)
    }
    namesArray.sort()
    cityOrginArray.sort()
    for (var i=0; i < cityOrginArray.length; i++){
        for (var j=0; j < sortedList.length; j++) {
            if (cityOrginArray[i] === sortedList[j].cityOrgin && namesArray[i] === sortedList[j].nurseName) {
            newSortedList.push(sortedList[j])
            break
            }
        }
    }
    return newSortedList
}

////// Function to sort Object Names
function sortEducation() {
    var sortedList = [] // Objects
    var educationArray = []
    var newSortedList = []
    var namesArray = []  // Names for Identifier
    ///// Initializer
    var membersList = retrieveDataKit("Nurse Members List")
            console.log(membersList.members, "From Storage")
        for (var i= 0; i < membersList.members.length; i++){
            var nurse = membersList.members[i]
            sortedList.push(nurse)
            educationArray.push(nurse.education)
            namesArray.push(nurse.nurseName)
        }
        namesArray.sort()
        educationArray.sort()
        for (var i=0; i < educationArray.length; i++){
            for (var j=0; j < sortedList.length; j++) {
                if (educationArray[i] === sortedList[j].education){
                newSortedList.push(sortedList[j])
                break
                }
            }
        }
    return newSortedList
}

////// Function to sort Object Names
function sortcurrentCity() {
    var sortedList = [] // Objects
    var currentCityArray = [] 
    var newSortedList = []
    ///// Initializer
    var membersList = retrieveDataKit("Nurse Members List")
            console.log(membersList.members, "From Storage")
        for (var i= 0; i < membersList.members.length; i++){
            var nurse = membersList.members[i]
            sortedList.push(nurse)
            currentCityArray.push(nurse.currentCity)
        }
        namesArray.sort()
        currentCityArray.sort()
        for (var i=0; i < currentCityArray.length; i++){
            for (var j=0; j < sortedList.length; j++) {
                if (currentCityArray[i] === sortedList[j].currentCity && namesArray[i] === sortedList[j].nurseName){
                newSortedList.push(sortedList[j])
                break
                }
            }
        }
        return newSortedList
}

///// Retrieve Membership Function
function membershipCacheRetrieval(objectArray) {
    var recenetMembers = retrieveDataKit("Nurse Members List")
        console.log(recenetMembers, "From Storage")
    for (var i= 0; i < recenetMembers.members.length; i++){
        var membersList = recenetMembers.members[i]
        objectArray.storeMembership(membersList)
    }
    return objectArray
}
