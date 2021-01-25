const usr = require('./UserRegistration');

mainFunction = () => {
    console.log('Welcome to User Registration Program');
    usr.isValidFirstName();
    usr.isValidLastName();
    usr.isValidMobileNumber();
    usr.isValidPassword();
    usr.isValidEmailId();

    const validEmailSample = [
        "abc-100@yahoo.com", "abc.100@yahoo.com", "abc@yahoo.com",
        "abc111@abc.com", "abc*100@abc.net", "abc.100@abc.com.au",
        "abc@1.com", "abc@gmail.com.com", "abc+100@gmail.com"];

    const invalidEmailSample = [
        "abc", "abc@.com.my", "abc123@gmail.a",
        "abc123@.com", "abc123@.com.com", ".abc@abc.com",
        "abc()*@gmail.com", "abc@%*.com", "abc.@gmail.com",
        "abc@abc@gmail.com", "abc@gmail.com.1a", "abc@gmail.com.aa.au"];
    usr.checkEmail(validEmailSample);
    usr.checkEmail(invalidEmailSample);
}
mainFunction();