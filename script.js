document.getElementById("jobForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get values
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let position = document.getElementById("position").value.trim();

    let interest = document.getElementById("interest").value;
    let relocate = document.getElementById("relocate").value;
    let availability = document.getElementById("availability").value;

    let output = document.getElementById("output");

    // Validation
    if (
        firstName === "" || lastName === "" || email === "" || phone === "" ||
        position === "" || interest === "" || relocate === "" || availability === ""
    ) {
        output.className = "text-danger text-center mt-3";
        output.innerText = "❌ Please fill in all required fields!";
        return;
    }

    // Email check
    if (!email.includes("@")) {
        output.className = "text-danger text-center mt-3";
        output.innerText = "❌ Please enter a valid email!";
        return;
    }

    // Success Message
    output.className = "text-success text-center mt-3";
    output.innerText =
        "✅ Application submitted successfully, " + firstName + " " + lastName +
        "! You applied for " + position +
        " (" + interest + "). Relocation: " + relocate +
        ". Available from: " + availability +
        ". We will contact you at " + email + ".";

    // Reset form
    document.getElementById("jobForm").reset();
});
