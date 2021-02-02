"use strict"

var admin = prompt("Hello, please identify yourself");

console.log(admin)

var password = prompt("Hello," + admin + " please enter your password")
"admin" = admin
"password" = password
var button = document.getElementById("button");

button.addEventListener("click",function(event) {
  console.log(event.target)
})



///// Nurse Account Creator 
function SearchKit(nurseName, titles, email, cityOfOrg, certsJobsSkills, currentOrg) {
  this.nurseName = nurseName
  this.titles = titles
  this.email = email
  this.cityOfOrg = cityOfOrg
  this.certsJobsSkills = certsJobsSkills
  this.currentOrg = currentOrg
  }

///// Fetchs Catalog Infromation
//     function fetchCatalogData(categoryName) { // categoryName is the List Name in local storage
//         var reObjectify = localStorage.getItem(categoryName);
//         var productsFromStorage = JSON.parse(reObjectify);
//         return productsFromStorage;
//       }

///// Stores Catalog Information
//     function storeCatalogData(categoryName, object) { // categoryName is List Name in local storage and object is an object
//         var stringObject = JSON.stringify(object);
//         localStorage.setItem(categoryName, stringObject);
//       }