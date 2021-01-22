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
isValidFirstName = (fistName) => {
    const NAME_REGEX = new RegExp(`^[A-Z]{1}[a-zA-Z]{2,}$`);
    if (NAME_REGEX.test(fistName)) {
        console.log('first name is valid ');
    }
    else {
        console.log('first name is not valid');
    }
}
/**
 * isValidlastName valid user last name
 */
isValidLastName = (lastName) => {
    const NAME_REGEX = new RegExp(`^[A-Z]{1}[a-zA-Z]{2,}$`);
    if (NAME_REGEX.test(lastName)) {
        console.log('last name is valid ');
    }
    else {
        console.log('last name is not valid');
    }
}
/**
 * isValidEmail valid user Email id
 */
isValidEmailId = (emailID) => {
    const EMAIL_REGEX =  new RegExp(`^([a-zA-Z0-9]+[+_*.-]?[a-zA-Z0-9]+)+@[a-zA-Z0-9-]+.[a-z]{2,3}.[a-z]{2,3}$`);
    if (EMAIL_REGEX.test(emailID)) {
        console.log('email id  is valid ');
    }
    else {
        console.log('email id is not valid');
    }
}

console.log('Welcome to User Registration Program');
const firstName = prompt('enter first name :- ');
isValidFirstName(firstName);
const lastName = prompt('enter last name :- ');
isValidLastName(lastName);
const emailID = prompt('enter email id :- ');
isValidEmailId(emailID);