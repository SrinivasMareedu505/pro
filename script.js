function validateForm() {
    var Fname = document.getElementById("Fname").value.trim();
    var Lname = document.getElementById("Lname").value.trim();
    var Email = document.getElementById("Email").value.trim();
    var Username = document.getElementById("Username").value.trim();
    var Password = document.getElementById("Password").value;
    var Male = document.getElementById("Male").checked;
    var Female = document.getElementById("Female").checked; 
    if (Fname === "") {
        alert("First Name cannot be empty.");
        return false;
    }
    if (Lname === "") {
        alert("Last Name cannot be empty.");
        return false;
}
    if (Username === "") {
        alert("Username cannot be if (!nameRegex.test(Fname)) {
        alert("First Name must contain only letters.");
        return false;
    }empty.");
        return false;
    }
    if (Password === "") {
        alert("Password cannot be empty.");
        return false;
    }
    if (Password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }
    if (!Male && !Female) {
        alert("Please select a Gender.");
        return false;
    }
    alert("Registration successful! Form will now submit.");
    return true;
}
