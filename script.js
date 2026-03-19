document.getElementById("jobForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let position = document.getElementById("position").value;

    document.getElementById("output").innerText =
        "✅ Application submitted successfully, " + firstName + 
        "! You applied for " + position + ".";
});
