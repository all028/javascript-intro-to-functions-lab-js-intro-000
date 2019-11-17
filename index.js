function shout(strShout){
  return strShout.toUpperCase();
}

function whisper(strShout){
  return strShout.toLowerCase();
}

function logShout(strShout){
  console.log(strShout.toUpperCase());
}


function logWhisper(strShout){
  console.log(strShout.toLowerCase());
}

function sayHiToGrandma(strShout){
  if (strShout.isLowerCase()){
    return "I can\'t hear you";
  }

  if (strShout.isUpperCase()){
    return "YES INDEED!";
  }


}
