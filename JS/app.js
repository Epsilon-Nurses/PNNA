'use strict';

var register = new FancyKat([])
var formElement = document.getElementById('registration-form')


///// Fetches store Data of the membership
if (retrieveDataKit("Nurse Members List") !== null) {      // Checks Data for storage  members cache 
    var recenetMembers = retrieveDataKit("Nurse Members List")
        console.log(recenetMembers, "From Storage")
    for (var i= 0; i < recenetMembers.members.length; i++){
        var membersList = recenetMembers.members[i]
        register.storeMembership(membersList)}
    }

///// Event Listner to take information from the submmission
formElement.addEventListener('submit', function (event) {
    console.log('test')
    event.preventDefault();


    var nurseName = event.target.nurseName.value
    var titles = event.target.titles.value
    var email = event.target.email.value
    var cityOfOrg = event.target.cityOfOrg.value
    var certsJobsSkills = event.target.certsJobsSkills.value
    var currentOrg = event.target.currentOrg.value
    
///// Character Input Error Checker
    for (let i = 0; i < nurseName.length; i++) {
      let num = parseInt(nurseName[i]);
      console.log(num);
      console.log(typeof num)
      if (!isNaN(num)) {
        formElement.reset()   // Keeper in reset
        return
      }
    }

///// Double Registration Error Checker
for (var j=0; j < register.members.length; j++) {
    if (email === register.members[j].email) {
        formElement.reset()   // Keeper in reset
        console.log(register.members[j].email)
        alert("Sorry that email has been used already")
        console.log("Doubles")
        return             
    }
}

    var nurseName = nurseName.charAt(0).toUpperCase() + nurseName.slice(1)
    console.log(nurseName)

    var nurseMemberShip = new MemberShipKit(nurseName, titles, email, cityOfOrg, certsJobsSkills, currentOrg) 

    //// Pushed is to FancyKat Storage
    register.storeMembership(nurseMemberShip)
    console.log(register)
    storeDataKit("Nurse Members List", register)

    alert("CONGRATS NEW FANCY KAT")

    formElement.reset()   // Keeper in reset
})


console.log("KICK ASSS")
