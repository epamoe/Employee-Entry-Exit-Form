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


function toolChecker() {
    var position = document.getElementById('position');
    var positionValue = position.options[position.selectedIndex].value;
    unCheckAllItTools();
    switch (positionValue) {
        case "finance":
            check("itgsuite");
            check("itpayspace");
            check("itslack");
            break;
        case "it":
            check("itasana");
            check("itdocusign");
            check("itgsuite");
            check("itjazzhr");
            check("itpayspace");
            check("itslack");
            check("itzoom");
            break;
        case "hr":
            check("ithelpdesk");
            check("ithelpdesk");
            check("ithelpdesk");
            check("ithelpdesk");
            break;
        case "mo":
            check("itedAdmin");
            check("itgsuite");
            check("itmailchimp");
            check("itpayspace");
            check("itpipedrive");
            check("itslack");
            check("itsurveymonkey");
            break;
        case "hos":
            check("itcanvas");
            check("itedAdmin");
            check("itgsuite");
            check("itpayspace");
            check("itturnitin");
            break;
        case "pro":
            check("itedadmin");
            check("itmailchimp");
            check("itpayspace");
            check("itpowerbi");
            check("itsurveymonkey");
            break;
        case "ext":
            check("itgsuit");
            check("itpayspace");
            break;
        default:
            //check("");
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

function clearProposedEmailRespponse() {
    document.getElementById("emailfeedback").innerHTML = "";
}

function verifyEmail() {
    //clearing the value of 
    document.getElementById("emailfeedback").innerHTML = "";

    // Selecting the input element and get its value 
    var inputEmail = document.getElementById("proposedemail").value;

    // Displaying the value
    var outputMessage = "&nbsp ";
    //var onsubmitMessage = "&nbsp Please, check the proposed email field";
    document.getElementById("emailfeedback").style.color = "#dc3545";
    document.getElementById("onsubmitemailfeedback").style.color = "#dc3545";

    //Beging verifying
    if (inputEmail.length <= 3) {
        outputMessage += "Wrong! Should be at leat 4 caracters";
    } else if (inputEmail.includes("@")) {
        outputMessage += "Wrong! format! must be FristName.LastName";
    } else if (!inputEmail.includes(".")) {
        outputMessage += "Wrong! format! must be FristName.LastName";
    } else {
        checkEmailValidity();
    }

    document.getElementById("emailfeedback").innerHTML = outputMessage;
    //document.getElementById("onsubmitemailfeedback").innerHTML = onsubmitMessage;
}

function isEmailExist() {
    var result = "5555";
    var email = document.getElementById("proposedemail").value;
    //Retriving/ Checking email with AJAX
    const xhttp = new XMLHttpRequest();
    //var inputEmail = document.getElementById("proposedemail").value;
    xhttp.onload = function() {
        result = this.responseText;
    }
    xhttp.open("GET", "verify-email?prefix=" + email);
    xhttp.send();
    return result;
    //document.getElementById("emailfeedback").innerHTML = result;
}

async function checkEmailValidity() {
    let myPromise = new Promise(function(resolve, reject) {
        var email = document.getElementById("proposedemail").value;

        //Toogle verification Button
        document.getElementById("checkproposedemail").style.display = "none";
        document.getElementById("checkingproposedemail").style.display = "block";

        //Retriving/ Checking email with AJAX
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            resolve(this.responseText);
            if (xhttp.status == 200) {
                resolve(this.responseText);
            } else {
                resolve("Network error!");
            }
        }
        xhttp.open("GET", "verify-email?prefix=" + email);
        xhttp.send();
    });
    var output = await myPromise;
    if (output.toString() == ("Looks good!").toString()) {
        document.getElementById("emailfeedback").style.color = "green";
        document.querySelector('#btnOnSubmitt').disabled = false;
        document.getElementById("onsubmitemailfeedback").style.display = "none";
    } else {

        document.querySelector('#btnOnSubmitt').disabled = true;
    }
    document.getElementById("emailfeedback").innerHTML = output;
    //Toogle verification Button
    document.getElementById("checkproposedemail").style.display = "block";
    document.getElementById("checkingproposedemail").style.display = "none";
}