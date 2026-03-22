let counter = 0;
let answerArray = ["B","C","A","E","A","D"];
function isItCorrect(button) {
    if (answerArray[counter] === button) {
        alert("Correct");
        const textElement = document.getElementById("points");  
        points = number("points")
        textElement.textContent += points
    } else {
        alert("Wrong");
    }

    counter++;
}
function skip() {
    alert("Question Skipped");
    counter++;
}
