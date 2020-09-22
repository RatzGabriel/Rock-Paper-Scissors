const computerPlay=()=> {
    const random = Math.floor(Math.random() *3 );
    switch(random) {
    case 0 :
    return 'rock';
    case 1: 
    return 'paper';
    case 2:
    return 'scissors';
    break;
    
    }
    }

    console.log(computerPlay());


    const determineWinner = (playerSelection,computerSelection) => {
        playerSelection=playerSelection.toLowerCase();
        computerSelection=computerSelection.toLowerCase();
        
        if(playerSelection===computerSelection) {
            return 'tie'
            }
        else if (playerSelection==='rock') {
                if(computerSelection==='paper'){
                return 'Computer Wins';
                }
                else if (computerSelection==='scissors'){
                    return 'User Wins';
                    }}   
         else if(playerSelection==='paper'){
                        if(computerSelection==='rock'){
                        return 'User Wins';
                        } 
                        else if (computerSelection==='scissors'){
                        return 'Computer Wins';
                        }
                        } 
         else if (playerSelection==='scissors'){
                            if(computerSelection==='rock'){
                            return 'Computer Wins';
                            } else  if (computerSelection==='paper'){
                            return 'User Wins'
                            }
                            }
        }

       console.log(determineWinner('rock',computerPlay()));


   function game() {
        let userscore;
        let computerscore;
        let i;

        for(i=0;i<5;i++) {
            const player=prompt("rock paper scissors")
            const computer=computerPlay();
            const winner = determineWinner(player,computer);

            if(winner=='Computer Wins'){
                computerscore++;
                console.log("computer wins")

            }

            else if (winner=='User Wins'){
                userscore++
                console.log("user wins")

            }
            else {'tie'}
            }


        

        if (userscore > computerscore)
    {
        console.log("You are The winner")
    }
    else if(userscore < computerscore)
    {
        console.log("You lose this round")
    }
    else
    {
        console.log("Its Was a Tie")
    }
}




   
    