
import ProgressText from './modules/ProgressText';

window.addEventListener('DOMContentLoaded', function () {
    //DIV内のテキストを取得
    const text = document.getElementById('progressText').innerText;
    const style = window.getComputedStyle(document.getElementById("progressText"));
    console.log(style.fontSize);
    console.log(text);

    const progressText = new ProgressText(text, style.fontSize);
    progressText.animate();
})