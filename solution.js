function solve() {

  let buttonOne = document.getElementById('quizzie').children[1].children[0].children[1];
  let buttonTwo = document.getElementById('quizzie').children[1].children[0].children[2];

 
  let countRight = 0;
  
  buttonOne.addEventListener('click', act);
  buttonTwo.addEventListener('click', act2);

  let firstQestion = document.getElementById('quizzie').children[1];
  let secondQestion = document.getElementById('quizzie').children[2];
  let thirdQestion = document.getElementById('quizzie').children[3]

  function act(ev) {
    countRight++;
    firstQestion.classList = 'hidden';
    secondQestion.classList = 'unhidden';

    let leftButton = document.getElementById('quizzie').children[2].children[0].children[1];
    let rightButton = document.getElementById('quizzie').children[2].children[0].children[2];

    leftButton.addEventListener('click', newAct);
    rightButton.addEventListener('click', newAct2);

    function newAct(ev) {
      
      secondQestion.classList = 'hidden';
      thirdQestion.classList = 'unhidden';

      let firstButton = document.getElementById('quizzie').children[3].children[0].children[1];
      let secondbutton = document.getElementById('quizzie').children[3].children[0].children[2];

      firstButton.addEventListener('click', finalAct);
      secondbutton.addEventListener('click', finalAct);

      function finalAct(ev) {
        if (countRight > 1) {
         countRight++;
          thirdQestion.classList = 'hidden';
          let para = document.createElement("H1");
          para.innerHTML = `You are recognized as top JavaScript fan!`;
          document.getElementById("quizzie").appendChild(para);

        } else {

          thirdQestion.classList = 'hidden';
          let para = document.createElement("H1");
          para.innerHTML = `You have ${countRight} right answers`;
          document.getElementById("quizzie").appendChild(para);
        

        }

      }

    }

    function newAct2(ev) {
      countRight++;
      secondQestion.classList = 'hidden';
      thirdQestion.classList = 'unhidden';

    }

  }

  function act2(ev) {
    countWrong++;
    firstQestion.classList = 'hidden';
    secondQestion.classList = 'unhidden';
    

  }




}
