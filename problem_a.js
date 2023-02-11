
'use strict'

while(true){
 
const input = prompt("Type a sentence:") //"THE RAIN IN SPAIN";
let sentence = input.split(" ");

alert(findRepeatingWords(sentence));

}

function findRepeatingWords(sentence){

    for(let word = 0; word < sentence.length; word++) {

        let nrOfRepeats = 0;

        for(let i = 0; i < sentence.length; i++){

            if(sentence[word] === sentence[i]){
                nrOfRepeats++;
            }

            if(nrOfRepeats >= 2){
                return "No";
            }
        }
    }

    return "Yes"
}