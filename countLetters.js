var sentence = String(process.argv.slice(2)).toLowerCase(); // Getting the Sentence
function  countLetters(){ //calling the function
var splitedSentence = sentence.split(' ').join('').split(''); //putting the letters together with no comma 
  var sentenceAsObject = {}; // declaring an object;
    for (var i = 0; i < splitedSentence.length; i++){ //looping throught the letters
      var letter = splitedSentence[i]; // assigning each letter to a variable 'letter' 
      sentenceAsObject[letter] === undefined ? sentenceAsObject[letter] = 1 : 
      sentenceAsObject[letter]++; //checking if there is already a key in the object and adding one
  }
  return sentenceAsObject;// returnin the sentence;
}
console.log(countLetters(sentence));