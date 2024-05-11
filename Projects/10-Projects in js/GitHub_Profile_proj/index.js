// // const arr = 
// // [
// //     {
// //         'user_name' : 'Ashvin',
// //         'name' : 'Ashvin Sudhir Bari',
// //         'Bio' : 'Skilled in DSA and Learning MERN Stack',
// //         'img' : 'ashpic.jpeg',
// //         'f1' : '3000',
// //         'f2' : '100',
// //         'f3' : '26 repo',
// //         'r1' : 'HTML',
// //         'r2' : 'CSS',
// //         'r3' : 'JS'
// //     },
// //     {
// //         'user_name' : 'Jaswant',
// //         'name' : 'Jaswant Rajput',
// //         'Bio' : 'Skilled in DSA and Learning MERN Stack',
// //         'img' : 'ashpic.jpeg',
// //         'f1' : '500',
// //         'f2' : '100',
// //         'f3' : '10 repo',
// //         'r1' : 'Devopp',
// //         'r2' : 'CPP',
// //         'r3' : 'JS'
// //     },
// //     {
// //         'user_name' : 'Mehul',
// //         'name' : 'Mehul Parmar',
// //         'Bio' : 'MERN Stack',
// //         'img' : 'ashpic.jpeg',
// //         'f1' : '2000',
// //         'f2' : '200',
// //         'f3' : '18 repo',
// //         'r1' : 'NODE JS',
// //         'r2' : 'Express JS',
// //         'r3' : 'MANGODB'
// //     },
// //     {
// //         'user_name' : 'Madhusudan',
// //         'name' : 'Ashvin Sudhir Bari',
// //         'Bio' : 'Skilled in DSA and Learning MERN Stack',
// //         'img' : 'ashpic.jpeg',
// //         'f1' : '3000',
// //         'f2' : '100',
// //         'f3' : '26 repo',
// //         'r1' : 'HTML',
// //         'r2' : 'CSS',
// //         'r3' : 'JS'
// //     },
// //     {
// //         'user_name' : 'Prashant',
// //         'name' : 'Ashvin Sudhir Bari',
// //         'Bio' : 'Skilled in DSA and Learning MERN Stack',
// //         'img' : 'ashpic.jpeg',
// //         'f1' : '3000',
// //         'f2' : '100',
// //         'f3' : '26 repo',
// //         'r1' : 'HTML',
// //         'r2' : 'CSS',
// //         'r3' : 'JS'
// //     },
// // ]

// // const username = document.querySelector("#search").innerHTML;


// // function getrepo(username)
// // {
// //     if(username === arr.user_name)
// //         {
// //         `<main id="main">
// //         <div class="img">
// //             <img class="avatar" src="${arr.img}" alt="Picture">
// //         </div>
// //         <div class="user-info">
// //             <h2>${arr.name}</h2>
// //             <p>${arr.Bio}</p>

// //             <ul class="info">
// //                 <li>### <strong>${arr.f1}</strong></li>
// //                 <li>## <strong>${arr.f2}</strong></li>
// //                 <li>### <strong>${arr.f3}</strong></li>
// //             </ul>

// //             <div id="repos">
// //                 <a class="rep" href="#" target="_blank">${arr.r1}</a>
// //                 <a class="rep" href="#" target="_blank">${arr.r2}</a>
// //                 <a class="rep" href="#" target="_blank">${arr.r3}</a>
// //             </div>
// //         </div>
// //         </main>`
// //         }
// // }


// const arr = [
//     {
//         'user_name': 'Ashvin',
//         'name': 'Ashvin Sudhir Bari',
//         'Bio': 'Skilled in DSA and Learning MERN Stack',
//         'img': 'ashpic.jpeg',
//         'f1': '3000',
//         'f2': '100',
//         'f3': '26 repo',
//         'r1': 'HTML',
//         'r2': 'CSS',
//         'r3': 'JS'
//     },
//     {
//         'user_name': 'Jaswant',
//         'name': 'Jaswant Rajput',
//         'Bio': 'Skilled in DSA and Learning MERN Stack',
//         'img': 'ashpic.jpeg',
//         'f1': '500',
//         'f2': '100',
//         'f3': '10 repo',
//         'r1': 'Devopp',
//         'r2': 'CPP',
//         'r3': 'JS'
//     },
//     {
//         'user_name': 'Mehul',
//         'name': 'Mehul Parmar',
//         'Bio': 'MERN Stack',
//         'img': 'ashpic.jpeg',
//         'f1': '2000',
//         'f2': '200',
//         'f3': '18 repo',
//         'r1': 'NODE JS',
//         'r2': 'Express JS',
//         'r3': 'MANGODB'
//     },
//     {
//         'user_name': 'Madhusudan',
//         'name': 'Ashvin Sudhir Bari',
//         'Bio': 'Skilled in DSA and Learning MERN Stack',
//         'img': 'ashpic.jpeg',
//         'f1': '3000',
//         'f2': '100',
//         'f3': '26 repo',
//         'r1': 'HTML',
//         'r2': 'CSS',
//         'r3': 'JS'
//     },
//     {
//         'user_name': 'Prashant',
//         'name': 'Ashvin Sudhir Bari',
//         'Bio': 'Skilled in DSA and Learning MERN Stack',
//         'img': 'ashpic.jpeg',
//         'f1': '3000',
//         'f2': '100',
//         'f3': '26 repo',
//         'r1': 'HTML',
//         'r2': 'CSS',
//         'r3': 'JS'
//     },
// ];


// // Example usage:
// // const username = "Mehul"; // You can set the username dynamically based on user input
// const username = document.getElementById('search').value;
// const userHTML = getrepo(username);
// document.getElementById('main').innerHTML = userHTML; // Print or append this HTML content wherever you need it

// function getrepo(username) {
//     // Loop through the array to find the matching user
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].user_name === username) {
//             // Return the HTML content
//             return `
//                 <div class="img">
//                     <img class="avatar" src="${arr[i].img}" alt="Picture">
//                 </div>
//                 <div class="user-info">
//                     <h2>${arr[i].name}</h2>
//                     <p>${arr[i].Bio}</p>

//                     <ul class="info">
//                         <li> <strong>${arr[i].f1}</strong></li>
//                         <li> <strong>${arr[i].f2}</strong></li>
//                         <li> <strong>${arr[i].f3}</strong></li>
//                     </ul>

//                     <div id="repos">
//                         <a class="rep" href="#" target="_blank">${arr[i].r1}</a>
//                         <a class="rep" href="#" target="_blank">${arr[i].r2}</a>
//                         <a class="rep" href="#" target="_blank">${arr[i].r3}</a>
//                     </div>
//                 </div>`;
//         }
//     }
//     // If user not found, return an empty string or an appropriate message
//     return "User not found";
// }



const arr = [
    {
        'user_name': 'Ashvin',
        'name': 'Ashvin Sudhir Bari',
        'Bio': 'Skilled in DSA and Learning MERN Stack',
        'img': 'ashpic.jpeg',
        'f1': '3000',
        'f2': '100',
        'f3': '26 repo',
        'r1': 'HTML',
        'r2': 'CSS',
        'r3': 'JS'
    },
    {
        'user_name': 'Jaswant',
        'name': 'Jaswant Rajput',
        'Bio': 'Skilled in DSA and Learning MERN Stack',
        'img': 'ab1.jpeg',
        'f1': '500',
        'f2': '100',
        'f3': '10 repo',
        'r1': 'Devopp',
        'r2': 'CPP',
        'r3': 'JS'
    },
    {
        'user_name': 'Mehul',
        'name': 'Mehul Parmar',
        'Bio': 'MERN Stack',
        'img': 'ashvin.jpeg',
        'f1': '2000',
        'f2': '200',
        'f3': '18 repo',
        'r1': 'NODE JS',
        'r2': 'Express JS',
        'r3': 'MANGODB'
    },
    {
        'user_name': 'Madhusudan',
        'name': 'Ashvin Sudhir Bari',
        'Bio': 'Skilled in DSA and Learning MERN Stack',
        'img': 'ab1.jpeg',
        'f1': '3000',
        'f2': '100',
        'f3': '26 repo',
        'r1': 'HTML',
        'r2': 'CSS',
        'r3': 'JS'
    },
    {
        'user_name': 'Prashant',
        'name': 'Ashvin Sudhir Bari',
        'Bio': 'Skilled in DSA and Learning MERN Stack',
        'img': 'asb.jpeg',
        'f1': '3000',
        'f2': '100',
        'f3': '26 repo',
        'r1': 'HTML',
        'r2': 'CSS',
        'r3': 'JS'
    },
];

function displayUser() {
    const username = document.getElementById('search').value; // Get the value entered in the input field
    const userHTML = getrepo(username);
    document.getElementById('main').innerHTML = userHTML; // Display user information in the main section
}

function getrepo(username) {
    // Loop through the array to find the matching user
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].user_name === username) {
            // Return the HTML content
            return `
                <div class="img">
                    <img class="avatar" src="${arr[i].img}" alt="Picture">
                </div>
                <div class="user-info">
                    <h2>${arr[i].name}</h2>
                    <p>${arr[i].Bio}</p>

                    <ul class="info">
                        <li> <strong>${arr[i].f1}</strong></li>
                        <li> <strong>${arr[i].f2}</strong></li>
                        <li> <strong>${arr[i].f3}</strong></li>
                    </ul>

                    <div id="repos">
                        <a class="rep" href="#" target="_blank">${arr[i].r1}</a>
                        <a class="rep" href="#" target="_blank">${arr[i].r2}</a>
                        <a class="rep" href="#" target="_blank">${arr[i].r3}</a>
                    </div>
                </div>`;
        }
    }
    // If user not found, return an empty string or an appropriate message
    return "User not found";
}

// Event listener for form submission
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    displayUser(); // Call the function to display user information
});





















