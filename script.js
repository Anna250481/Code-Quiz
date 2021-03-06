// Countdown timer
function MyTimer(callback, val) {
    val = val || 60; 
    var timer=setInterval(function() { 
        callback(val);
        if(val-- <= 0) { 
            clearInterval(timer); 
        } 
    }, 1000);
  }
  new MyTimer(function(val) {
    var timerMsg = "00:" + (val >= 10 ? val : "0" + val);
    document.getElementById("timer").textContent = timerMsg; 
  });
  
  
  // Position of user in quiz
  var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
  
  // Questions array
  var questions = [
    ["Turkish city has the name of a cartoon character?",
      "A: Batman", 
      "B: Bodrum", 
      "C: Ankara", 
      "D: Istanbul", 
      "B"],
  
    ["What is the noisiest city in the world?", 
      "A: Moscow", 
      "B: New York", 
      "C: Hong Kong", 
      "D: Tokyo", 
      "A"],
  
    ["What is the capital city of Australia ?", 
      "A: Melbourne", 
      "B: Brisbane", 
      "C: Canberra", 
      "D: Adelaide", 
      "D"],
  
      ["Which is the largest desert on earth?", 
      "A: Sahara", 
      "B: Kalahari", 
      "C: Sonoran", 
      "D: Atacama", 
      "B"],
  
    ["What is the longest river in Europe?", 
      "A: Donau river", 
      "B: Wolga river", 
      "C: Dunabe river", 
      "D: Seine river", 
      "C"]
    ];
  
  // This get function is short for the getElementById function	
  function get(x){
    return document.getElementById(x);
  }
  
  function renderQuestion(){
    test = get("test");
    if(pos >= questions.length){
      test.innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct</h2>";
      get("test_status").innerHTML = "Test completed";
      // resets the variable to allow users to restart the test
        pos = 0;
        correct = 0;
      // stops rest of renderQuestion function running when test is completed
      return false;
    }
    
    get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    chD = questions[pos][4];
    test.innerHTML = "<h3>"+question+"</h3>";
    
    // the += appends to the data started on the line above
    test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
  }
  
  function checkAnswer(){
    // use getElementsByName because we have an array which it will loop through
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
      if(choices[i].checked){
        choice = choices[i].value;
      }
    }
  
    // checks if answer matches the correct choice
    if(choice == questions[pos][5]){
      //each time there is a correct answer this value increases
      correct++;
    }
  
    // changes position of which character user is on
    pos++;
    // then the renderQuestion function runs again to go to next question
    renderQuestion();
  }
  window.addEventListener("load", renderQuestion, false);