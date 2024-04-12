function generatePassword(length , includeLowerCase , includeUpperCase , includeNumbers , includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";
    
    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowercaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";
    if(length <= 0)
        return `(password must be at least 1`;
    if(allowedChars.length == 0)
        return `(at least 1 set of characters needs to be selected)`;
    for(let i=0; i<length; i++){
        let randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}


let passwordLength;
let includeLowerCase = false;
let includeUpperCase = false;
let includeNumbers = false;
let includeSymbols = false;




let checkboxUpp = document.getElementById("includeUppLetters");
let checkboxLow = document.getElementById("includeLowLetters");
let checkboxNum = document.getElementById("includeNumLetters");
let checkboxSymbols = document.getElementById("includeSymLetters");

checkboxUpp.addEventListener("change", () => {
    if(checkboxUpp.checked ){
        includeUpperCase = true;
        console.log(includeUpperCase);
    }
})

checkboxLow.addEventListener("change", () => {
    if(checkboxLow.checked ){
        includeLowerCase = true;
        console(includeLowerCase);
    }

})

checkboxNum.addEventListener("change", () => {
    if(checkboxNum.checked ){
        includeNumbers = true;
        console.log(includeNumbers);
    }

})

checkboxSymbols.addEventListener("change", () => {
    if(checkboxSymbols.checked ){
        includeSymbols = true;
        console.log(includeSymbols);
    }
})
let password;

function generatePasswordButt(){
    passwordLength = document.getElementById("passLength").value;
    length = passwordLength;
    password = generatePassword(
        passwordLength
         , includeLowerCase
          , includeUpperCase
           , includeNumbers
            , includeSymbols);
    const newPass = document.getElementById('newPass').textContent = password;
}







