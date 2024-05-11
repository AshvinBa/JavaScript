let todoList = [
    {
        item:'Prayer',
        date:'22-2-2024' 
    },
    {
        item:'Marrige',
        date:'24-4-2024' 
    }
];

displayItem();

function addcont()
{
    let inputElement=document.getElementById('todo-task');
    let inputdate=document.getElementById('todo-date');

    let todo_task=inputElement.value;
    let todo_date=inputdate.value;
    todoList.push({item: todo_task, date: todo_date});
    inputElement.value='';
    inputdate.value='';
    displayItem();
}

function displayItem()
{
    let containerElement = document.getElementById('todo-container');
    let newHTML='';
    for(let i=0;i<todoList.length;i++)
        {
            let {item,date} =  todoList[i];
            newHTML+=
            `<span>${item}</span>
            <span>${date}</span>
            <button class='btn-delete' onclick="todoList.splice(${i},1);
            displayItem();">DELETE</button>          
            `;
        }
        containerElement.innerHTML = newHTML;
}






