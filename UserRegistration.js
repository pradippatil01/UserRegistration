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

console.log('Welcome to User Registration Program');
const firstName = prompt('enter first name :- ');
isValidFirstName(firstName);
const lastName = prompt('enter last name :- ');
isValidLastName(lastName);