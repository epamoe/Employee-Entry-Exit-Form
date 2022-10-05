function clearMessage() {
    document.getElementById("emailfeedback").innerHTML = "###";
};

function checkProposedEmail() {
    // Selecting the input element and get its value 
    var inputEmail = document.getElementById("proposedemail").value;
    const emailList = ["estebanc.pamoe@enkoeducation.com",
        "frederic.tchouli@enkoeducation.com",
        "nino.njopkou@enkoeducation.com"
    ];

    // Displaying the value
    var outputMessage = "&nbsp ";
    var onsubmitMessage = "&nbsp Please, check the proposed email field";
    document.getElementById("emailfeedback").style.color = "#dc3545";
    document.getElementById("onsubmitemailfeedback").style.color = "#dc3545";
    if (inputEmail.length <= 3) {
        outputMessage += "Wrong length";
    } else if (inputEmail.includes("@")) {
        outputMessage += "Wrong! Just type the prefix";
    } else if (emailList.includes(inputEmail + "@enkoeducation.com")) {
        outputMessage += "This email already exist";
    } else if (!inputEmail.includes(".")) {
        outputMessage += "Wrong format; must be FristName.LastName";
    } else {
        outputMessage += "Good";
        document.getElementById("emailfeedback").style.color = "green";
        onsubmitMessage += ""
    }

    //alert(outputMessage);
    document.getElementById("emailfeedback").innerHTML = outputMessage;
    document.getElementById("onsubmitemailfeedback").innerHTML = onsubmitMessage;

}