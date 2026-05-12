function showMessage() {
    document.getElementById("message").innerHTML =
    "Welcome to my portfolio website!";
}

function sendMessage() {

    let name = document.getElementById("name").value;

    if (name === "") {
        alert("Please enter your name");
        return false;
    }

    document.getElementById("response").innerHTML =
    "Thank you " + name + ", I will get back to you.";

    return false;
}