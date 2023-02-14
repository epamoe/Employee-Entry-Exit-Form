//Alert messages
function AlertTemplateForError(message) {
    return "<!-- Alert message for displaying an error --> <div align='center' class='alert error'> <input type='checkbox' id='alert1' /> <label class='close' title='close' for='alert1'> <i class='icon-remove'></i> </label> <p class='text'> <strong>Error!</strong>&nbsp;" + message + " </p> </div>"
}

function AlertemplateForSuccess(message) {
    return "<!-- Alert message for displaying a success message --> <div class='alert success'> <input type='checkbox' id='alert2' /> <label class='close' title='close' for='alert2'> <i class='icon-remove'></i> </label> <p class='text'> <strong>Success!</strong>&nbsp;&nbsp;" + message + " </p>"
}

function AlertemplateForWarning(message) {
    return "<!-- Alert message for displaying a warning --> <div class='alert warning'> <input type='checkbox' id='alert4' /> <label class='close' title='close' for='alert4'> <i class='icon-remove'></i> </label> <p class='text'> <strong>Warning!</strong>&nbsp;&nbsp;" + message + " </p> </div>"
}

function AlertemplateForStandart(message) {
    return "<!-- A standard alert message --> <div class='alert'> <input type='checkbox' id='alert5' /> <label class='close' title='close' for='alert5'> <i class='icon-remove'></i> </label> <p class='text'>&nbsp;&nbsp;" + message + " </p> </div>"
}

function checkModificationForm() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementById("headerMessage").setAttribute('class', 'alert error')
    document.getElementById("feedbackBox").removeAttribute('hidden')

    //Wipe the feedback box
    document.getElementById("feedbackContent").innerHTML = "";

    //check if the user email is provided 
    if (!document.getElementById("managerEmailValue").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No user email provided")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);

    }

    //check if the modification  is listed 
    if (!document.getElementById("updateDescription").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No update provided")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);

    }
}

function checkDeletionForm() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementById("headerMessage").setAttribute('class', 'alert error')
    document.getElementById("feedbackBox").removeAttribute('hidden')

    //Wipe the feedback box
    document.getElementById("feedbackContent").innerHTML = "";

    //check if the user email is provided 
    if (!document.getElementById("managerEmailValue").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No user email provided")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);

    }
    //check leaving day 
    if (!document.getElementById("leavingDay").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No leaving day")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);

    }
    //check leaving month 
    if (!document.getElementById("leavingMonth").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No leaving month")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);

    }
    //check leaving year 
    if (!document.getElementById("leavingYear").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No leaving year")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);

    }

    //check deprovisioning day 
    if (!document.getElementById("deprovisioningDay").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No deprovisioning day")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);

    }
    //check deprovisioning day 
    if (!document.getElementById("deprovisioningMonth").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No deprovisioning month")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);

    }
    //check deprovisioning day 
    if (!document.getElementById("deprovisioningMonth").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No deprovisioning month")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);

    }
}

function checkAddUserForm() {

    //Wipe the feedback box
    document.getElementById("feedbackContent").innerHTML = "";
    document.getElementById("feedbackBox").removeAttribute('hidden')


    checkPersonnalInfo()
    checkEnkoInfo()

    //scroll to the top of the page
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementById("headerMessage").setAttribute('class', 'alert error')

}

function checkEnkoInfo() {
    /*
           -----Checking within personal info
    */

    //check if the user school is provided
    if (!document.getElementById("school").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No school/organisation selected")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);
    }
    //check if the user position is provided
    if (!document.getElementById("position").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No position selected")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);
    }
    //check if the user position is teacher the subject is provided
    if (document.getElementById("position").value == "teacher" &&
        !document.getElementById("subject").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No subject provided for the teacher position")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);
    }
    //check user contract type
    if (document.getElementById("contractType").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No contract type provided")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);
    }
    //check user contract type
    if (document.getElementById("linkToContract").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No link to contract provided")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);
    }
    //check if the manager email is provided 
    if (!document.getElementById("managerEmailValue").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No manager's email provided")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);

    }
    //check the start day
    if (!document.getElementById("startDay").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No start day provided")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);
    }
    //check the start Month
    if (!document.getElementById("startMonth").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No starting month provided")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);
    }
    //check the start year
    if (!document.getElementById("startYear").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No starting year provided")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);
    }
    //check the end day
    if (!document.getElementById("endDay").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No end day provided")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);
    }
    //check the end Month
    if (!document.getElementById("endMonth").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No end month provided")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);
    }
    //check the end year
    if (!document.getElementById("endYear").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No end year provided")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);
    }
    //check a probation period field
    if (!document.getElementById("inlineRadiono").value && !document.getElementById("inlineRadioyes").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No end year provided")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);
    }

}

function checkPersonnalInfo() {

    /*
        -----Checking within personal info
    */

    //check if the user firstname is provided
    if (!document.getElementById("firstname").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No first name provided")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);
    }
    //check if the user firstname is provided
    if (!document.getElementById("lastname").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No last name provided")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);
    }
    //check if the user personalEmail is provided
    if (!document.getElementById("personalEmail").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No personal email provided")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);
    }
    //check if the user firstname is provided
    if (!document.getElementById("personalPhone").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No personal phone provided")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);
    }
    //check starting day
    if (!document.getElementById("birthDay").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No borned day")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);
    }
    //check starting month
    if (!document.getElementById("birthMonth").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No borned month")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);
    }
    //check starting year
    if (!document.getElementById("birthYear").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No borned year")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);
    }
    //check city
    if (!document.getElementById("city").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No city provided")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);
    }
    //check emergency contact name
    if (!document.getElementById("emergencyContactName").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No person emergency name provided")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);
    }
    //check emergency contact phone
    if (!document.getElementById("emergencyContactPhone").value) {
        const para = document.createElement("li");
        const node = document.createTextNode("No emergency phone provided")
        para.appendChild(node);
        document.getElementById("feedbackContent").appendChild(para);
    }
}