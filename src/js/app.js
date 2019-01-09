import loadCharacter from './modules/loadCharacter';

window.addEventListener('DOMContentLoaded', function (){
    
    //DIV内のテキストを取得
    const tex = document.getElementById('progressText').innerText;
    loadCharacter(tex);
})