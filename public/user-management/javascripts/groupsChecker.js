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