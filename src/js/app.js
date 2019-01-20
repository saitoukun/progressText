
import ProgressText from './modules/ProgressText';

window.addEventListener('DOMContentLoaded', function () {
    //DIV内のテキストを取得
    const text = document.getElementById('progressText').innerText;
    const style = window.getComputedStyle(document.getElementById("progressText"));
    console.log(style.fontSize);

    const progressText = new ProgressText(text, style.fontSize);
    progressText.set();
    progressText.animate();
})