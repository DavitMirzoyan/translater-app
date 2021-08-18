document.addEventListener('DOMContentLoaded', function () {

    let startButton = document.getElementById('startButton');
    let timer = document.createElement("div");
    let element = document.getElementById('timerContainer')

    timer.setAttribute('id', 'timer')
    let timerStarted = false

    var x;

    startButton.addEventListener('click', () => {

        if (!timerStarted) {


            let secondsCount = 0;
            element.appendChild(timer).innerHTML = "00:00";

            timerStarted = true;

            x = setInterval(() => {
                secondsCount++;
                timer.innerHTML = formatNumToTime(secondsCount);
            }, 1000);

            startButton.innerHTML = 'Stop timer';


        } else {
            clearInterval(x);
            element.removeChild(timer);
            startButton.innerHTML = 'Start timer';
            timerStarted = false;
        }

    })


    const formatNumToTime = (num) => {
        let mins = 0;
        let seconds = num;
        if (num > 59) {
            seconds = num % 60;
            mins = parseInt(num / 60);

            console.log(mins);
        }


        return `${mins < 10 ? '0' : ''}${mins}:${seconds < 10 ? '0' : ''}${seconds}`
    }
});


function GetSelectedText(value) {
    console.log(value)/*
    var e = document.getElementById("langauges");
    var result = e.options[e.selectedIndex].text;
    document.getElementById("result").innerHTML = result;*/
}
window.addEventListener("load", function () {
    let text = document.createElement("div");
    text.setAttribute('id', 'text');

    let element = document.getElementById('textContainer');

    element.appendChild(text).innerHTML = "";

    document.getElementById("languages").addEventListener("change", function () {
        if (this.value == "null") {
            return;
        }

        let fullSentence = `The speaker's language is ${this.value}`;

        element.appendChild(text).innerHTML = fullSentence;
    });
});
