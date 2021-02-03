"use strict"

/// Fetchs Catalog Infromation
    function fetchCatalogData(categoryName) { // categoryName is the List Name in local storage
        var reObjectify = localStorage.getItem(categoryName);
        var productsFromStorage = JSON.parse(reObjectify);
        return productsFromStorage;
      }

// while ( admin !== "admin" ) {
// var admin = prompt("Hello, please identify yourself");
// }

// while ( password !== "password"){
// var password = prompt("Hello," + admin + " please enter your password")
// }


fetchCatalogData("Nurse Members List")



///// Nurse Account Creator 
function SearchKit(nurseName, titles, email, cityOfOrg, certsJobsSkills, currentOrg) {
  this.nurseName = nurseName
  this.titles = titles
  this.email = email
  this.cityOfOrg = cityOfOrg
  this.certsJobsSkills = certsJobsSkills
  this.currentOrg = currentOrg
  }

var button = document.getElementById("button");

///// Initializer
var unwrapKit = fetchCatalogData("Nurse Members List")
console.log(unwrapKit.item[0].nurseName)

var nameArray = []
var titlesArray = []
var emailArray = []
var cityOfOrg = []
var certsJobsSkillsArray = []
var currentOrgArray = []



for (var i =0; i < unwrapKit.item.length; i++) {
    nameArray.push(unwrapKit.item[i].nurseName)
    titlesArray.push(unwrapKit.item[i].titles)
    emailArray.push(unwrapKit.item[i].email)
    cityOfOrg.push(unwrapKit.item[i].cityOfOrg)
    certsJobsSkillsArray.push(unwrapKit.item[i].certsJobsSkills)
    currentOrgArray.push(unwrapKit.item[i].currentOrg)
}

var globalTest = new SearchKit(nameArray, titlesArray, emailArray, cityOfOrg, certsJobsSkillsArray, currentOrgArray)
console.log(globalTest)
table_builder()
tableData(globalTest)





///// Button Click Event
button.addEventListener("click",function(event) {
event.preventDefault()



  var unwrapKit = fetchCatalogData("Nurse Memebers List")
  console.log(unwrapKit.item[0].nurseName)

  var nameArray = []
  var titlesArray = []
  var emailArray = []
  var cityOfOrg = []
  var certsJobsSkillsArray = []
  var currentOrgArray = []



  for (var i =0; i < unwrapKit.item.length; i++) {
      nameArray.push(unwrapKit.item[i].nurseName)
      titlesArray.push(unwrapKit.item[i].titles)
      emailArray.push(unwrapKit.item[i].email)
      cityOfOrg.push(unwrapKit.item[i].cityOfOrg)
      certsJobsSkillsArray.push(unwrapKit.item[i].certsJobsSkills)
      currentOrgArray.push(unwrapKit.item[i].currentOrg)
  }

  var test = new SearchKit(nameArray, titlesArray, emailArray, cityOfOrg, certsJobsSkillsArray, currentOrgArray)
  console.log(test)
  refresh_table()
  table_builder()
  tableData(test)




})

///// Table Refresh
function refresh_table(){
  var tableBody = document.getElementById('table-body');
  tableBody.innerHTML = ""
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


function tableData(searchKit) {

      for (var i=0; i < searchKit.nurseName.length; i++) {
        var tableBody = document.getElementById('table-body');
        var tableRow = document.createElement('tr')

            var tableData = document.createElement('td')
            tableData.textContent = searchKit.nurseName[i]
            tableRow.appendChild(tableData)
            var tableData = document.createElement('td')
            tableData.textContent = searchKit.titles[i]
            tableRow.appendChild(tableData)
            var tableData = document.createElement('td')
            tableData.textContent = searchKit.email[i]
            tableRow.appendChild(tableData)
            var tableData = document.createElement('td')
            tableData.textContent = searchKit.cityOfOrg[i]
            tableRow.appendChild(tableData)
            var tableData = document.createElement('td')
            tableData.textContent = searchKit.certsJobsSkills[i]
            tableRow.appendChild(tableData)
            var tableData = document.createElement('td')
            tableData.textContent = searchKit.currentOrg[i]
            tableRow.appendChild(tableData)

            tableBody.appendChild(tableRow);
      }
}




/// Stores Catalog Information
    function storeCatalogData(categoryName, object) { // categoryName is List Name in local storage and object is an object
        var stringObject = JSON.stringify(object);
        localStorage.setItem(categoryName, stringObject);
      }