let todoList = [
    /*{item: 'Buy Milk', dueDate: '4/10/2023'},
    {item: 'sell Milk', dueDate: '5/2/2023'}
    */
];
function addTodo()
{
    let inputElement = document.querySelector('#text');    /* To select element */
    let dateElement = document.querySelector('#todo-date');  /* To select element */
    let value1 = inputElement.value;   /* To get the value given through input */
    let value2 = dateElement.value;   /* To get the value given through input */
    todoList.push({item: value1, dueDate: value2});    /* To push the value in the todolist */
    //tododate.push(value2);    /*To push the value in the tododate */
    inputElement.value='';   /*To remove the present value from the input section.*/
    dateElement.value='';    /*To remove the present value from the input section.*/
    displayItem();
}
function displayItem()
{
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';

    for(let i=0; i < todoList.length; i++){
        let {item, dueDate} = todoList[i];
        newHtml +=`
        <span class="itemjs">${item}</span>
        <span class="datejs">${dueDate}</span>
        <button class="butjs" onclick="todoList.splice(${i},1);
        displayItem();">Delete</button>
        `;
    }
    containerElement.innerHTML = newHtml;
}

