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
            check("itzoom");
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
        case "mo":
            check("itedadmin");
            check("itgsuite");
            check("itmailchimp");
            check("itpayspace");
            check("itpipedrive");
            check("itslack");
            check("itsurveymonkey");
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
        case "ext":
            check("itgsuit");
            check("itpayspace");
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