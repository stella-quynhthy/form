document.getElementById("myForm").addEventListener("submit", function(e) {

    let fname = document.forms[myForm]["fname"].value.trim();
    let lname = document.forms[myForm]["lname"].value.trim();
    let password = document.forms[myForm]["password"].value;
    let dob = documenty.forms[myForm]["dob"].value;

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
});