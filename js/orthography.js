function sayIt(letter){
  if (letter == "m"){
    var sound = new SpeechSynthesisUtterance("mem");
    speechSynthesis.speak(sound);
  }
}
