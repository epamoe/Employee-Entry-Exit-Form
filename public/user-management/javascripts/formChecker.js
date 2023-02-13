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
    window.onbeforeunload = function(e) {
        var message = "Your confirmation message goes here.",
            e = e || window.event;
        // For IE and Firefox
        if (e) {
            e.returnValue = message;
        }

        // For Safari
        return message;
    };
    document.getElementById("alertMessage").innerHTML = AlertemplateForStandart("top");
}

function checkAddUserForm() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementById("alertMessage").innerHTML = AlertTemplateForError("Some mandatory fields are missing ");

}