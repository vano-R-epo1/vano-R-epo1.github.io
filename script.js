let counter = 0;
let answerArray = ["A","B","C","D"];
function isItCorrect(button) {
    if (answerArray[counter] === button) {
        alert("Correct");
    counter++;
    }
}

