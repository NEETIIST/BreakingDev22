const Validator = require("validator");

const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};
    // Convert empty fields to an empty string so we can use validator functions
    data.username = !isEmpty(data.username) ? data.username : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password_confirmation = !isEmpty(data.password_confirmation) ? data.password_confirmation : "";
    // Username checks
    if (Validator.isEmpty(data.username)) {
        errors.username = "Username is required";
    } else if (!Validator.isLength(data.username, { min: 5, max: 30 })) {
        errors.username = "Username must have at least 5 characters";
    }  else if (!Validator.isAlphanumeric(data.username, 'pt-PT')) {  // Check if it makes sense to use accents
        errors.username = "Username must have only numbers and letters please";
    }
    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    if (Validator.isEmpty(data.password_confirmation)) {
        errors.password_confirmation = "Confirm password field is required";
    }
    if (!Validator.isLength(data.password, { min: 6, max: 128 })) {
        errors.password = "Password must be at least 6 characters";
    }
    if (!Validator.equals(data.password, data.password_confirmation)) {
        errors.password_confirmation = "Passwords must match";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};
