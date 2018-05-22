function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return 'Hello'.toLowerCase();
}

function logShout(string) {
  console.log('hello'.toUpperCase());
}

function logWhisper(string) {
  console.log("Hello".toLowerCase());
}

function sayHiToGrandma(string) {
  var hiGrandma = "hi, grandma";
  if (hiGrandma.toLowerCase() === hiGrandma) {
    return "I can't hear you!";
  }
}

function sayHiToGrandma(string) {
  var hiGrandma = "HI, GRANDMA";
  if hiGrandma.toUpperCase() === hiGrandma) {
    return "YES INDEED!";
  }
}
