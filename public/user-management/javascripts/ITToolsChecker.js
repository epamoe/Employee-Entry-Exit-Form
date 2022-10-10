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
        case "teacher":
            check("itedadmin");
            break;
        case "finance":
            check("itgsuite");
            check("itpayspace");
            check("itslack");
            break;
        case "it":
            check("itasana");
            //check("itdocusign");
            check("itgsuite");
            //check("itjazzhr");
            //check("itpayspace");
            check("itslack");
            //heck("itzoom");
            break;
        case "hr":
            check("itasana");
            check("itdocusign");
            check("itgsuite");
            check("itjazzhr");
            check("itpayspace");
            check("itslack");
            check("itzoom");
            break;
        case "ext":
            check("itgsuit");
            check("itpayspace");
            break;
        case "mo":
            check("itedadmin");
            //check("itgsuite");
            //check("itmailchimp");
            check("itpayspace");
            //check("itpipedrive");
            //check("itslack");
            //check("itsurveymonkey");
            break;
        case "hos":
            check("itcanvas");
            check("itedadmin");
            check("itgsuite");
            check("itpayspace");
            check("itturnitin");
            break;
        case "pro":
            //check("itedadmin");
            //check("itmailchimp");
            //check("itpayspace");
            //check("itpowerbi");
            //check("itsurveymonkey");
            break;
    }
    console.log(positionValue); // en position
}