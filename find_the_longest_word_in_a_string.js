// This code reads a string (originalWord) and returns with the longest word (=sequence of characters excluding 'space') within this string.

var originalWord = "We are looking for the loooooongest word in this line";

alert(printLongest(originalWord));

function printLongest(originalWord) {
  var words = originalWord.split(" ");
  var longest = "";
  var max = words[0].length;
  for(var i=0; i<words.length; i++){
    if(words[i].length > max){
      max = words[i].length;
      longest = words[i];
    }
  }
  return longest;
}
