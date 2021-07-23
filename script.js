'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='Correct Number !';

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=10;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value=23;

const num = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').value = num;
let score = 20;
*/
//document.querySelector('.number').textContent = num;
let b = 0;
let a=0;
let num = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').value= num;
    let score=20;
    document.querySelector('.check').addEventListener('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        //let score=20;
        if (!guess) {
            document.querySelector('.message').textContent = 'No number !🤔';
                    }
        else {
            if (guess === num) {
                document.querySelector('.number').textContent = num;
                document.querySelector('.message').textContent = 'Correct Number🎉';
                document.querySelector('body').style.backgroundColor = 'green';
                document.querySelector('.number').style.width = '30rem';
               
                //console.log(b);
                if(b===0){
                document.querySelector('.highscore').textContent=score;
                }
                else
                {
                    console.log(score,a);
                 if(score>a)   
                    {
                        
                    document.querySelector('.highscore').textContent=score;
                    }
                }
                 a=Number(document.querySelector('.highscore').textContent);
                b++;
                setTimeout(k,5000);
            }
            else
            {
                if (guess > num) {

                    document.querySelector('.message').textContent = 'Too high 😯';
                    score--;
                    document.querySelector('.score').textContent = score;
                }
                else {
                    document.querySelector('.message').textContent = 'Too low😮';
                    score--;
                    document.querySelector('.score').textContent = score;
                }
            // let k=score;
            }
        }
        if (score < 1) {
           // console.log('hey');
            document.querySelector('.message').textContent = 'You lose ! Better luck next time 🙂';
            document.querySelector('body').style.backgroundColor = "red";
            setTimeout(k,3000);
             //k();
        }
        document.querySelector('.again').addEventListener('click', function () {
            k();
        });
         
    });
    function k(){
        document.querySelector('.guess').value='';
        document.querySelector('.message').textContent ='Start guessing !';
        document.querySelector('.number').textContent = '?';
       document.querySelector('body').style.backgroundColor='black';
       score=20;
       document.querySelector('.score').value = score;
       document.querySelector('.score').textContent = score;
        num = Math.trunc(Math.random() * 20) + 1;
       document.querySelector('.number').value = num;
         }
