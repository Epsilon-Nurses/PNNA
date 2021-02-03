'use strict';

var register = new FancyKat([])

///// Fetches store Data of the membership
if (retrieveDataKit("Nurse Members List") !== null) {      // Checks Data for storage  members cache 
    var recenetMembers = retrieveDataKit("Nurse Members List")
        console.log(recenetMembers.members, "From Storage")
    for (var i= 0; i < recenetMembers.members.length; i++){
        var membersList = recenetMembers.members[i]

        register.storeMembership(membersList)
    } 
}
console.log(register)

///// Event Listner to take information from the submmission
formElement.addEventListener('submit', function (event) {
    event.preventDefault();


    var nurseName = event.target.nurseName.value
    var titles = event.target.titles.value
    var email = event.target.email.value
    var cityOfOrg = event.target.cityOfOrg.value
    var certsJobsSkills = event.target.certsJobsSkills.value
    var currentOrg = event.target.currentOrg.value

    var nurseMemberShip = new MemberShipKit(nurseName, titles, email, cityOfOrg, certsJobsSkills, currentOrg) 

    
    //// Pushed is to FancyKat Storage
    register.storeMembership(nurseMemberShip)
    console.log(register)
    storeDataKit("Nurse Members List", register)
    
    if (register.members.length <= 1){
        tableHeader(nurseMemberShip)
    }

    tableData(nurseMemberShip)


})
console.log("KICK ASSS")
