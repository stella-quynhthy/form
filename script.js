document.getElementById("myForm").addEventListener("submit", function(e) {

    let fname = document.forms["myForm"]["fname"].value.trim();
    let lname = document.forms["myForm"]["lname"].value.trim();
    let password = document.forms["myForm"]["password"].value;
    let dob = document.forms["myForm"]["dob"].value;
    //let fileUpload = document.forms["myForm"]["fileupload"].files[0];
    //let dropDown = document.forms["myForms"]["dropdown"].value;
    //console.log(fileUpload);

    //First Name Validation
    if (fname === "") {
        alert ("Please Enter Your First Name");
        e.preventDefault();
        return;
    }

    //Last Name Validation
    if (lname === "") {
        alert ("Please Enter Your Last Name");
        e.preventDefault();
        return;
    }

    //Password Validation
    if (password.length < 8) {
        alert ("Password must be at leaast 8 characters long");
        e.preventDefault();
        return;
    }

    if (dob === "") {
        alert ("Please Enter Your Date of Birth");
        e.preventDefault();
        return;
    }

    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    if (checkboxes.length === 0) {
        alert ("Please Select At Leat One Programming Language");
        e.preventDefault();
        return;
    }

    let radioBtns = document.querySelectorAll('input[name="gender"]:checked');
    if (radioBtns.length === 0) {
        alert ("Please Select Your Gender");
        e.preventDefault();
        return;
    }

   /* if (dropDown === "") {
        alert ("Please Select Your Country");
        e.preventDefault();
        return;
    }

    if (fileUpload=== undefined) {
        alert ("Please Upload a File");
        e.preventDefault();
        return;
    }
*/

    alert ("Form submitted successfully!");
});