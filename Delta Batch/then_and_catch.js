let h1 = document.querySelector('h1');

function changeColor(color,delay)
{
    return new Promise((resolve , reject) => {
        setTimeout (() =>{
            h1.style.color = color;
            resolve("Color Changed");
        },delay)
    });
}

    changeColor("red",2000)
    .then(() =>  {
    console.log("Color change to blue");
    return changeColor("blue",1000);
    })

    .then(() =>  {
    console.log("Color change to blue");
    return changeColor("green",1000);
    })

   .then(() =>  {
    console.log("Color change to blue");
    return changeColor("orange",1000);
   })

   .then(() =>  {
    console.log("Color change to blue");
    return changeColor("yellow",1000);
   })
