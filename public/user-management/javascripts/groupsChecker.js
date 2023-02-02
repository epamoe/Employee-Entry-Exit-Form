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

    //And we hide the other school groups lines
    hiddeNotSelectedSchoolGroups(schoolCode)
}


//function to hidde allschools groups not selected
function hiddeNotSelectedSchoolGroups(school_code) {
    document.querySelector(".AGP_groups").setAttribute("hidden", "true");
    document.querySelector(".EBK_groups").setAttribute("hidden", "true");
    document.querySelector(".EBC_groups").setAttribute("hidden", "true");
    document.querySelector(".EBT_groups").setAttribute("hidden", "true");
    document.querySelector(".KLS_groups").setAttribute("hidden", "true");
    document.querySelector(".EKG_groups").setAttribute("hidden", "true");
    document.querySelector(".KDS_groups").setAttribute("hidden", "true");
    document.querySelector(".EGC_groups").setAttribute("hidden", "true");
    document.querySelector(".EOG_groups").setAttribute("hidden", "true");
    document.querySelector(".EVS_groups").setAttribute("hidden", "true");
    document.querySelector(".ERV_groups").setAttribute("hidden", "true");
    document.querySelector(".ESC_groups").setAttribute("hidden", "true");
    document.querySelector(".EWC_groups").setAttribute("hidden", "true");
    document.querySelector(".PED_groups").setAttribute("hidden", "true");

    console.log("." + school_code + "_groups")
        //Then display the choosen section
    document.querySelector("." + school_code + "_groups").removeAttribute('hidden')
}