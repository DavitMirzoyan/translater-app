//const { systemPreferences } = require("electron");


document.addEventListener('DOMContentLoaded', function () {

    
    import { systemPreferences } from "electron/main";

    let startButton = document.getElementById('startButton');
    let timer = document.createElement("div");
    let element = document.getElementById('timerContainer');

    timer.setAttribute('id', 'timer');
    let timerStarted = false;

    let x;

    startButton.addEventListener('click', () => {

        let access = systemPreferences.getMediaAccessStatus("microphone");
        let dest = document.getElementById('access');
        dest.innerHTML = "access";

     /*   window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

        const recognition = new SpeechRecognition();
        recognition.interimResults = true;
        recognition.continuous = true;

        let p = document.createElement("p");
        p.classList.add("para");
        let words = document.querySelector(".words");
        words.appendChild(p);

        recognition.start();

        recognition.addEventListener("result", e => {
            let speechToText = "";
            let interimTranscript = '';
            for (let i = e.resultIndex, len = e.results.length; i < len; i++) {
                let transcript = e.results[i][0].transcript;

                if (e.results[i].isFinal) {
                    speechToText += transcript;
                } else {
                    interimTranscript += transcript;
                }

                console.log(speechToText);
            }
            document.querySelector(".para").innerHTML = speechToText + interimTranscript
        });*/
    })
    /*
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
*/
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
};


window.addEventListener("load", function () {

    let text = document.createElement("div");
    text.setAttribute('id', 'text');

    let element = document.getElementById('textContainer');

    element.appendChild(text).innerHTML = "";

    document.getElementById("languages").addEventListener("change", function () {

        let fullSentence = `The speaker's language is ${this.value}`;

        element.appendChild(text).innerHTML = fullSentence;

    });
});




