let score = JSON.parse(localStorage.getItem('val')) || {win:0,loss:0,tie:0};
      function val(){
        document.querySelector('.js-score1').innerHTML=`wins:${score.win}; loss:${score.loss}; tie:${score.tie}`;
      }
      function computermove(choice){
        let random = Math.random();
        let result = '';
        let result1 = '';
        if(random>=0 && random<1/3){ 
          result = 'rock';
        }
        else if(random>=1/3 && random <2/3){
          result = 'paper';
        }
        else if(random>=2/3 && random<1){
          result = 'scissor';
        }
        if(choice === 'rock'){
          if(result === 'rock'){
            result1 = 'tie';
            score.tie++;
          }
          else if(result === 'paper'){
            result1 = 'loss';
            score.loss++;
          }
          else if(result === 'scissor'){
            result1 = 'win';
            score.win++;
          }
        }
        if(choice === 'paper'){
          if(result === 'rock'){
            result1 = 'win';
            score.win++;
          }
          else if(result === 'paper'){
            result1 = 'tie';
            score.tie++;
          }
          else if(result === 'scissor'){
            result1 = 'loss';
            score.loss++;
          }
        }
        if(choice === 'scissor'){
          if(result === 'rock'){
            result1 = 'loss';
            score.loss++;
          }
          else if(result === 'paper'){
            result1 = 'win';
            score.win++;
          }
          else if(result === 'scissor'){
            result1 = 'tie';
            score.tie++;
        }
        }
document.querySelector('.js-val').innerHTML=`you ${result1}.`;
document.querySelector('.js-val1').innerHTML = `
  Your choice: <img src="./${choice}-emoji.png" class="picstyle" alt="${choice}">
  Computer's choice: <img src="./${result}-emoji.png" class="picstyle" alt="${result}">
`;

val();
localStorage.setItem('val',JSON.stringify(score));
      }
    function reset(){
      score = {win:0,loss:0,tie:0}
      localStorage.setItem('val',JSON.stringify(score));
      document.querySelector('.js-val').innerHTML='';
      document.querySelector('.js-val1').innerHTML='';
      val();
    }
    val();