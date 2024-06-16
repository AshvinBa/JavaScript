let url = fetch("https://api.data.gov.sg/v1/environment/air-temperature");

url.then((value1) => {
    console.log(value1.status)
    console.log(value1.ok)
    // console.log(value1.text());
    return value1.json();
})
.then((value2) => {
    console.log(value2);
})
