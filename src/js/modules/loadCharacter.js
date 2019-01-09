import progress from './progress';
export default function loadCharacter(str) {
    let mainDiv = document.getElementById("main")
    const paths = new Array();
    const lengs = new Array();
    //テキストを分解
    const array = str.split("");
    for (const char of array) {

        //charが大文字の時
        if (char.match(/^[A-Z]+$/)) {
            //myXml.open("GET", `./SVG/UpperCase/${char}${char}.svg `, true);
            //myXml.send(null);
            fetch(`./SVG/UpperCase/${char}${char}.svg`, {
                method: "GET",
              }).then(response => response.text())
              .then(text => {
                createSvg(text);
              });
        }

        //charが小文字の時
        else if (char.match(/^[a-z]+$/)) {
            fetch(`./SVG/LowerCase/${char}.svg`, {
                method: "GET",
              }).then(response => response.text())
              .then(text => {
                createSvg(text);
              });
        }

        //charがスペースの時
        else if (char.match(/( |　)+/)) {
            console.log("space")
            fetch(`./SVG/Symbol/space.svg`, {
                method: "GET",
              }).then(response => response.text())
              .then(text => {
                createSvg(text);
              });
        }

        //XMLHttpRequest 受信が成功
        const createSvg = (svgText) => {
            const domParser = new DOMParser();
            const parsedSVGDoc = domParser.parseFromString(svgText, 'image/svg+xml');
            const parsedSVG = parsedSVGDoc.childNodes[0];
            parsedSVG.setAttribute("width", "50"); //文字の幅
            mainDiv.appendChild(parsedSVG);

            //ストロークアニメーションのための設定
            const charPath = parsedSVG.querySelectorAll('path')[0];
            charPath.style.strokeDasharray = charPath.getTotalLength();
            charPath.style.strokeDashoffset = charPath.getTotalLength();
            charPath.style.strokeWidth = "5px"; //戦の太さ
            
            paths.push(charPath);
            lengs.push(charPath.getTotalLength());
        }
    }
    //関数loadCharacterの処理が終わったらアニメーションスタートさせる
    progress(paths, lengs);
}