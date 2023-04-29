const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];

  button.addEventListener('click', function(gameSelection) {
    const selector = document.querySelector("h1");
    selector.classList.add("myClick");
    var choice = button.textContent;
    gameSelection = gameChoice();

    if(choice === "Rock"){
       if(gameSelection === "Rock"){
        selector.textContent = "Computer chose "+ gameSelection + ". Rock and Rock it's a tie!";
       }
       else if(gameSelection === "Paper"){
        selector.textContent = "Computer chose "+ gameSelection + ". Paper beats Rock, player loses!";
       }
       else{
        selector.textContent = "Computer chose "+ gameSelection + ". Rock beats Scissors, player wins!";
       }
    }
    else if(choice === "Paper"){
        if(gameSelection === "Rock"){
            selector.textContent = "Computer chose "+ gameSelection + ". Paper beats Rock, Player wins!";
        }
        else if(gameSelection === "Paper"){
            selector.textContent= "Computer chose "+ gameSelection + ". Paper and Paper it's a tie!";
        }
        else{
            selector.textContent = "Computer chose "+ gameSelection + ". Scissors beats Paper, player loses!";
        }
    }
    else if(choice === "Scissors"){
        if(gameSelection === "Rock"){
            selector.textContent= "Computer chose "+ gameSelection + ". Rock beats Scissors player loses!";
        }
        else if(gameSelection === "Paper"){
            selector.textContent = "Computer chose "+ gameSelection + ". Scissors beats Paper, player wins!";
        }
        else{
            selector.textContent= "Computer chose "+ gameSelection + ". Scissors and Scissors it's a tie!";
        }
    }

  });
}

function gameChoice(){
    var randomNumber = number();
    if(randomNumber === 1){
        return "Rock";
    }else if(randomNumber === 2){
        return "Paper";
    }else{
        return "Scissors";
    }
}

//helper function
//Random Number Generator

var number = () =>{
    var Mynum = Number(Math.round(1 + Math.random() * 2));
    return Mynum;
}