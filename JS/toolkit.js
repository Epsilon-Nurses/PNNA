'use strict';
////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////// OBJECT BUILDER BEWARE OF FLYING OJECTS ////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
            ////////// WARNING ////////// Global Maker ////////// WARNING ////////// 
                        var FancyKat = function(filePath, name) {
                        this.filePath = filePath;
                        this.name = name;
                        // Product.allProducts.push(this);
                      }; // We only call FancyKat for commands
////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////
                             var fancyKat = new FancyKat([]) 
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
//
// - So why do we build Fancy Kat we are building Fancy Kat to make our moving parts Fancy, essenetially it is Array in an Array, each array
// inside FancyKat has an objects is the list of variable given functions so past 3D dimensional arrays from there are hard to track
// when in doublt make a Kitten and hand him to FancyKat
// Element Kitten Constructor
// var elementKit = function() {
//   // Fill this with all the elements we will be using for later call functions
//     this.size = 'section'; // These are the elements that exist
//     this.value = 'tbody';// These are the elements we will make
//   };
// // Test Area
// var baseElement = document.getElementById("section_1")
// var newElement = document.createElement("section")
// console.log("test")
// // How many times do we wanna fill this array
// /
// displayList(baseElement, newElement)
//     ////// Function to Display Images
//     function displayList(first_element, second_element) {      // Interacts with function chartGenerator
//       second_element.textContent = "Test Test Test"
//       console.log(second_element)
//       first_element.appendChild(second_element);
//       // h2Element.appendChild(ulElement);
//   // for (var i = 0; i < CatalogImage.allImages.length; i++) {
//   //       var liElement = document.createElement('li');
//   //       ulElement.appendChild(liElement);
//     }
// // For input elements, the size attribute specifies the visible width, in characters, of an <input> element.
//     function changeInputType(oldObject, oType) {
//       var newObject = document.createElement('input');
//       newObject.type = oType;
//       if(oldObject.size) newObject.size = oldObject.size; // How many times we wanna do this
//       if(oldObject.value) newObject.value = oldObject.value; // What's the new Value
//       if(oldObject.name) newObject.name = oldObject.name; // What's the new name
//       if(oldObject.id) newObject.id = oldObject.id; // New id
//       if(oldObject.className) newObject.className = oldObject.className; // New Class
//       oldObject.parentNode.replaceChild(newObject,oldObject); // Changes new to Old and 
//       return newObject;
//     }
//       function myFunction() {
//         var x = document.createElement("INPUT");
//         x.setAttribute("type", "text");
//         x.setAttribute("value", "Hello World!");
//         document.body.appendChild(x);
//       }
// // Make a Form for later
// function populateForm() { // COMPLETED TO MAKE VALUES ASSOCIATE WITH THE NAME
//     //TODO: Add an <option> tag inside the form's select for each product
//     var selectElement = document.getElementById('items');
//     var optionElement = document.createElement('option');
//       for (var i=0; i < Product.allProducts.length; i++) {
//         var optionElement = document.createElement('option');
//         optionElement.textContent = Product.allProducts[i].name
//         optionElement.value = Product.allProducts[i].name
//         selectElement.appendChild(optionElement);
//     }
//   }
//     ///// ClickLogger //////
//     function clickLogger(event) {      // Interacts with function electionPeriod
//     event.preventDefault();
//     for (var i = 0; i < CatalogImage.allImages.length; i++) {
//           if (event.target.src.includes(CatalogImage.allImages[i].image)) {
//               CatalogImage.allImages[i].timesClicked++;
//             }// console.log(CatalogImage.allImages[i])
//           }
//     }
//     ////// Top Catalog Choice ////// Returns from storage feed any sized array Objects
//     function topCatalogItems() {
//     var listOfCatalog = fetchCatalogData('product')
//     var topCatalog = listOfCatalog[0]
//             for (var i = 0; i < listOfCatalog.length; i++) {
//               if (topCatalog.rating < listOfCatalog[i].rating) {
//                   topCatalog = listOfCatalog[i]
//               }
//             }
//         }
//     ///// Stores Catalog Information
//     function storeCatalogData(categoryName, object) { // categoryName is List Name in local storage and object is an object
//         var stringObject = JSON.stringify(object);
//         localStorage.setItem(categoryName, stringObject);
//       }
//     ///// Fetchs Catalog Infromation
//     function fetchCatalogData(categoryName) { // categoryName is the List Name in local storage
//         var reObjectify = localStorage.getItem(categoryName);
//         var productsFromStorage = JSON.parse(reObjectify);
//         return productsFromStorage;
//       }
//     ////// Generates 3 random images
//     function randomCatalogimg() {     // Interacts with Constructor CatalogImage
//         // Chooses Random Images from Array
//         var indexImage = Math.floor(Math.random() * CatalogImage.allImages.length);
//         var imageCatalog = CatalogImage.allImages[indexImage];
//     return imageCatalog
//     }
//              // Fills Array with Data
//              for (var i = 0; i < CatalogImage.allImages.length; i++) {
//                 productsNames.push(CatalogImage.allImages[i].name);
//                 votesByProduct.push(CatalogImage.allImages[i].timesClicked);
//                 timesProductsAreShow.push(CatalogImage.allImages[i].timesShown);
//              }
//             var ctx = document.getElementById('myChart').getContext('2d');
//               new Chart(ctx, {      // Chart constructor API
//                 type: 'bar',
//                 data: {
//                   labels: productsNames, // array of strings goes here
//                   datasets: [{
//                     label: 'times clicked',
//                     data: votesByProduct, // array of numbers goes here
//                     // data: votesByProduct,
//                     backgroundColor: new Array(12).fill('rgba(255, 99, 132, 1)'),
//                     borderWidth: 1
//                   },
//                   {
//                     label: 'times Shows',
//                     data: timesProductsAreShow,
//                     backgroundColor: new Array(12).fill('rgba(54, 162, 235, 1)'),
//                     borderWidth: 1
//                   }]
//                 },
//                 options: {
//                   scales: {
//                     yAxes: [{
//                       ticks: {
//                         beginAtZero: true
//                       }
//                     }]
//                   }
//                 }
//               });
//             }














