document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Clear previous error messages
        const errorElements = document.querySelectorAll(".error");
        errorElements.forEach(el => el.textContent = "");

        // Get form values
        const firstname = document.getElementById("firstname").value;
        const lastname = document.getElementById("lastname").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;
        
        let isValid = true;

        // Validate the required fields
        if (!firstname) {
            showError("firstname", "Firstname is required.");
            isValid = false;
        }
        if (!lastname) {
            showError("lastname", "Lastname is required.");
            isValid = false;
        }
        if(!email){
            showError("email", "Email is required.")
        }
        else if (!email.value.endswith('@gmail.com')){
            showError("email","Please end with @gmail.com");
            isValid = false;
        }
        if (!phone) {
            showError("phone", "Phone number is required.");
            isValid = false;
        }else if (phone.length > 14) {
            showError("phone", "Phone number must be less than 15 digits.");
            isValid = false;
        }
        if (!message) {
            showError("message", "Message is required.");
            isValid = false;
        }

        // If validation passes, simulate form submission
        if (isValid) {
            alert("Thank you for contacting us, " + username + "! Your message has been sent.");
            form.reset();
        }
    });

    function showError(fieldId, errorMessage) {
        let errorElement = document.getElementById(fieldId + "Error");
        if (!errorElement) {
            errorElement = document.createElement("span");
            errorElement.id = fieldId + "Error";
            errorElement.className = "error";
            const field = document.getElementById(fieldId);
            field.parentNode.insertBefore(errorElement, field.nextSibling);
        }
        errorElement.textContent = errorMessage;
    }
});