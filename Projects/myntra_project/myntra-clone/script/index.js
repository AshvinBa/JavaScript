let bagItem;
onload();

function onload()
{
    let bagItemsStr = localStorage.getItem('bagItem');
    bagItem = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayBagItem();
    display_at_homepage();
}

function addToBag(itemId)
{
    bagItem.push(itemId);
    localStorage.setItem('bagItem',JSON.stringify(bagItem));
    displayBagItem();
}

function displayBagItem()
{
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if(bagItem.length<1)
    {
        bagItemCountElement.style.visibility = 'hidden';  /* To hide the visibility. */
    }
    else
    {
        bagItemCountElement.style.visibility = 'visible';  /* To make visible. */
        bagItemCountElement.innerText = bagItem.length;
    }
}

function display_at_homepage()
{
let itemsContainerElement = document.querySelector('.items-container');
if(!itemsContainerElement)
{
    return;
}
let innerHTML = '';
items.forEach(item=>{
    innerHTML += 
            `<div class="item-container">
                <img class="item-image" src="${item.image}" alt="item image" >
                <div class="rating">
                    ${item.rating.stars} ⭐ | ${item.rating.count}k
                </div>
                <div class="company-name">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="current-price">Rs ${item.current_price}</span>
                    <span class="original-price">Rs ${item.original_price}</span>
                    <span class="discount">(${item.discount_percentage}% OFF)</span>
                </div>
                <button class="btn-add-bar" onclick="addToBag(${item.id})">Add to Bag</button>
            </div>`
});
itemsContainerElement.innerHTML=innerHTML;
}

