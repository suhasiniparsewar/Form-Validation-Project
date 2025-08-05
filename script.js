function validateName() {
  const name = document.getElementById('name').value.trim();
  const error = document.getElementById('nameError');
  if (name.length < 5) {
    error.textContent = "Name must be at least 5 characters.";
    return false;
  }
  error.textContent = "";
  return true;
}

function validateEmail() {
  const email = document.getElementById('email').value.trim();
  const error = document.getElementById('emailError');
  if (!email.includes('@')) {
    error.textContent = "Enter a valid email address.";
    return false;
  }
  error.textContent = "";
  return true;
}

function validatePhone() {
  const phone = document.getElementById('phone').value.trim();
  const error = document.getElementById('phoneError');
  if (!/^[0-9]{10}$/.test(phone) || phone === '1234567890') {
    error.textContent = "Enter a valid 10-digit phone number.";
    return false;
  }
  error.textContent = "";
  return true;
}

function validatePassword() {
  const password = document.getElementById('password').value;
  const name = document.getElementById('name').value.trim();
  const error = document.getElementById('passwordError');
  if (password.length < 8 || password.toLowerCase() === 'password' || password === name) {
    error.textContent = "Password is not strong.";
    return false;
  }
  error.textContent = "";
  return true;
}

function validateConfirmPassword() {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const error = document.getElementById('confirmPasswordError');
  if (password !== confirmPassword) {
    error.textContent = "Passwords do not match.";
    return false;
  }
  error.textContent = "";
  return true;
}

function validateForm() {
  const validName = validateName();
  const validEmail = validateEmail();
  const validPhone = validatePhone();
  const validPassword = validatePassword();
  const validConfirm = validateConfirmPassword();
  return validName && validEmail && validPhone && validPassword && validConfirm;
}