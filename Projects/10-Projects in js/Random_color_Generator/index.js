var arr=[];
const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#"+randomNumber.toString(16);
    /* To  get element in hexa decimal form we use toString(16) in the function. */
    document.body.style.backgroundColor = randomCode;
    document.querySelector("#color-code").innerHTML = randomCode;
    document.getElementById("btn").style.backgroundColor = randomCode;
    arr.push(randomCode);
}

document.getElementById("btn").addEventListener(
    "click",getColor
)

getColor();