const endDate = "23 April 2024 5:55 PM";

document.getElementById("end-date").innerText=endDate;

const inputs = document.querySelectorAll("input");

function clock()
{
    const end = new Date(endDate);
    const now = new Date();
    const diff = ( end - now ) / 1000;
    console.log( diff );
    
    if(diff<0)
    {
        document.querySelector(".messa").innerHTML="Welcome";
        return;
    }
    // convert into days
    inputs[0].value = Math.floor( diff / 3600 / 24);
    // convert into Hours
    inputs[1].value = Math.floor( diff / 3600) % 24;
    // convert into Minutes
    inputs[2].value = Math.floor( diff / 60) % 60;
    // convert into seconds
    inputs[3].value = Math.floor( diff % 60);
}

clock();

setInterval(()=> {clock()},1000)
/* Function for second calculation. */



/*

1 day = 24 hrs
1 hr = 60 mins
60 min = 3600 sec

*/