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
    } else if (checkPresenceSpecialCharacters(inputEmail)) {
        outputMessage += "Special characters like é è ; # are deprecated";
    } else {
        checkEmailValidity();
    }

    document.getElementById("emailfeedback").innerHTML = outputMessage + "<br>";
    //document.getElementById("onsubmitemailfeedback").innerHTML = onsubmitMessage;
}

function checkPresenceSpecialCharacters(email) {
    if (email.includes(" ")) return true;
    if (email.includes("+")) return true;
    if (email.includes("*")) return true;
    if (email.includes("?")) return true;
    if (email.includes("^")) return true;
    if (email.includes("µ")) return true;
    if (email.includes("$")) return true;
    if (email.includes("£")) return true;
    if (email.includes("(")) return true;
    if (email.includes(")")) return true;
    if (email.includes("|")) return true;
    if (email.includes(",")) return true;
    if (email.includes(";")) return true;
    if (email.includes("é")) return true;
    if (email.includes("è")) return true;
    if (email.includes("à")) return true;
    if (email.includes("â")) return true;
    if (email.includes("î")) return true;
    if (email.includes("&")) return true;
    if (email.includes(":")) return true;
    if (email.includes("!")) return true;
    if (email.includes("?")) return true;
    if (email.includes("#")) return true;
    return false;
}

function searchManager() {
    //alert("ok");
    //console.log("ok");
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
        xhttp.open("GET", "verify-proposed-email?prefix=" + email);
        xhttp.send();
    });
    var output = await myPromise;
    if (output.toString() == ("Looks good!").toString() || output.toString() == ("internal server error. Refer to itsupport")) {
        document.getElementById("emailfeedback").style.color = "green";
        document.querySelector('#btnOnSubmitt').disabled = false;
        document.getElementById("btnOnSubmitt").classList.remove('btn-secondary');
        document.getElementById("btnOnSubmitt").classList.add('btn-success');
        document.getElementById("onsubmitemailfeedback").style.display = "none";
    } else {

        document.querySelector('#btnOnSubmitt').disabled = true;
    }
    document.getElementById("emailfeedback").innerHTML = output;
    //Toogle verification Button
    document.getElementById("checkproposedemail").style.display = "block";
    document.getElementById("checkingproposedemail").style.display = "none";
}