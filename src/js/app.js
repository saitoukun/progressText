
import ProgressText from './modules/ProgressText';

window.addEventListener('DOMContentLoaded', function () {
    const id = 'progressText'//document.getElementById('progressText').innerText;


    const progressText = new ProgressText(id);
    progressText.animate(0.5); //0~1
})