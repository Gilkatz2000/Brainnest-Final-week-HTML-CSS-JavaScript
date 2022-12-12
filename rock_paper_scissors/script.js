let [computer_score,user_score]=[0,0];
let result_ref = document.getElementById("result");
let choices_object = {
    'rock' : {
        'rock' : 'draw',
        'scissor' : 'win',
        'paper' : 'lose'
    },
    'scissor' : {
        'rock' : 'lose',
        'scissor' : 'draw',
        'paper' : 'win'
    },
    'paper' : {
        'rock' : 'win',
        'scissor' : 'lose',
        'paper' : 'draw'
    }

}

function checker(input){
    let gameCount = 0;
    let choices = ["rock", "paper", "scissor"];
    let num = Math.floor(Math.random()*3);

    document.getElementById("comp_choice").innerHTML = 
    ` Computer choose <span> ${choices[num]} </span>`;

    document.getElementById("user_choice").innerHTML = 
    ` You choose <span> ${input} </span>`;

    let computer_choice = choices[num];

    switch(choices_object[input][computer_choice]){
        case 'win':
            user_score++;
            break;
        case 'lose':
            result_ref.innerHTML = "YOU LOSE";
            computer_score++;
            break;
        default:
            result_ref.innerHTML = "DRAW";
            break;
    }

    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
}