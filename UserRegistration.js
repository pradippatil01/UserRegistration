/**************************************************************************
*   Excecution : 1. default Node 
*   Purpose    : Userregistration using Javascript
*   @description 
*   @author    : Pradip R patil (BridgeLabz)
*   @file      : userRegistration.js
*   @version   : v15.6.0
***************************************************************************/
const prompt = require('prompt-sync')();
const NAME_REGEX = new RegExp(`^[A-Z]{1}[a-zA-Z]{2,}$`);
var validEmailSample = [
    "abc@yahoo.com", "abc-100@yahoo.com", "abc.100@yahoo.com",
    "abc111@abc.com", "abc*100@abc.net", "abc.100@abc.com.au",
    "abc@1.com", "abc@gmail.com.com", "abc+100@gmail.com"];

var invalidEmailSample = [
    "abc", "abc@.com.my", "abc123@gmail.a",
    "abc123@.com", "abc123@.com.com", ".abc@abc.com",
    "abc()*@gmail.com", "abc@%*.com", "abc.@gmail.com",
    "abc@abc@gmail.com", "abc@gmail.com.1a", "abc@gmail.com.aa.au"];

/**
 * isValidFirstName valid user first name
 */
isValidFirstName = (FIRSTNAME) => {
    if (NAME_REGEX.test(FIRSTNAME)) {
        console.log('first name is valid ');
    }
    else {
        console.log('first name is not valid');
    }
}
/**
 * isValidlastName valid user last name
 */
isValidLastName = (LASTNAME) => {
    if (NAME_REGEX.test(LASTNAME)) {
        console.log('last name is valid ');
    }
    else {
        console.log('last name is not valid');
    }
}
/**
 * isValidEmail valid user Email id
 */
isValidEmailId = (EMAIL_ID) => {
    const EMAIL_REGEX = new RegExp(`^([A-Za-z0-9\\d-_*\\+]+)(\\.[A-Za-z\\d-_]+)?@([a-zA-Z\\d]+)\\.([a-zA-Z]{2,4})(\\.[A-Za-z]{2,4})?$`);
    if (EMAIL_REGEX.test(EMAIL_ID)) {
        console.log('email id  is valid ');
    }
    else {
        console.log('email id is not valid');
    }
}

/**
 * isValidMobileNumber valid user Mobile number
 */
isValidMobileNumber = (MOBILE_NUMBER) => {
    const MOBILE_REGEX = new RegExp(`^(\\+?\\d{1,3})[ ]([0-9]{10})$`);
    if (MOBILE_REGEX.test(MOBILE_NUMBER)) {
        console.log('mobile number  is valid ');
    }
    else {
        console.log('mobile number is not valid');
    }
}

/**
 * isValidPassword valid password
 */
isValidPassword = (PASSWORD) => {
    const PWD_REGEX = new RegExp(`^(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&+=])(?=.*[A-Z]).{8,}$`);
    if (PWD_REGEX.test(PASSWORD)) {
        console.log('password is valid ');
    }
    else {
        console.log('password is not valid');
    }
}

checkEmail = (emailSample) => {
    for (let i = 0; i < emailSample.length; i++) {
        let email_ID = emailSample[i];
        isValidEmailId(email_ID);
    }
}

console.log('Welcome to User Registration Program');
const FIRSTNAME = prompt('enter first name :- ');
isValidFirstName(FIRSTNAME);
const LASTNAME = prompt('enter last name :- ');
isValidLastName(LASTNAME);
const MOBILE_NUMBER = prompt('enter mobile number :- ');
isValidMobileNumber(MOBILE_NUMBER);
const PASSWORD = prompt('enter password :- ');
isValidPassword(PASSWORD);
const EMAIL_ID = prompt('enter email id :- ');
isValidEmailId(EMAIL_ID);
/**
 * check email Sample
 */
checkEmail(validEmailSample);
checkEmail(invalidEmailSample);
