const userId = document.querySelector("#user-id");
const pw1 = document.querySelector("#user-pw1");
const pw2 = document.querySelector("#user-pw2");


userId.onchange = checkId;
pw1.onchange = checkPw;

// Check user id to meet required...
function checkId() {
    if (userId.value.length < 4 || userId.value.length > 15) {
        alert("Please type the charaters in aphbets and numbers within 4~15 letters");
        //return to the id field.
        userId.select();
    }
}

// Check password to meet required...
function checkPw() {
    if (pw1.value.length < 8) {
        alert("Password must be more than 8 charaters.")
        //after alert, blank the pw
        pw1.value = "";
        //return to the pw field.
        pw1.focus();
    }
}


// Compare with the new password
function comparePw() {
    if (pw1.value != pw2.value) {
        alert("Your password does not match!");
        pw2.value = "";
        pw2.focus();
    }
}
