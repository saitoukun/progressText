import ProgressText from './modules/ProgressText';

window.addEventListener('DOMContentLoaded', function () {
    let textArray = [];
    let count = 0;
    let defaultText = 'nowLoading'
    const container = document.querySelector('.container');

    let button = document.getElementById("button");
    button.addEventListener("click", function (e) {
        e.preventDefault();
        const obtainedText = document.getElementById("textForm").value;
        textArray.push(obtainedText)

        console.log('ok')
        const resultBox = document.createElement('div');
        resultBox.setAttribute("id", count)
        resultBox.innerText = obtainedText;
        container.appendChild(resultBox);

        progressText.changeParameter({
            text: obtainedText,
        })
        progressText.preProgressRate = 0 ;
        progressText.animate(1.0);
        console.log(progressText)


        const preProgressText = new ProgressText(count, progressText);
        preProgressText.progress(1.0);
        count++;


    });

    const id = 'progressText';
    const progressText = new ProgressText(id, {
        text: defaultText,
        strokeWidth: 60,
        svgWidth: 60,
        color: '#4D4D4D',
        easingName: 'easeInQuad'
    });
    progressText.progress(1.0);

    const updateColor = (event) => {
        progressText.changeParameter({
            color: event.target.value,
        })
    }

    colorWell = document.querySelector("#colorWell");
    colorWell.value = '#4D4D4D';
    colorWell.addEventListener("input", updateColor, false);

})
