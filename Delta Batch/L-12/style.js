// console.log("Hellow");
/*
async function greet()
{
    // throw "randome error";
    return "Hello";
}

greet()
    .then((result) => {
        console.log("promice was resolved. ");
    })
    .catch((err) => {
        console.log("promice was rejected. ");
    });


function getNum()
{
    return new Promise((resolve , reject) =>
    {
        setTimeout(() =>
        {
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
}    

async function demo()
{
    await getNum(); // Take few minutes for execution 
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
} 
demo();
*/

/*
let h1=document.querySelector('h1');
function changeColor(color1,time)
{
    return new Promise((resolve,reject) =>{
    setTimeout(() => {
        h1.style.color=color1;
        resolve("color change");
    },time);
    });
}

async function goto()
{
    await changeColor("orange",1000);
    await changeColor("green",1000);
    await changeColor("red",1000);
    await changeColor("blue",1000);
    changeColor("yellow",1000);
}
goto();
*/

/*
let h1=document.querySelector('h1');
function changeColor(color1,time)
{
    return new Promise((resolve,reject) =>{
    setTimeout(() => {
        let num = Math.floor(Math.random * 5)+1;
        if(num>1)
        {
            reject("promise rejected.");
        }
        h1.style.color=color1;
        resolve("color change");
    },time);
    });
}

async function goto()
{
    try{
    await changeColor("orange",1000);
    await changeColor("green",1000);
    await changeColor("red",1000);
    await changeColor("blue",1000);
    }
    catch(err)
    {
        console.log(err);
    }
}
goto();
*/

/*

let heart = document.getElementById("bi");
function changeColor()
{
    heart.style.color = "red";
}

*/

/*

let jsonRes = '{"fact":"ashvin","length":6}';
console.log(JSON.parse(jsonRes));
let mayName = {
    name : "Ashvin",
    marks : 95
} 
console.log(JSON.stringify(mayName));

*/


/*

let body ={
    "message": "https://images.dog.ceo/breeds/poodle-medium/WhatsApp_Image_2022-08-06_at_4.48.38_PM.jpg",
    "status": "success"
}

console.log(JSON.stringify(body));
*/


/* API FETCHING OPERATION. */
/*
1) Program - 1: 
let url = "https://dog.ceo/api/breeds/image/random";

fetch(url)
.then((res)=>{
    console.log(res);
    res.json().then((data)=>{
        console.log(res);
    })
})
.catch((err)=>{
    console.log("ERROR",err);
})
*/

/*
let url = "https://dog.ceo/api/breeds/image/random";

fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log("data1 = ",data.fact);
        return fetch(url);
    })
    .then((res) => {
        return res.json();
    })
    .then((data2) => {
        console.log("data2 = ",data2.fact);
    })
    .catch((ree) => {
        console.log("Error - ",ree);
    });

    console.log("I am Not Happy.");
*/

// 2) async function 


let url = "https://dog.ceo/api/breeds/image/random";

async function getfacts()
{
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
    }
    catch(e)
    {
        console.log("error - ",e);
    }
    console.log("bye");
}

getfacts();













