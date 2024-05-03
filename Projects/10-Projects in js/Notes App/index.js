/*
const addBtn = document.querySelector(".addbtn");
const main = document.querySelector("#main");

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value);
        }
    )
    console.log(data);
    localStorage.setItem("notes",JSON.stringify(data))  
}

addBtn.addEventListener(
    "click",
    function(){
        addNote()
    }
)

(
    function() {
        const lsNotes = localStorage.getItem("notes");
        console.log(lsNotes);
    }
)()

*/
// const addNote = () => 
// {
//     const note = document.createElement("div"); /* Create the new element div. */
    // note.classList.add("note"); /*class list me note name ka class Add kareng. */
/*
    note.innerHTML = `
            <div class="tool">
                
                <svg xmlns="http://www.w3.org/2000/svg" id="save" width="17" height="17" fill="currentColor" class="bi save bi-floppy" viewBox="0 0 16 16">
                    <path d="M11 2H9v3h2z"/>
                    <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 
                    0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.
                    086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" id="dele" width="18" height="18" fill="currentColor" class="bi trash bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </svg>

            </div>
            <textarea></textarea>`;

            note.querySelector(".trash").addEventListener(
                "click",
                function(){
                    note.remove();
                }
            )
            note.querySelector(".save").addEventListener(
                "click",
                function(){
                    saveNotes();
                }
            )
            main.appendChild(note);
            saveNotes();
}
*/
 




// ----------------------------------------------------------------------------------------------
/*
const addBtn = document.querySelector(".addbtn");
const main = document.querySelector("#main");

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value);
        }
    )
    // console.log(data);
    if(data.length === 0)
    {
        localStorage.removeItem("notes");
    }
    else{
        localStorage.setItem("notes",JSON.stringify(data));
    }
}

const addNote = ( text = "") => {
    const note = document.createElement("div"); /* Create the new element div. */
//     note.classList.add("note"); /*class list me note name ka class Add kareng. */
//     note.innerHTML = `
//             <div class="tool">
                
//                 <svg xmlns="http://www.w3.org/2000/svg" id="save" width="17" height="17" fill="currentColor" class="bi save bi-floppy" viewBox="0 0 16 16">
//                     <path d="M11 2H9v3h2z"/>
//                     <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 
//                     0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.
//                     086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
//                 </svg>

//                 <svg xmlns="http://www.w3.org/2000/svg" id="dele" width="18" height="18" fill="currentColor" class="bi trash bi-trash" viewBox="0 0 16 16">
//                     <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
//                     <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
//                 </svg>

//             </div>
//             <textarea> ${text} </textarea>`;

//             note.querySelector(".trash").addEventListener(
//                 "click",
//                 function(){
//                     note.remove();
//                 }
//             )
//             note.querySelector(".save").addEventListener(
//                 "click",
//                 function(){
//                     saveNotes();
//                 }
//             )
//             main.appendChild(note);
//             saveNotes();
// }

// addBtn.addEventListener(
//     "click",
//     function(){
//         addNote()
//     }
// )

// (function () {
//     const lsNotes = JSON.parse(localStorage.getItem("notes")) || [];
//     lsNotes.forEach((lsNote) => {
//         addNote(lsNote);
//     });
// })();

// -------------------------------------------------------------------------------------------------------

const addBtn = document.querySelector(".addbtn");
const main = document.querySelector("#main");

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    const data = [];
    notes.forEach((note) => {
        data.push(note.value);
    });
    if (data.length === 0) {
        localStorage.removeItem("notes");
    } else {
        localStorage.setItem("notes", JSON.stringify(data));
    }
};

const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
        <div class="tool">
            <svg xmlns="http://www.w3.org/2000/svg" id="save" width="17" height="17" fill="currentColor" class="bi save bi-floppy" viewBox="0 0 16 16">
                <path d="M11 2H9v3h2z"/>
                <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.
                086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" id="dele" width="18" height="18" fill="currentColor" class="bi trash bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg>
        </div>
        <textarea>${text}</textarea>`;

    note.querySelector(".trash").addEventListener("click", function () {
        note.remove();
        saveNotes();
    });

    note.querySelector(".save").addEventListener("click", saveNotes);

    note.querySelector("textarea").addEventListener(
        "focusout",
        function()
        {
            saveNotes();
        }
    )
    main.appendChild(note);
    saveNotes();
};

addBtn.addEventListener("click", addNote);

(function () {
    const lsNotes = JSON.parse(localStorage.getItem("notes")) || [];
    if(lsNotes === null)
    {
        addNote();
    }
    else
    {
        lsNotes.forEach((lsNote) => {
            addNote(lsNote);
        });
    }    
    // );
})();


















