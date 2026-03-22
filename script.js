let counter = 0;
let points = 0;
let answerArray = ["B","C","A","E","A","D"];
function isItCorrect(button) {
    if (answerArray[counter] === button) {
        alert("Correct");
        
        points += 6;
        const textElement = document.getElementById("points");
        textElement.textContent = points;
        
    } else {
        alert("Wrong");
    }

    counter++;
    
}
function skip() {
    alert("Question Skipped");
    points += 1.5;
    const textElement = document.getElementById("points");
    textElement.textContent = points;
    counter++;
}


if (counter ===  answerArray.length()) {
        alert(points)
    }
