//constants 
const cluePauseTime = 333; //time between each clue
const nextClueWaitTime = 1000; //time to wait before starting playback of the clue sequence 
const countDown = document.getElementById("timer");

//variables
var clueHoldTime = 1000; //1 sec for the light and sound
var pattern = []; 
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false; 
var volume = 0.5; 
var guessCounter = 0; 
var mistakes = 0; //tracks the num of mistakes done by the user 
var timer; //timer 
var timeLeft = 60; //1 min of game

//generate pattern 1-8 --> uses a for loop to randomly generate numbers and adds them to the empty pattern list
function cluePattern(min, max){ 
  for (let i =0; i <= 15; i++){
    pattern.push(Math.floor(Math.random()* (max-min) + min));
  }
}

//timer function for updating time and showing the time 
function updateTime(){
  timeLeft--; 
  if(timeLeft >= 0)
    countDown.innerHTML = `${"Timer"}:${timeLeft}`; //Source: Florin Pop on Youtube 
  else {
    stopGame();
  }
}


//start game function
function startGame(){
  progress = 0; 
  gamePlaying = true; 
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("endBtn").classList.remove("hidden"); 
  cluePattern(1,8); //calls function that will generate the random pattern from nums 1-8
  playClueSequence();
  mistakes = 0; 
  timer = setInterval(updateTime, 1000); //sets timer
  updateTime(); 

}

//stop game function 
function stopGame(){
  gamePlaying = false; 
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("endBtn").classList.add("hidden");
  clearInterval(timer);
  document.getElementById('timer').innerHTML='Done'; //changes timer to Done 
}


//sound portion
//pitch for each sound(4 buttons) - higher nums -> higher pitches, lower nums --> lower pitches
const freqMap= {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 336.3,
  6: 500,
  7: 273.7,
  8: 310
}

//playing the tone 
function playTone(btn, len){
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

//start to play
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
    context.resume()
    tonePlaying = true
  }
  
}

//ends tone
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.5, 0.025)
  tonePlaying = false 
  
}


//initialization 
var AudioContext = window.AudioContext || window.webkitAudioContext
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

//lighting the button 
function lightButton(btn){
  document.getElementById("bt" + btn).classList.add("lit");
  //shows image when button is lit 
  showImage(btn);
  //document.getElementById("img1").classList.remove("hidden")
  
}

//clearing the button 
function clearButton(btn){
  document.getElementById("bt" + btn).classList.remove("lit");
  //hides image when button is not lit 
  hideImage(btn); 
}

//playing single clue 
function playSingleClue(btn){
  if (gamePlaying){
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime,btn);
  }
}

//function for the clue sequence 
function playClueSequence(){
  guessCounter = 0; 
  let delay = nextClueWaitTime; 
  for (let i = 0; i<=progress; i++){
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue, delay, pattern[i])
    delay += clueHoldTime
    delay += cluePauseTime; 
    clueHoldTime -= 20; //decreases hold time after each clue
  }
}

//function for losing game 
function loseGame(){
  stopGame(); 
  alert("Game Over. You lost. Try Again."); 
}

function winGame(){
  stopGame(); 
  alert("You won!"); 
}

//guess 
function guess(btn){
  console.log("user guessed: " + btn); 
  if (!gamePlaying){
    return; 
  }
  
  if (pattern[guessCounter] == btn){ //correct guess 
    if (progress == guessCounter){ //turn is still going 
      if (progress == pattern.length-1){ //last turn (length-1)
        winGame(); //wins the game 
      }else{ //not last turn therefore a clue sequence is played 
        progress++; 
        playClueSequence(); 
      }
    }else{ //turn is not over 
      guessCounter++;
    }
  }else{ //incorrect guess ==> lose game 
    mistakes += 1; 
    if (mistakes == 3){
      loseGame(); 
    }
}
}

//image functions!

//shows the function when button is clicked 
function showImage(btn){
  document.getElementById("image" + [btn]).style.visibility = "visible"; 
}

//hides function when button is not clicked 
function hideImage(btn){
  document.getElementById("image" + [btn]).style.visibility = "hidden"; 
}