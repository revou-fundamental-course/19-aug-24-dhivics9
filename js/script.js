// Personalize the welcome message
document.addEventListener("DOMContentLoaded", function() {
    let userName = prompt("Please enter your name:");
    if (userName) {
        document.getElementById("welcome-message").textContent = `Hi ${userName}, Welcome To Website`;
    }
});

// Form validation and displaying the submitted data
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();
    
    // Validate form fields
    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Please fill in all fields!");
        return; // Stop execution if validation fails
    }

    // Display the submitted data
    document.getElementById("submitted-data").innerHTML = `
        <h3>Submitted Data</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;
});
