'use strict'
///// Global Variables
var formElement = document.getElementById('registration-form')

///// FancyKat stores your objects for you
var FancyKat = function(item) { // Connects to Prototype
    this.item = item;
  }; // We only call FancyKat for commands

///// Stores one Item into FancyKat to store later

///// Stores in FancyKat for local storage
FancyKat.prototype.storeRegistration = function(object) {
    
    this.item.push(object)
};


///// Nurse Account Creator
function Nurse(nurseName, titles, email, cityOfOrg, certsJobsSkills, currentOrg) {
    this.nurseName = nurseName
    this.titles = titles
    this.email = email
    this.cityOfOrg = cityOfOrg
    this.certsJobsSkills = certsJobsSkills
    this.currentOrg = currentOrg
    }







/// Stores Catalog Information
function storeCatalogData(categoryName, object) { // categoryName is List Name in local storage and object is an object
    var stringObject = JSON.stringify(object);
    localStorage.setItem(categoryName, stringObject);
    }






///// Fetchs Catalog Infromation
function fetchCatalogData(categoryName) { // categoryName is the List Name in local storage
    var reObjectify = localStorage.getItem(categoryName);
    if (reObjectify === null) {
        return null
    }
    var productsFromStorage = JSON.parse(reObjectify);
    return productsFromStorage;
}



///// Builds Table function
function table_builder() {
    var tableBody = document.getElementById('table-body');
    var tableRow = document.createElement('tr')
    var headingInfo = ["Name", "Title", "Email", "City of Origin", "Certifications & Job Skills",  "Current Organization"]

    for (var i= 0; i < headingInfo.length;  i++){
    var heading = document.createElement('th')
    heading.textContent = headingInfo[i]
    tableRow.appendChild(heading)
    }
    tableBody.appendChild(tableRow);
}


function tableData() {
    var tableBody = document.getElementById('table-body');
    var tableRow = document.createElement('tr')

    var tableData = document.createElement('td')
    tableData.textContent = fancyNurse.item[0].nurseName
    tableRow.appendChild(tableData)
    var tableData = document.createElement('td')
    tableData.textContent = fancyNurse.item[0].titles
    tableRow.appendChild(tableData)
    var tableData = document.createElement('td')
    tableData.textContent = fancyNurse.item[0].email
    tableRow.appendChild(tableData)
    var tableData = document.createElement('td')
    tableData.textContent = fancyNurse.item[0].cityOfOrg
    tableRow.appendChild(tableData)
    var tableData = document.createElement('td')
    tableData.textContent = fancyNurse.item[0].certsJobsSkills
    tableRow.appendChild(tableData)
    var tableData = document.createElement('td')
    tableData.textContent = fancyNurse.item[0].currentOrg
    tableRow.appendChild(tableData)
    
    tableBody.appendChild(tableRow);

    console.log(fancyNurse.item)
}

var fancyNurse = new FancyKat([]) 

console.log(fetchCatalogData("Nurse Members List") !== null)
if (fetchCatalogData("Nurse Members List") !== null){
    var Nurse_member = fetchCatalogData("Nurse Members List")
        console.log(Nurse_member, "From Storage")
    for (var i= 0; i < Nurse_member.item.length; i++){
        var testNurse = Nurse_member.item[i]
        fancyNurse.storeRegistration(testNurse)
    }

}

// console.log(fetchCatalogData("Nurse Members List"))
// console.log(FancyKat)



///// Event Listner to take information from the submmission
formElement.addEventListener('submit', function (event) {
    event.preventDefault();


    var nurseName = event.target.nurseName.value
    var titles = event.target.titles.value
    var email = event.target.email.value
    var cityOfOrg = event.target.cityOfOrg.value
    var certsJobsSkills = event.target.certsJobsSkills.value
    var currentOrg = event.target.currentOrg.value


    

    var nurse = new Nurse(nurseName, titles, email, cityOfOrg, certsJobsSkills, currentOrg)

    console.log(nurse)
    //// Pushed is to FancyKat Storage
    fancyNurse.storeRegistration(nurse)

    storeCatalogData("Nurse Members List", fancyNurse)
    if (fancyNurse.item.length <= 1){
    table_builder()
    }

    tableData()
    console.log(fancyNurse)
})
console.log("KICK ASSS")