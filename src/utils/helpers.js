//function to validate email using REGEX
export default function validateEmail(email) {
    const validate = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return validate.test(String(email));
}