let counter = 0;
let points = 0;
let mode = ''
let answerArray = ["B","C","A","E","A","D"];
function isItCorrect(button) {
    if (answerArray[counter] === button) {
        if (mode === "practice") {
             alert("Correct");
        }
        points += 6;
        const textElement = document.getElementById("points");
        textElement.textContent = points;
        
    } else {
        if (mode === "practice") {
             alert("Wrong");
        }
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


function practiceOrTest(buttonElement, x) {
  practice.remove();
  test.remove();
  const hiddenButtons = document.querySelectorAll('.hidden-btn');
  hiddenButtons.forEach(button => {
  button.hidden = false;
  });
  mode = x;
}
