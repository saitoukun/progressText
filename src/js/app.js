import ProgressText from './modules/ProgressText';

window.addEventListener('DOMContentLoaded', function () {
    let count = 0;
    let defaultText = 'here'
    const container = document.querySelector('.container');
    const pre = document.getElementById('pre');

    const mouseClick = () => {
        console.log('aa')
    }

    let button = document.getElementById("button");
    button.addEventListener("click", function (e) {
        e.preventDefault();
        const obtainedText = document.getElementById("textForm").value;

        if (obtainedText != '') {
            progressText.changeParameter({
                text: obtainedText,
            })
            progressText.preProgressRate = 0;
            progressText.animate(1.0);
            console.log(progressText)

            const resultBox = document.createElement('div');
            resultBox.setAttribute("id", count);
            resultBox.setAttribute("class", 'progressLog');
            resultBox.setAttribute("onclick", mouseClick());
            resultBox.innerText = obtainedText;
            pre.insertBefore(resultBox, pre.firstElementChild);
            const preProgressText = new ProgressText(count, progressText);
            preProgressText.animate(1.0);
            count++;

            document.getElementById("textForm").value = '';
        }
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

    const colorWell = document.getElementById("colorWell");
    colorWell.value = '#4D4D4D';
    colorWell.addEventListener("input", updateColor, false);
   
})
