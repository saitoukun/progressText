import ProgressText from './modules/ProgressText';

window.addEventListener('DOMContentLoaded', function () {
    let count = 0;
    let preProgressText = [];
    const container = document.querySelector('.container');
    const pre = document.getElementById('pre');

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

            const resultBox = document.createElement('div');
            resultBox.setAttribute("id", count);
            resultBox.innerText = obtainedText;
            pre.insertBefore(resultBox, pre.firstElementChild);
            preProgressText[count] = new ProgressText(count, progressText);
            preProgressText[count].animate(1.0);

            resultBox.addEventListener("click", function () {
                const drawId = resultBox.id;
                preProgressText[drawId].preProgressRate = 0;
                preProgressText[drawId].animate(1.0);
                console.log(resultBox.id)
            });

            count++;
            document.getElementById("textForm").value = '';
        }
    });

    const id = 'progressText';
    const progressText = new ProgressText(id, {
        strokeWidth: 60,
        svgWidth: 60,
        color: '#4D4D4D',
        easingName: 'easeInQuad'
    });
    progressText.progress(1.0);


    let form = document.getElementById("textForm");
    form.addEventListener("input", function () {
        progressText.changeParameter({
            text: form.value,
        })
        progressText.progress(1.0);
    });

    const colorWell = document.getElementById("colorWell");
    colorWell.value = '#4D4D4D';
    colorWell.addEventListener("input", function () {
        progressText.changeParameter({
            color: event.target.value,
        })
    }, false);

  
})
