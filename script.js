document.getElementById('contactForm').addEventListener('submit', function(event) {
    // 1. Prevent the default browser form submission behavior
    event.preventDefault();

    // 2. Grab DOM elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');

    // 3. Reset previous error states & success messages
    let isValid = true;
    resetErrors([nameInput, emailInput, messageInput], [nameError, emailError, messageError]);
    successMessage.classList.add('hidden');

    // 4. Validate Name (Cannot be empty)
    if (nameInput.value.trim() === "") {
        showError(nameInput, nameError, "Name is required.");
        isValid = false;
    }

    // 5. Validate Email (Cannot be empty & must match corrected regex pattern)
    const emailValue = emailInput.value.trim();
    // FIXED: Changed [a-zA-Z0-0...] to [a-zA-Z0-9...] to correctly allow all numbers
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (emailValue === "") {
        showError(emailInput, emailError, "Email is required.");
        isValid = false;
    } else if (!emailRegex.test(emailValue)) {
        showError(emailInput, emailError, "Please enter a valid email address.");
        isValid = false;
    }

    // 6. Validate Message (Cannot be empty)
    if (messageInput.value.trim() === "") {
        showError(messageInput, messageError, "Message cannot be empty.");
        isValid = false;
    }

    // 7. If all validations pass, show success routine
    if (isValid) {
        successMessage.classList.remove('hidden');
        document.getElementById('contactForm').reset(); // Clear form inputs
    }
});

// Helper function to show errors visually
function showError(inputElement, errorElement, message) {
    inputElement.classList.add('invalid');
    errorElement.textContent = message;
}

// Helper function to clear previous styling and text
function resetErrors(inputs, errors) {
    inputs.forEach(input => input.classList.remove('invalid'));
    errors.forEach(error => error.textContent = "");
}