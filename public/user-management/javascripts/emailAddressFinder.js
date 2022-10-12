function clearPreviousManager() {
    document.getElementById("managerEmailValue").innerHTML = "";
    document.getElementById("managerEmailValue").style.display = "none";
}

function seachManagerAddress() {

    // Selecting the manager input name and get its value 
    var managerKeyWork = document.getElementById("managerKeyWord").value;
    outputMessage = "";
    document.getElementById("managerFeedback").style.color = "#dc3545";
    if (managerKeyWork.length < 3) {
        outputMessage = "Required at least 3 characters";
        document.getElementById("managerEmailContainer").style.display = "block";
        document.getElementById("managerEmailContainer").innerHTML = outputMessage;
    } else {

        document.getElementById("managerEmailContainer").style.display = "block";
        findManagerEmail();
    }
};
async function findManagerEmail() {
    let myPromise = new Promise(function(resolve, reject) {
        var keyword = document.getElementById("managerKeyWord").value;

        //Toogle verification Button
        document.getElementById("searchManager").style.display = "none";
        document.getElementById("searchingManager").style.display = "block";

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
        xhttp.open("GET", "search-manager-email?keyword=" + keyword);
        xhttp.send();
    });
    var output = await myPromise;

    //Toogle verification Button
    document.getElementById("searchManager").style.display = "block";
    document.getElementById("searchingManager").style.display = "none";
    document.getElementById("managerEmailValue").style.display = "block";
    document.getElementById("managerEmailValue").innerHTML = output;
    //Filling the manager email into the form value
    //document.getElementById("managerKeyWord").setAttribute("value", output);
    //document.getElementById("managerEmailContainer").innerHTML = "";

    //Toogle verification Button
    document.getElementById("searchManager").style.display = "block";
    document.getElementById("searchingManager").style.display = "none";
    document.getElementById("managerEmailValue").style.display = "block";
    document.getElementById("managerEmailValue").innerHTML = output;
    //Filling the manager email into the form value
    //document.getElementById("managerKeyWord").setAttribute("value", output);
    //document.getElementById("managerEmailContainer").innerHTML = "";
}