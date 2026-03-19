document.getElementById("jobForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get values
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let position = document.getElementById("position").value.trim();

    let output = document.getElementById("output");

    // Validation
    if (firstName === "" || lastName === "" || email === "" || phone === "" || position === "") {
        output.style.color = "red";
        output.innerText = "❌ Please fill in all required fields!";
        return;
    }

    // Success Message (based on your tutorial)
    output.style.color = "green";
    output.innerText =
        "✅ Application submitted successfully, " + firstName + " " + lastName +
        "! You applied for " + position +
        ". We will contact you at " + email + ".";

    // Reset form
    document.getElementById("jobForm").reset();
});
