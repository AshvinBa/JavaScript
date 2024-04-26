const questios = 
[
    {
        'que': 'Which of the following is markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },

    {
        'que': 'Which language is suitable for OOP?',
        'a': 'HTML',
        'b': 'C++',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'b'
    },

    {
        'que': 'Which language is use for styling?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'b'
    },

    {
        'que': 'Which of the following language use in backend?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'CSS-5',
        'correct': 'c'
    },

    {
        'que': 'In which language logic building is require?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'c'
    }
]

let index=0;
let total=questios.length;
let right=0,wrong=0;

const queBox=document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.Options');
const loadQuestion = () => {
    if(index===total)
    {
        return endQuiz();
    }
    reset();
    const data = questios[index];
    queBox.innerText= `${index+1}) ${data.que}`; 
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () =>{
    const data = questios[index];
    const ans = getAnswer();
    if(ans==data.correct)
    {
        right++;
    }
    else
    {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () =>
{
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked)
            {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => 
{
    document.getElementById("box").innerHTML=
    `
    <div style="text-align:center">
    <h3>Thank You for Playing the quiz.</h3>
    <h2>${right}/${total} are correct.<h2/>
    </div>
    `
}

loadQuestion();