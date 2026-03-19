document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("output").innerText =
        "✅ Thank you " + name + "! Message sent.";
});
