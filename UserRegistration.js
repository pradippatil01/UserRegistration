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
const EMAIL_REGEX = new RegExp(`^([A-Za-z0-9\\d-_*\\+]+)(\\.[A-Za-z\\d-_]+)?@([a-zA-Z\\d]+)\\.([a-zA-Z]{2,4})(\\.[A-Za-z]{2,4})?$`);
const MOBILE_REGEX = new RegExp(`^(\\+?\\d{1,3})[ ]([0-9]{10})$`);
const PWD_REGEX = new RegExp(`^(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&+=])(?=.*[A-Z]).{8,}$`);


class UserRegistration {
    /**
     * isValidFirstName valid user first name
     */
    isValidFirstName = () => {
        const FIRSTNAME = prompt('enter first name :- ');
        if (NAME_REGEX.test(FIRSTNAME)) {
            console.log('first name is valid ');
        }
        else {
            console.log('enter valid first name :- ');
            this.isValidFirstName();
        }
    }
    /**
     * isValidlastName valid user last name
     */
    isValidLastName = () => {
        const LASTNAME = prompt('enter last name :- ');
        if (NAME_REGEX.test(LASTNAME)) {
            console.log('last name is valid ');
        }
        else {
            console.log('enter valid last name :- ');
            this.isValidLastName();
        }
    }
    /**
     * isValidEmail valid user Email id
     */
    isValidEmailId = () => {
        const EMAIL_ID = prompt('enter email id :- ');
        if (EMAIL_REGEX.test(EMAIL_ID)) {
            console.log('email id  is valid ');
        }
        else {
            console.log('enter valid email id :- ');
            this.isValidEmailId();

        }
    }
    /**
     * isValidMobileNumber valid user Mobile number
     */
    isValidMobileNumber = () => {
        const MOBILE_NUMBER = prompt('enter mobile number :- ');
        if (MOBILE_REGEX.test(MOBILE_NUMBER)) {
            console.log('mobile number  is valid ');
        }
        else {
            console.log('enter valid mobile number :- ');
            this.isValidMobileNumber();
        }
    }

    /**
     * isValidPassword valid password
     */
    isValidPassword = () => {
        const PASSWORD = prompt('enter password :- ');
        if (PWD_REGEX.test(PASSWORD)) {
            console.log('password is valid ');
        }
        else {
            console.log('enter valid password :- ');
            this.isValidPassword();

        }
    }

    /**
     * check email sample
     */
    checkEmail = (emailSample) => {
        for (let i = 0; i < emailSample.length; i++) {
            let email_ID = emailSample[i];
            if (EMAIL_REGEX.test(email_ID)) {
                console.log('email id  is valid ');
            }
            else {
                console.log('email id is not valid ')
            }
        }
    }
}
module.exports = new UserRegistration;
