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
  var hiGrandma = "hi grandma";
  if (hiGrandma.toLowerCase() === hiGrandma) {
    return "I can't hear you!";
  } else if (hiGrandma.toUpperCase() === hiGrandma) {
    return "YES INDEED!";
  } else if (hiGrandma === "I love you, Grandma.") {
    return "I love you, too.";
  }
};

/*function sayHiToGrandma(string) {
  var helloGrandma = "HI, GRANDMA";
  if (helloGrandma.toUpperCase() === helloGrandma) {
    return "YES INDEED!";
  }
}

function sayHiToGrandma(string) {
  var loveGranny = "I love you, Grandma.";
  if (loveGranny === "I love you, Grandma.") {
    return "I love you, too."
  }
}*/
