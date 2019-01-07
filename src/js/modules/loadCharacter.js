import progress from './progress';

export default function loadCharacter(str) {
    let mainDiv = document.getElementById("main")
    const paths = new Array();
    const lengs = new Array();
    //テキストを分解
    const array = str.split("");
    for (const char of array) {
        let myXml = new XMLHttpRequest(); //文字の数だけXMLHttpRequestのインスタンスを作成

        //charが大文字の時
        if (char.match(/^[A-Z]+$/)) {
            myXml.open("GET", `./SVG/UpperCase/${char}${char}.svg `, true);
            myXml.send(null);
        }

        //charが小文字の時
        else if (char.match(/^[a-z]+$/)) {
            myXml.open("GET", `./SVG/LowerCase/${char}.svg`, true);
            myXml.send(null);
        }

        //charがスペースの時
        else if (char.match(/( |　)+/)) {
            console.log("space")
            myXml.open("GET", `./SVG/Symbol/space.svg`, true);
            myXml.send(null);
        }

        //XMLHttpRequest 受信が成功
        myXml.onload = function () {
            const domParser = new DOMParser();
            const svgText = myXml.responseText;
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