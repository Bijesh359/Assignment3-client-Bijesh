function validateForm() {
    var firstname = document.getElementById('firstname').value.trim();
    var lastname = document.getElementById('lastname').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var date = document.getElementById('date').value.trim();
    var message = document.getElementById('message').value.trim();

    // First name should be at least 5 characters
    if (firstname.length < 5) {
        showAlert("First name should be at least 5 characters", 'error');
        return false;
    }

    // Last name should be at least 5 characters
    if (lastname.length < 5) {
        showAlert("Last name should be at least 5 characters", 'error');
        return false;
    }

    // Email should contain '@'
    if (!email.includes('@')) {
        showAlert("Invalid email address", 'error');
        return false;
    }

    // Phone must contain 10 digits
    if (!phone.match(/^\d{10}$/)) {
        showAlert("Phone must contain 10 digits", 'error');
        return false;
    }

    // Date must have the appropriate format (dd/mm/yy)
    if (!date.match(/^\d{2}\/\d{2}\/\d{2}$/)) {
        showAlert("Date must be in the format dd/mm/yy", 'error');
        return false;
    }

    // Message must be of at least 50 alphabets
    if (message.length < 50) {
        showAlert("Message must be at least 50 characters long", 'error');
        return false;
    }

    return true; // Form validated successfully
}

function showAlert(message, type) {
    var alertBox = document.createElement('div');
    alertBox.textContent = message;
    alertBox.classList.add('alert');
    if (type === 'error') {
        alertBox.classList.add('alert-error');
    } else if (type === 'success') {
        alertBox.classList.add('alert-success');
    }
    document.body.appendChild(alertBox);
    setTimeout(function() {
        alertBox.remove();
    }, 3000)
}