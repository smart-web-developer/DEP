document.getElementById('reservationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    let isValid = true;

    // Validate Name
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        isValid = false;
        showError('name-error', 'Name is required');
    } else {
        hideError('name-error');
    }

    // Validate Email
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        isValid = false;
        showError('email-error', 'Please enter a valid email address');
    } else {
        hideError('email-error');
    }

    // Validate Guests
    const guests = document.getElementById('guests').value;
    if (guests === '' || guests <= 0) {
        isValid = false;
        showError('guests-error', 'Number of guests must be at least 1');
    } else {
        hideError('guests-error');
    }

    // Validate Date
    const date = document.getElementById('date').value;
    if (date === '') {
        isValid = false;
        showError('date-error', 'Reservation date is required');
    } else {
        hideError('date-error');
    }

    // If all fields are valid, show success message (or process the form)
    if (isValid) {
        alert('Reservation submitted successfully!');
    }
});

function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.style.display = 'block';
    errorElement.textContent = message;
}

function hideError(id) {
    const errorElement = document.getElementById(id);
    errorElement.style.display = 'none';
}
