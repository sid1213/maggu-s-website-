
//Start the coding with @Jagrati1213

//Audio for game 
let gameOver=new Audio("./music/gameOver.wav");
let gameStart=new Audio("./music/gameStart.wav");

// Display Counting
let counter = document.querySelector(".qu-count span");
let score_display =document.querySelector(".qu-count p span")
let wrong_score = document.querySelector("#wrong");
let right_score = document.querySelector("#right");

// Display Ques
let qus_display = document.querySelector(".qu h2");
let check = document.querySelector(".option-box button");

//Display Options
let op1_display = document.querySelector(".option-box .btn-1 span");
let op2_display = document.querySelector(".option-box .btn-2 span");
let op3_display = document.querySelector(".option-box .btn-3 span");
let op4_display = document.querySelector(".option-box .btn-4 span");
let boxs =document.querySelectorAll(".option-box button");
let wrapper2 = document.querySelector(".score-con");
let wrapper1 = document.querySelector(".wr1");
console.log(wrapper2);

// GET buttons 
let next_btn      = document.querySelector(".submit #next");
let start_btn    = document.querySelector(".submit #start");
// let restart_btn    = document.querySelector("#restart"); //for future
// let prev_btn      = document.querySelector(".submit #prev");  //for future

//numbers for updates
let ele = 0; 
let c = 1;  
let score =0;

// QUIZ BOX - Question
let quiz_ques =[
            { //question-0
                Question:"HTML stand for ",
                option1:"Hypermark Language",
                option2:"Hypermix language",
                option3:"Hypertext Markup Language",
                option4:"Hypertension Language",
                 Answer:"Hypertext Markup Language"
            },
            { //quesstion-1
                Question:"The correct sequence of HTML tags for starting a webpage is",
                option1:"Head, Title, HTML, body",
                option2:"HTML, Body, Title, Head",
                option3:"HTML, Head, Title, Body",
                option4:"HTML, Heads, Title, Body",
                 Answer:"HTML, Head, Title, Body"
            },
            { //question-2
                Question:"Which character is used to represent the closing of a tag in HTML?",
                option1:">",
                option2:"!",
                option3:"/",
                option4:".",
                 Answer:"/"
            },
            { //question-3
                Question:"<input> is -",
                option1:"a format tag.",
                option2:"an empty tag.",
                option3:"All of the above",
                option4:"None of the above",
                 Answer:"an empty tag."
            },
            { //queation-4
                Question:"Which of the following tag is used to make the underlined text?",
                option1:"<i>",
                option2:"<ul>",
                option3:"<u>",
                option4:"<pre>",
                 Answer:"<u>"
            },
            {  //question 5
                Question:"Which type of JavaScript language is ___",
                option1:"Object-Oriented",
                option2:"Object-Based",
                option3:"Assembly-language",
                option4:"High-level",
                 Answer:"Object-Based"
            },
            {  //question 6
                Question:"Which one of the following also known as Conditional Expression:",
                option1:"Alternative to if-else",
                option2:"Switch statement",
                option3:"If-then-else statement",
                option4:"immediate if",
                 Answer:"immediate if"
            },
            {  //question 7
                Question:"In JavaScript, what is a block of statement?",
                option1:"Conditional block",
                option2:"block that combines a number of statements into a single compound statement",
                option3:"both conditional block and a single statement",
                option4:"block that contains a single statement",
                 Answer:"Conditional block"
            },
            {  //question 8
                Question:" When interpreter encounters an empty statements, what it will do:",
                option1:"Shows a warning",
                option2:"Prompts to complete the statement",
                option3:"Throws an error",
                option4:"Ignores the statements",
                 Answer:"Ignores the statements"
            },
            {  //question 9
                Question:"The 'Function' and ' Var' are known as:",
                option1:"Keywords",
                option2:"Data types",
                option3:"Declaration statements",
                option4:"Prototype",
                 Answer:"Data types"
            },   
            {  //question 10
                Question:"Which of the following type of a variable is volatile?",
                option1:"Mutable variable",
                option2:"Dynamic variable",
                option3:"Volatile variable",
                option4:"Immutable variable",
                 Answer:"Mutable variable"
            },

];


//start the quiz game
function start(){

    next_btn.style.display="block";
    counter.textContent=1;
    next()
    start_btn.style.display="none";

}//end the quiz game


//start the next fun
function next(){

    if(ele>=0&&ele<quiz_ques.length-1){

        console.log("next",ele);

        counter.textContent = c++;

        qus_display.textContent =quiz_ques[ele].Question;
        op1_display.textContent =quiz_ques[ele].option1;
        op2_display.textContent =quiz_ques[ele].option2;
        op3_display.textContent =quiz_ques[ele].option3;
        op4_display.textContent =quiz_ques[ele].option4;
        
        winner(ele);
    }

    else{
        //Showing the score and play again
         wrapper1.classList.add("hide")
         wrapper2.classList.remove("hide")
         wrong_score.textContent=(quiz_ques.length-1)-score;
         right_score.textContent=score;
    }
    ele++;
    //event none 
    next_btn.style.pointerEvents="none";
    next_btn.style.background="#1d5547";
}//end the next fun

// start the winner fun 
function winner(ele){
    console.log(quiz_ques[ele].Answer);
        
    boxs.forEach(box => {
       box.addEventListener("click",(e)=>{
          if (e.target.innerText==quiz_ques[ele].Answer) {

                score_display.innerHTML = ++score;
                console.log(score);
                box.style.background="#5eb981"
                box.style.color="#101010";
                gameStart.play();

                boxs.forEach(box=>{
                        box.style.pointerEvents="none";
                        next_btn.style.pointerEvents="visible"; //event nextbtn
                        next_btn.style.background="#5eb981";
                });

                } 
          else { 
                box.style.background="#a32a2ade";
                boxs.forEach(box=>{
                    box.style.pointerEvents="none";
                    next_btn.style.pointerEvents="visible";
                    next_btn.style.background="#5eb981";
                     
                });
                  
                }
       }); //end the events  
    });// and the boxs forEach

        boxs.forEach(box=>{
        box.style.pointerEvents="visible"
        box.style.background="transparent"
        box.style.color="#b3adad"
        });   
}// end the function

//start the previous fun

// function prev(){
//     --e;
//     --c;

//     if(e>=0&&e<5){     
//         console.log("prev",e)

//         counter.innerHTML=c;
//         qus_display.textContent=quiz_ques[e].Question;
//         op1_display.textContent=quiz_ques[e].option1;
//         op2_display.textContent=quiz_ques[e].option2;
//         op3_display.textContent=quiz_ques[e].option3;
//         op4_display.textContent=quiz_ques[e].option4;
//         winner(e);
//     }
//     else{
//         console.log("out of range")
//     }
// }
//end the previous fun
