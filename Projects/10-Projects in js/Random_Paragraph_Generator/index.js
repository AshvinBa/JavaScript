// const text=[

//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ratione iusto nam assumenda. Eum commodi pariatur nihil, voluptate molestiae exercitationem culpa laborum ad expedita. In excepturi consectetur asperiores voluptate expedita voluptatum vel quos dolorem vero libero alias corrupti dolores, illo itaque natus et hic. Enim commodi natus consectetur quasi repudiandae odio ut ',
    
//     'accusantium quis vero, nesciunt excepturi, quam dolorem explicabo, magnam optio nulla fugiat cumque tempore modi sint minus ipsa eligendi! Totam assumenda voluptatum blanditiis ipsum consectetur pariatur. Ex ad commodi eveniet eum nisi labore qui sed, eaque iure rem blanditiis alias architecto voluptate facere unde similique et nobis atque tempora doloribus est quos eos? Quaerat, iure aliquam',
    
//     'hic modi explicabo quibusdam repellendus nesciunt libero facilis et accusantium tempora fuga itaque maxime veniam beatae ratione iusto distinctio. Facere perspiciatis ipsam ut cumque laudantium rerum dolorum, adipisci debitis voluptate harum tempora id nam, quidem quas numquam consequatur totam, obcaecati molestiae incidunt recusandae nisi ratione! Consectetur, ex consequuntur delectus ',
    
//     'qui quos quod aliquid. Aperiam, provident accusamus rerum nam fugit ullam, numquam sunt incidunt pariatur quam a eveniet fugiat. Cum fugit hic fuga minus nostrum, animi, optio repudiandae dicta nam alias aperiam inventore. Voluptate, architecto, exercitationem distinctio reiciendis beatae eveniet repellat sed veniam deleniti ad laborum! Velit harum corrupti natus quasi odit iure ex ',
    
//     'distinctio totam, voluptatibus aliquid illum qui maxime quisquam, itaque earum voluptate quaerat nostrum atque, ducimus architecto aut quod quos officia! Quod quam possimus in vitae? Illo magni esse culpa aspernatur temporibus sint vitae fuga. Ipsa corporis, necessitatibus pariatur ea numquam culpa mollitia, laudantium quisquam accusantium deserunt aperiam aliquid officia. Eos, atque hic molestias odio nisi omnis totam dicta ad corporis consequuntur fugiat excepturi explicabo voluptatibus minus vel velit temporibus ',
    
//     'fuga id sapiente! Quo eum esse non ullam quibusdam reiciendis iste consequatur libero hic facere in sed, doloremque, veniam voluptatibus quasi necessitatibus illum magnam cum possimus provident recusandae aliquam alias cupiditate voluptates. Quia ipsam dolorum quibusdam, neque placeat aliquid perspiciatis! Laborum eius consectetur aspernatur accusamus tempora earum corrupti soluta ',
    
//     'modi tempore iure hic, iste vitae nihil in ratione ipsum doloremque necessitatibus aperiam alias! Iusto ipsum exercitationem, ipsam facilis earum, dicta quidem saepe cumque culpa non nulla deserunt nihil minima modi molestiae ab magni? Quia laudantium hic deserunt distinctio. Quod repellat enim nisi earum aperiam similique nam facilis tenetur modi! Veritatis laboriosam excepturi sunt, voluptates quae earum dolorem. Quo sapiente vel fugiat molestiae explicabo? Quidem dicta consequatur maiores, necessitatibus eos eum aspernatur', 
    
//     'adipisci qui voluptas voluptatem dignissimos aperiam iusto laborum sit quos earum. Ut molestias possimus a exercitationem dolor, maxime culpa? Doloribus, illum impedit! Unde cumque, cum alias dignissimos sunt esse sapiente in excepturi dolorem odio. Tenetur, nobis ea impedit quo commodi fugiat dolore iusto excepturi at accusamus aperiam nostrum quibusdam maiores, ad est perspiciatis' ,
    
//     'consequuntur deserunt eos nulla non ipsa! Dignissimos voluptatibus harum cumque necessitatibus, numquam ducimus inventore doloremque voluptate placeat nesciunt exercitationem illum odit in excepturi enim facere commodi voluptatem corrupti quod, quaerat eos laborum architecto. Beatae, excepturi adipisci veritatis nobis animi voluptatibus numquam odit modi vel quas veniam.'
// ];


// const item = document.querySelector('#items');

// const container = document.querySelector('.para');

// const generet = () => {
//     console.log(item.value);            
//     if(isNaN(item) || item.value < 0  || item.value > 9)                  /* if item Not A Number*/
//     {
//         const randomtext = Math.floor(Math.random()*text.length);
//         container.innerHTML= `<P> ${text[randomtext]} </p>`;
//     }
//     else
//     {
//         const data = text.slice(0,item.value);
//         const paras = data.map(
//             (d) => {
//                 return `<p> ${d} </p>`
//             }
//         )
//         container.innerHTML = paras.join("");
//     }
// };



const text = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ratione iusto nam assumenda. Eum commodi pariatur nihil, voluptate molestiae exercitationem culpa laborum ad expedita. In excepturi consectetur asperiores voluptate expedita voluptatum vel quos dolorem vero libero alias corrupti dolores, illo itaque natus et hic. Enim commodi natus consectetur quasi repudiandae odio ut ',

    'accusantium quis vero, nesciunt excepturi, quam dolorem explicabo, magnam optio nulla fugiat cumque tempore modi sint minus ipsa eligendi! Totam assumenda voluptatum blanditiis ipsum consectetur pariatur. Ex ad commodi eveniet eum nisi labore qui sed, eaque iure rem blanditiis alias architecto voluptate facere unde similique et nobis atque tempora doloribus est quos eos? Quaerat, iure aliquam',

    'hic modi explicabo quibusdam repellendus nesciunt libero facilis et accusantium tempora fuga itaque maxime veniam beatae ratione iusto distinctio. Facere perspiciatis ipsam ut cumque laudantium rerum dolorum, adipisci debitis voluptate harum tempora id nam, quidem quas numquam consequatur totam, obcaecati molestiae incidunt recusandae nisi ratione! Consectetur, ex consequuntur delectus ',

    'qui quos quod aliquid. Aperiam, provident accusamus rerum nam fugit ullam, numquam sunt incidunt pariatur quam a eveniet fugiat. Cum fugit hic fuga minus nostrum, animi, optio repudiandae dicta nam alias aperiam inventore. Voluptate, architecto, exercitationem distinctio reiciendis beatae eveniet repellat sed veniam deleniti ad laborum! Velit harum corrupti natus quasi odit iure ex ',

    'distinctio totam, voluptatibus aliquid illum qui maxime quisquam, itaque earum voluptate quaerat nostrum atque, ducimus architecto aut quod quos officia! Quod quam possimus in vitae? Illo magni esse culpa aspernatur temporibus sint vitae fuga. Ipsa corporis, necessitatibus pariatur ea numquam culpa mollitia, laudantium quisquam accusantium deserunt aperiam aliquid officia. Eos, atque hic molestias odio nisi omnis totam dicta ad corporis consequuntur fugiat excepturi explicabo voluptatibus minus vel velit temporibus ',

    'fuga id sapiente! Quo eum esse non ullam quibusdam reiciendis iste consequatur libero hic facere in sed, doloremque, veniam voluptatibus quasi necessitatibus illum magnam cum possimus provident recusandae aliquam alias cupiditate voluptates. Quia ipsam dolorum quibusdam, neque placeat aliquid perspiciatis! Laborum eius consectetur aspernatur accusamus tempora earum corrupti soluta ',

    'modi tempore iure hic, iste vitae nihil in ratione ipsum doloremque necessitatibus aperiam alias! Iusto ipsum exercitationem, ipsam facilis earum, dicta quidem saepe cumque culpa non nulla deserunt nihil minima modi molestiae ab magni? Quia laudantium hic deserunt distinctio. Quod repellat enim nisi earum aperiam similique nam facilis tenetur modi! Veritatis laboriosam excepturi sunt, voluptates quae earum dolorem. Quo sapiente vel fugiat molestiae explicabo? Quidem dicta consequatur maiores, necessitatibus eos eum aspernatur', 

    'adipisci qui voluptas voluptatem dignissimos aperiam iusto laborum sit quos earum. Ut molestias possimus a exercitationem dolor, maxime culpa? Doloribus, illum impedit! Unde cumque, cum alias dignissimos sunt esse sapiente in excepturi dolorem odio. Tenetur, nobis ea impedit quo commodi fugiat dolore iusto excepturi at accusamus aperiam nostrum quibusdam maiores, ad est perspiciatis' ,

    'consequuntur deserunt eos nulla non ipsa! Dignissimos voluptatibus harum cumque necessitatibus, numquam ducimus inventore doloremque voluptate placeat nesciunt exercitationem illum odit in excepturi enim facere commodi voluptatem corrupti quod, quaerat eos laborum architecto. Beatae, excepturi adipisci veritatis nobis animi voluptatibus numquam odit modi vel quas veniam.'
];

function shuffle(array)
{
    let currentIndex = array.length,
    randomIndex;

    while(currentIndex!=0)
        {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex],array[randomIndex]] = [
                array[randomIndex],array[currentIndex]
            ];
        }
        return array;
}


const item = document.querySelector('#items');
const container = document.querySelector('.para');

const generet = () => {
    const itemValue = parseInt(item.value, 10); // Convert item.value to an integer
    console.log(itemValue);            

    if (isNaN(itemValue) || itemValue < 0 || itemValue > 9) {             /* NaN use for check non number*/
    const randomTextIndex = Math.floor(Math.random() * text.length);
    container.innerHTML = `<p>${text[randomTextIndex]}</p>`;
    }
    else {
    const localText = shuffle(text);
    const data = localText.slice(0, itemValue);
    const paras = data.map(
        (d) => `<p>${d}</p>`
        );
    container.innerHTML = paras.join("");   /* paras.join convert array to string conversion.*/
    }

};
