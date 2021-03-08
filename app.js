let randomNum, playing,score,scoreLeft,prevHighScore,currentHighScore;

const totalScore = 20;
prevHighScore = 0;
currentHighScore = 0;
scoreLeft = 20;

function play(){
    playing = true;
    score = 0;
    document.querySelector('.message').textContent = 'Start Guessing';
    randomNum = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.background = '#222';
}

play();
console.log(randomNum);

function check(){
    const num = document.querySelector('.guess').value;
    if (!num){
        document.querySelector('.message').textContent = 'No Number';
    }
    else if(num == randomNum){
        document.querySelector('.message').textContent = 'Correct Answer';
        document.querySelector('.number').textContent = randomNum;
        currentHighScore = scoreLeft;
        if(currentHighScore > prevHighScore){
            prevHighScore = currentHighScore;
        }
        document.querySelector('.label-highscore').textContent = '🥇 Highscore: ' + prevHighScore;
        console.log(currentHighScore,prevHighScore);
        document.querySelector('body').style.background = '#60b347';
        playing = false;
    } 
    else
    {
        score += 1;
        scoreLeft = totalScore - score;
        document.querySelector('.message').textContent = 'Wrong Answer';
        if(num > randomNum){
            document.querySelector('.message').textContent = 'Too High';
        }
        else
        {
            document.querySelector('.message').textContent = 'Too Low';
        }
        if(scoreLeft === 0){
            document.querySelector('.number').textContent = randomNum;
            document.querySelector('.message').textContent = 'Wrong Answer Better Luck Next Time';
            document.querySelector('.label-score').textContent = '💯 Score:' + 0;
            playing = false;
        }
        document.querySelector('.label-score').textContent = '💯 Score:' + scoreLeft;
    }
}

document.querySelector('.check').addEventListener('click', () => {
    if(playing){
        check();
    }
});

document.querySelector('.again').addEventListener('click', () => {
    play();
});