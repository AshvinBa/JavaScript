const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*+-*/";

// selectors
const passBox = document.getElementsByTagName("pass-char");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

const getRandomData = (dataSet) => {    /* To get the random data */
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}


const generatePassword = (password = "") => {
    if(upperInput.checked)
    {
        password += getRandomData(upperSet);
    }
    if(lowerInput.checked)
    {
        password += getRandomData(lowerSet);
    }
    if(numberInput.checked)
    {
        password += getRandomData(numberSet);
    }
    if(symbolInput.checked)
    {
        password += getRandomData(symbolSet);
    }
    if(password.length < totalChar.value)
    {
        return generatePassword(password);
    }
    document.getElementById("pass-box").innerText= truncateString(password,totalChar.value);
}

document.getElementById("btn").addEventListener(
    "click",
    function(){
        generatePassword();
    }
)
generatePassword();

function truncateString(str,num)
{
    if(str.length > num){
        let subStr = str.substring(0,num);   /* It gives the size of password as per decided value. */
        return subStr;
    }
    else
    {
        return str;
    }
}
generatePassword();