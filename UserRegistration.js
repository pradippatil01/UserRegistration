/**************************************************************************
*   Excecution : 1. default Node 
*   Purpose    : Userregistration using Javascript
*   @description 
*   @author    : Pradip R patil (BridgeLabz)
*   @file      : userRegistration.js
*   @version   : v15.6.0
***************************************************************************/

/**
 * @param {firstName} holds input provided by user for firstName;
 */
const prompt = require('prompt-sync')();

/**
 * isValidFirstName valid user first name
 */
isValidFirstName = (FIRSTNAME) => {
    const NAME_REGEX = new RegExp(`^[A-Z]{1}[a-zA-Z]{2,}$`);
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
    const NAME_REGEX = new RegExp(`^[A-Z]{1}[a-zA-Z]{2,}$`);
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
    const EMAIL_REGEX =  new RegExp(`^([a-zA-Z0-9]+[+_*.-]?[a-zA-Z0-9]+)+@[a-zA-Z0-9-]+.[a-z]{2,3}.[a-z]{2,3}$`);
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
    const MOBILE_REGEX =  new RegExp(`^(\\+?\\d{1,3})[ ]([0-9]{10})$`);
    if (MOBILE_REGEX.test(MOBILE_NUMBER)) {
        console.log('mobile number  is valid ');
    }
    else {
        console.log('mobile number is not valid');
    }
}

console.log('Welcome to User Registration Program');
const FIRSTNAME = prompt('enter first name :- ');
isValidFirstName(FIRSTNAME);
const LASTNAME = prompt('enter last name :- ');
isValidLastName(LASTNAME);
const EMAIL_ID = prompt('enter email id :- ');
isValidEmailId(EMAIL_ID);
const MOBILE_NUMBER = prompt('enter mobile number :- ');
isValidMobileNumber(MOBILE_NUMBER);