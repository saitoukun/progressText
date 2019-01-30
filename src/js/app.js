
import ProgressText from './modules/ProgressText';

window.addEventListener('DOMContentLoaded', function () {
    const id = 'progressText'//document.getElementById('progressText').innerText;


    const progressText = new ProgressText(id, 50, 'easeOutQuad' );
    progressText.animate(0); //0~1
})