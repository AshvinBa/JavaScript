const url = fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min`);
// ?q=${city}&appid=${API_KEY}&units=metric`);

url.then((value1) => {
    console.log(value1.status);
    console.log(value1.json());
})


// const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;

// const form = document.querySelector("form");
// const search = document.querySelector("#search");
// const weather = document.querySelector("#weather");


// const getWeather = async(city) => {

    //     const url = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min?q=${city}&appid=${API_KEY}&units=metric`;

//     // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
//     const response = await fetch(url);
//     console.log(response);
// }

// form.addEventListener(
//     "submit",
//     function(event)
//     {
//         console.log(search.value)
//         event.preventDefault(); /* Stop the reloading of the form. */
//     }
// )


// document.getElementById("weatherForm").addEventListener('submit', function(event) {
//     event.preventDefault();
//     display();
// });


// function display() {
//     const Scity = document.getElementById("search").value; // Use .value to get the input value
//     console.log("display");
//     const material = CitySearch(Scity);
//     document.getElementById("weather").innerHTML = material;
// }


// function CitySearch(Scity) {
//     for (let i = 0; i < weather.length; i++) {
//         if (weather[i].city.toLocaleLowerCase() === Scity.toLocaleLowerCase()) {
//             console.log("hi")
//             return `
//                 <div>
//                 <img id="img" src="${weather[i].image}" alt="Weather icon">
//                 </div>
//                 <div>
//                     <h2>${weather[i].temp}</h2>
//                     <h4>${weather[i].wea}</h4>
//                 </div>`
//                 ;
//         }
//     }
//     return "City not found.";
// }







































// // // const API = `https://api.openweathermap.org/data/2.5/weather? 
// // // q=${city}&appid=${API_KEY}&units=metric`;

// // // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;



// // // const API_KEY = '123456789abcdef'; // Replace with your actual OpenWeatherMap API key
// // // const form = document.querySelector('form');
// // // const search = document.querySelector('#search');
// // // const weather = document.querySelector('#weather');

// // // const getWeather = async (city) => {
// // //     weather.innerHTML = '<h2>Loading...</h2>';
// // //     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

// // //     try {
// // //         const response = await fetch(url);
// // //         if (!response.ok) {
// // //             throw new Error(`HTTP error! status: ${response.status}`);
// // //         }
// // //         const data = await response.json();
// // //         return showWeather(data);
// // //     } catch (error) {
// // //         weather.innerHTML = `<h2>Error: ${error.message}</h2>`;
// // //     }
// // // };

// // // const showWeather = (data) => {
// // //     if (data.cod === '404') {
// // //         weather.innerHTML = '<h2>City Not Found</h2>';
// // //         return;
// // //     }

// // //     weather.innerHTML = `
// // //         <div>
// // //             <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">
// // //         </div>
// // //         <div>
// // //             <h2>${data.main.temp} ℃</h2>
// // //             <h4>${data.weather[0].main}</h4>
// // //         </div>
// // //     `;
// // // };

// // // form.addEventListener('submit', function (event) {
// // //     getWeather(search.value);
// // //     event.preventDefault();
// // // });




// // // const API_KEY = '3265874a2c77ae4a04bb96236a642d2f';
// // // const form = document.querySelector('form');
// // // const search = document.querySelector('#search');
// // // const weather = document.querySelector('#weather');

// // // const getWeather = async (city) => {
// // //     weather.innerHTML = '<h2>Loading...</h2>';
// // //     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

// // //     try {
// // //         const response = await fetch(url);
// // //         if (!response.ok) {
// // //             throw new Error(`HTTP error! status: ${response.status}`);
// // //         }
// // //         const data = await response.json();
// // //         return showWeather(data);
// // //     } catch (error) {
// // //         weather.innerHTML = `<h2>Error: ${error.message}</h2>`;
// // //     }
// // // };

// // // const showWeather = (data) => {
// // //     if (data.cod === '404') {
// // //         weather.innerHTML = '<h2>City Not Found</h2>';
// // //         return;
// // //     }

// // //     weather.innerHTML = `
// // //         <div>
// // //             <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">
// // //         </div>
// // //         <div>
// // //             <h2>${data.main.temp} ℃</h2>
// // //             <h4>${data.weather[0].main}</h4>
// // //         </div>
// // //     `;
// // // };

// // // form.addEventListener('submit', function (event) {
// // //     getWeather(search.value);
// // //     event.preventDefault();
// // // });





// /*
// const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
// const form = document.querySelector("form")
// const search = document.querySelector("#search")
// const weather = document.querySelector("#weather")
//     // const API = `https://api.openweathermap.org/data/2.5/weather?
//     // q=${city}&appid=${API_KEY}&units=metric`
//     // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
// const getWeather = async(city) => {
//     weather.innerHTML = `<h2> Loading... <h2>`
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//     const response = await fetch(url);
//     const data = await response.json()
//     return showWeather(data)
// }

// const showWeather = (data) => {
//     if (data.cod == "404") {
//         weather.innerHTML = `<h2> City Not Found <h2>`
//         return;
//     }
//     weather.innerHTML = `
//         <div>
//             <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
//         </div>
//         <div>
//             <h2>${data.main.temp} ℃</h2>
//             <h4> ${data.weather[0].main} </h4>
//         </div>
//     `
// }

// form.addEventListener(
//     "submit",
//     function(event) {
//         getWeather(search.value)
//         event.preventDefault();
//     }
// )
// */