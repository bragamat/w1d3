var sentence = String(process.argv.slice(2)).toLowerCase(); 
function  countLetters(){ 
var splitedSentence = sentence.split(' ').join('').split(''); 
  var sentenceAsObject = {}; 
    for (var i = 0; i < splitedSentence.length; i++){ 
    var letter = splitedSentence[i];
sentenceAsObject[letter] === undefined ? sentenceAsObject[letter]=[i] :
sentenceAsObject[letter].push(i);
  }return sentenceAsObject;
}

console.log(countLetters(sentence));