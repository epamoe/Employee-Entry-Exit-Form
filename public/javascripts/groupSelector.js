/*
    var pos = document.getElementById("position");
    var value = pos.options[pos.selectedIndex].text;
    console.log(value);
*/

function checkProposedEmail() {
    // Selecting the input element and get its value 
    var inputEmail = document.getElementById("proposedemail").value;
    const emailList = ["estebanc.pamoe@enkoeducation.com",
        "frederic.tchouli@enkoeducation.com",
        "nino.njopkou@enkoeducation.com"
    ];

    // Displaying the value
    var outputMessage = "";
    var onsubmitMessage = "Please, check the proposed email field";
    document.getElementById("emailfeedback").style.color = "#dc3545";
    document.getElementById("onsubmitemailfeedback").style.color = "#dc3545";
    if (inputEmail.length <= 3) {
        outputMessage = "Wrong length";
    } else if (inputEmail.includes("@")) {
        outputMessage = "Wrong! Just type the prefix";
    } else if (emailList.includes(inputEmail + "@enkoeducation.com")) {
        outputMessage = "This email already exist";
    } else if (!inputEmail.includes(".")) {
        outputMessage = "Wrong format; must be FristName.LastName";
    } else {
        outputMessage = "Good";
        document.getElementById("emailfeedback").style.color = "green";
        onsubmitMessage = ""
    }

    //alert(outputMessage);
    document.getElementById("emailfeedback").innerHTML = outputMessage;
    document.getElementById("onsubmitemailfeedback").innerHTML = onsubmitMessage;

}


function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());
    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
}

function check(elementId) {
    document.getElementById(elementId).checked = true;
}

function unCheck(elementId) {
    document.getElementById(elementId).checked = false;
}

function unCheckAllItTools() {
    unCheck("itasana");
    unCheck("itcanvas");
    unCheck("itdocusign");
    unCheck("itedadmin");
    unCheck("itgsuite");
    unCheck("ithelpdesk");
    unCheck("itjazzhr");
    unCheck("itmailchimp");
    unCheck("itoffice365");
    unCheck("itpipedrive");
    unCheck("itslack");
    unCheck("itturnitin");
}


function positionChecker() {
    var position = document.getElementById('position');
    var positionValue = position.options[position.selectedIndex].value;
    unCheckAllItTools();
    switch (positionValue) {
        case "hos":
            check("itpowerbi");
            check("itgsuit");
            break;
        case "mo":
            check("itdocusign");
            break;
        case "pro":
            check("itpowerbi");
            break;
        case "hr":
            check("ithelpdesk");
            break;
        case "it":
            check("itpowerbi");
            check("ithelpdesk");
            check("itoffice365");
            break;
        case "ext":
            check("itdocusign");
            break;

        default:
            check("");
    }
    console.log(positionValue); // en position
}

/*
checking groups according to organisation
*/

function groupChecker() {

    //First, we uncheck all the schools
    var schools = document.querySelectorAll(".school");
    for (var i = 0; i < schools.length; i++) {
        schools[i].checked = false;
    }
    //Also, we check evey group related to all ENKO Education group
    var common = document.querySelectorAll(".ALL");
    for (var i = 0; i < common.length; i++) {
        common[i].checked = true;
    }
    //Then we check the targets school
    var school = document.getElementById('school');
    var schoolCode = school.options[school.selectedIndex].value;
    var schoolTarget = document.querySelectorAll(("." + schoolCode).toString());
    for (var i = 0; i < schoolTarget.length; i++) {
        schoolTarget[i].checked = true;
    }

}