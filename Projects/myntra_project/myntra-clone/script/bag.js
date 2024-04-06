let bagItemObjects;
onLoad();

function onLoad()
{
    loadBagItemObjects();
    displayBagItem();
    displayBagSummary();
}

function displayBagSummary()
{
  let bagsummaryElement= document.querySelector('.bag-summary');
  let totalItem = 10;
  let totalMRP = 10;
  let totalDiscount = 10;
  let finalPayment = 10;
  let Convenience = 10;
  bagsummaryElement.innerHTML=
  `<div class="bag-details-container">
  <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
  <div class="price-item">
    <span class="price-item-tag">Total MRP</span>
    <span class="price-item-value">Rs${totalMRP}</span>
  </div>
  <div class="price-item">
    <span class="price-item-tag">Discount on MRP</span>
    <span class="price-item-value priceDetail-base-discount">-Rs${totalDiscount}</span>
  </div>
  <div class="price-item">
    <span class="price-item-tag">Convenience Fee</span>
    <span class="price-item-value">Rs ${Convenience}</span>
  </div>
  <hr>
  <div class="price-footer">
    <span class="price-item-tag">Total Amount</span>
    <span class="price-item-value">Rs ${finalPayment}</span>
  </div>
</div>
<button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>`;

}


function loadBagItemObjects()
{
  console.log(bagItem);
  bagItem.map(itemId => {
    for(let i=0; i<items.length; i++)
    {
      if(itemId == items[i].id)
      {
        return items[i];
      }
    }
  });
  console.log(bagItemObjects);
}


function displayBagItems() 
{
  let containerElement = document.querySelector('.bag-items-container');
  let innerHTML = '';
  bagItemObjects.forEach(bagItem => {
    innerHTML += generateItemHTML(bagItem);
  });
  containerElement.innerHTML = innerHTML;
}


function generateItemHTML(items)
{
  /*
    return `<div class="bag-item-container">
    <div class="item-left-part">
    <img class="bag-item-img" src="${items.image}">
    </div>
    <div class="item-right-part">
      <div class="company">${items.company}</div>
      <div class="item-name">${items.item_name}</div>
      <div class="price-container">
        <span class="current-price">Rs ${items.current_price}</span>
        <span class="original-price">Rs ${items.original_price}</span>
        <span class="discount-percentage">(${items.discount_percentage}% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">${items.return_period} days</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">${items.delvery_date}</span>
      </div>
    </div>      
    <div class="remove-from-cart">X</div>
    </div>`;
    */
    return `<div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="${items.image}">
    </div>
    <div class="item-right-part">
      <div class="company">${items.company}</div>
      <div class="item-name">${items.item_name}</div>
      <div class="price-container">
        <span class="current-price">Rs ${items.current_price}</span>
        <span class="original-price">Rs ${items.original_price}</span>
        <span class="discount-percentage">(${items.discount_percentage}% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">${items.return_period} days</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">${items.delvery_date}</span>
      </div>
    </div>

    <div class="remove-from-cart">x</div>
  </div>`;
}               