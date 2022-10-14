/*
    function that enable the expiration date of probatory period
 */
function enableRenewableDate() {
    //disable fields
    document.querySelector(".renewablePeriodDay").disabled = false;
    document.querySelector(".renewablePeriodMonth").disabled = false;
    document.querySelector(".renewablePeriodYear").disabled = false;
    //Add the required attribute
    document.querySelector(".renewablePeriodDay").setAttribute("required", "true");
    document.querySelector(".renewablePeriodMonth").setAttribute("required", "true");
    document.querySelector(".renewablePeriodYear").setAttribute("required", "true");
}
/*
    function that disable the expiration date of probatory period
 */
function disableRenewableDate() {
    document.querySelector(".renewablePeriodDay").disabled = true;
    document.querySelector(".renewablePeriodMonth").disabled = true;
    document.querySelector(".renewablePeriodYear").disabled = true;
    //Remove the required attribute
    document.querySelector(".renewablePeriodDay").setAttribute("required", "false");
    document.querySelector(".renewablePeriodMonth").setAttribute("required", "false");
    document.querySelector(".renewablePeriodYear").setAttribute("required", "false");
}
/*
Function to enable the contract endate 
*/

function enableEndDate() {
    //disable fields
    document.querySelector(".employmentEndDateDay").disabled = false;
    document.querySelector(".employmentEndDateMonth").disabled = false;
    document.querySelector(".employmentEndDateYear").disabled = false;
    //Add the required attribute
    document.querySelector(".employmentEndDateDay").setAttribute("required", "true");
    document.querySelector(".employmentEndDateMonth").setAttribute("required", "true");
    document.querySelector(".employmentEndDateYear").setAttribute("required", "true");

}
/*
Function to disable the contract endate 
*/

function disableEndDate() {
    //disable fields
    document.querySelector(".employmentEndDateDay").disabled = true;
    document.querySelector(".employmentEndDateMonth").disabled = true;
    document.querySelector(".employmentEndDateYear").disabled = true;
    //Add the required attribute
    document.querySelector(".employmentEndDateDay").setAttribute("required", "false");
    document.querySelector(".employmentEndDateMonth").setAttribute("required", "false");
    document.querySelector(".employmentEndDateYear").setAttribute("required", "false");

}