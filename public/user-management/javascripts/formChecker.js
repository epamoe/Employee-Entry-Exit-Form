//Alert messages
function AlertTemplateForError(message) {
    return "<!-- Alert message for displaying an error --> <div class='alert error'> <input type='checkbox' id='alert1' /> <label class='close' title='close' for='alert1'> <i class='icon-remove'></i> </label> <p class='text'> <strong>Error!</strong>" + message + " </p> </div>"
}

function AlertemplateForSuccess(message) {
    return "<!-- Alert message for displaying a success message --> <div class='alert success'> <input type='checkbox' id='alert2' /> <label class='close' title='close' for='alert2'> <i class='icon-remove'></i> </label> <p class='text'> <strong>Success!</strong> " + message + " </p>"
}

function AlertemplateForWarning(message) {
    return "<!-- Alert message for displaying a warning --> <div class='alert warning'> <input type='checkbox' id='alert4' /> <label class='close' title='close' for='alert4'> <i class='icon-remove'></i> </label> <p class='text'> <strong>Warning!</strong> " + message + " </p> </div>"
}

function AlertemplateForStandart(message) {
    return "<!-- A standard alert message --> <div class='alert'> <input type='checkbox' id='alert5' /> <label class='close' title='close' for='alert5'> <i class='icon-remove'></i> </label> <p class='text'> This is a standard alert message with no style. </p> </div>"
}


function checkModificationForm() {
    document.getElementById("alertMessage").innerHTML = AlertemplateForStandart("top");
}