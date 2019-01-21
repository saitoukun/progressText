import drawSvg from "./drawSvg";
import loadPath from './loadPath'

export default function loadLocalCharacter(str, size) {
    let paths = [];
    let parsedSVGs = [];
    const setStrokeWidth = "10px";
    const charactorSize = size ? size : "32px";

    //文字列を配列にする
    const array = [...str];

    (async () => {
        await Promise.all(array.map(async (char, index) => {
            let response;
            try {
                //charが大文字の時
                if (char.match(/^[A-Z]+$/)) {
                    response = await fetch(`./SVG/UpperCase/${char}${char}.svg`)
                }
                //charが小文字の時
                else if (char.match(/^[a-z]+$/)) {
                    response = await fetch(`./SVG/LowerCase/${char}.svg`)
                }
                //charが数字の時
                else if (char.match(/^[0-9]+$/)) {
                    response = await fetch(`./SVG/Number/${char}.svg`)
                }
                //charがスペースの時
                else if (char.match(/( |　)+/)) {
                    console.log("space")
                    response = await fetch(`./SVG/Symbol/space.svg`)
                }
                const text = await response.text();
                await createSvg(text, index);

            } catch (e) {
                console.log("error!")
            }
        }));
        //読み込みが終わったら
        createDom();
    })();
    


    const createSvg = (text, index) => {
        console.log(index);
        const domParser = new DOMParser();
        const parsedSVGDoc = domParser.parseFromString(text, 'image/svg+xml');
        const parsedSVG = parsedSVGDoc.childNodes[0];
        parsedSVG.setAttribute("width", charactorSize); //文字の幅
        parsedSVGs.splice(index, 0, parsedSVG);

        //ストロークアニメーションのための設定
        const emptyPath = document.createElementNS("http://www.w3.org/2000/svg", "path"); //<path>
        const charPath = parsedSVG.querySelectorAll('path')[0] ? parsedSVG.querySelectorAll('path')[0] : emptyPath;
        const pathLength = charPath.getTotalLength()
        charPath.style.strokeDasharray = pathLength;
        charPath.style.strokeDashoffset = pathLength;
        charPath.style.strokeWidth = setStrokeWidth; //線の太さ 
        paths.splice(index, 0, charPath);
    }

    //非同期で読み込んだsvgを順番になるよう並べ替えもここでしよう
    // fragmentに全てのsvgを格納してからDOMを操作
    const createDom = () => {
        console.log(parsedSVGs)
        console.log('createDom')
        let fragment = document.createDocumentFragment();
        parsedSVGs.forEach((svg) => {
            fragment.appendChild(svg);
        })
        document.getElementById("main").appendChild(fragment);
        //処理が終わったらアニメーションスタートさせる
        drawSvg(paths);
    }

}
