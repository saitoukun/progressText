import progress from './progress';
export default function loadCharacter(str) {
    const paths = [];
    let parsedSVGs = [];
    const setStrokeWidth = "10px";
    const charactorSize = "32";

    //文字列を配列にする
    const array = [...str];
    array.forEach(async (char, index) => {
        let response;
        let text;
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
            text = await response.text();
            createSvg(text, index);

        } catch (e) {
            console.log("error!")
        }
        //繰り返しのラストで行う処理
        if (index == array.length - 1) {
            createDom();
        }
    });

    
    const createSvg = (svgText, index) => {
        console.log(index);
        const domParser = new DOMParser();
        const parsedSVGDoc = domParser.parseFromString(svgText, 'image/svg+xml');
        const parsedSVG = parsedSVGDoc.childNodes[0];
        parsedSVG.setAttribute("width", charactorSize); //文字の幅
        parsedSVGs.splice(index, 0, parsedSVG);

        //ストロークアニメーションのための設定
        const charPath = parsedSVG.querySelectorAll('path')[0];
        charPath.style.strokeDasharray = charPath.getTotalLength();
        charPath.style.strokeDashoffset = charPath.getTotalLength();
        charPath.style.strokeWidth = setStrokeWidth; //戦の太さ
        paths.splice(index, 0, charPath);
    }

    //非同期で読み込んだsvgを順番になるよう並べ替えもここでしよう
    // fragmentに全てのsvgを格納してからDOMを操作
    const createDom = () => {
        console.log('createDom')
        let fragment = document.createDocumentFragment();
        parsedSVGs.forEach((svg) => {
            fragment.appendChild(svg);
        })
        document.getElementById("main").appendChild(fragment);
        //処理が終わったらアニメーションスタートさせる
        progress(paths);
    }

}