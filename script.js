const app = document.getElementById("app");
const form = document.createElement("form");

const createInputField = (labelText, inputType, inputName) => {
    const label = document.createElement("label");
    label.textContent = labelText;

    const input = document.createElement("input");
    input.type = inputType;
    input.name = inputName;
    input.required = true;

    const error = document.createElement("div");
    error.className = "error";

    return { label, input, error };
};

const firstName = createInputField("First Name:", "text", "firstName");
const lastName = createInputField("Last Name:", "text", "lastName");
const email = createInputField("Email:", "email", "email");
const password = createInputField("Password:", "password", "password");
const confirmPassword = createInputField("Confirm Password:", "password", "confirmPassword");

const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Register";

[firstName, lastName, email, password, confirmPassword].forEach(field => {
    form.appendChild(field.label);
    form.appendChild(field.input);
    form.appendChild(field.error);
});

form.appendChild(submitButton);
app.appendChild(form);

form.addEventListener("submit", function(event) {
    let isValid = true;

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|ph)$/;

    if (!emailPattern.test(email.input.value)) {
        isValid = false;
        email.error.textContent = "Please enter a valid email address in the format: name@domain.com or name@domain.com.ph";
    } else {
        email.error.textContent = "";
    }

    if (password.input.value !== confirmPassword.input.value) {
        isValid = false;
        confirmPassword.error.textContent = "Passwords do not match.";
    } else {
        confirmPassword.error.textContent = "";
    }

    if (!isValid) {
        event.preventDefault();
    } else {
        event.preventDefault(); 
        const successMessage = document.createElement("div");
        successMessage.textContent = "Successfully registered!";
        

        if (app.querySelector(".success-message")) {
            app.querySelector(".success-message").remove();
        }

        successMessage.className = "success-message";
        form.reset(); 
        app.appendChild(successMessage);
    }
});
