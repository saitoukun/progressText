import progress from './progress';
export default function loadCharacter(str) {
    const paths = new Array();
    let parsedSVGs = new Array();

    //文字列を配列にする
    const array = [...str];
    array.forEach(async (char, index) => {
        try {
            //charが大文字の時
            if (char.match(/^[A-Z]+$/)) {
                const response = await fetch(`./SVG/UpperCase/${char}${char}.svg`)
                const text = await response.text();
                createSvg(text, index);
            }

            //charが小文字の時
            else if (char.match(/^[a-z]+$/)) {
                const response = await fetch(`./SVG/LowerCase/${char}.svg`)
                const text = await response.text();
                createSvg(text, index);
            }

            //charがスペースの時
            else if (char.match(/( |　)+/)) {
                console.log("space")
                const response = await fetch(`./SVG/Symbol/space.svg`)
                const text = await response.text();
                createSvg(text, index);
            }
        } catch (e) {
            console.log("error!")
        }
        //繰り返しのラストで行う処理
        if (index == array.length - 1) {
            createDom();
        }
    });

    //非同期で読み込んだsvgを順番になるよう並べ替え
    const createSvg = (svgText, index) => {
        const domParser = new DOMParser();
        const parsedSVGDoc = domParser.parseFromString(svgText, 'image/svg+xml');
        const parsedSVG = parsedSVGDoc.childNodes[0];
        parsedSVG.setAttribute("width", "50"); //文字の幅
        parsedSVGs.splice(index, 0, parsedSVG);

        //ストロークアニメーションのための設定
        const charPath = parsedSVG.querySelectorAll('path')[0];
        charPath.style.strokeDasharray = charPath.getTotalLength();
        charPath.style.strokeDashoffset = charPath.getTotalLength();
        charPath.style.strokeWidth = "5px"; //戦の太さ
        paths.splice(index, 0, charPath);
    }

    // fragmentに全てのsvgを格納してからDOMを操作
    const createDom = () => {
        let fragment = document.createDocumentFragment();
        parsedSVGs.forEach((svg) => {
            fragment.appendChild(svg);  
        })
        document.getElementById("main").appendChild(fragment);
    }

    //関数loadCharacterの処理が終わったらアニメーションスタートさせる
    progress(paths);
}