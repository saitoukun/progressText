import defineCharSvgArray from "./defineCharSvgArray";
export default function loadPath(text, charactorSize, strokeWidth) {
    const pathsArray = [];
    const svgArray = [];
    const array = text.split("");
    const charSvg = defineCharSvgArray();

    for (const char of array) {
        const mySvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

        mySvg.setAttribute("viewBox", "0 0 1000 1000");
        mySvg.setAttribute("width", "100");

        if (charSvg[char] === undefined) {
            const charPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
            charPath.setAttribute("d", "M343.5,612.5c2-32,20-89,64-94s71,17,91,40,54,51,91,45c47.55-7.71,68-51,68-95")//~
            //ストロークアニメーションのための設定
            const pathLength = charPath.getTotalLength()
            charPath.style.strokeDasharray = pathLength;
            charPath.style.strokeWidth = strokeWidth; //線の太さ 
            pathsArray.push(charPath);
            mySvg.appendChild(charPath);
        } else {
            charSvg[char].forEach((path) => {
                const charPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                charPath.setAttribute("d", path)
                //ストロークアニメーションのための設定
                const pathLength = charPath.getTotalLength()
                charPath.style.strokeDasharray = pathLength;
                charPath.style.strokeWidth = strokeWidth; //線の太さ 
                pathsArray.push(charPath);
                mySvg.appendChild(charPath);
            })
        }
        mySvg.setAttribute("width", charactorSize); //文字の幅
        svgArray.push(mySvg);
    }
    createDom(svgArray);
    return pathsArray;
}

// fragmentに全てのsvgを格納してからDOMを操作
const createDom = (svgArray) => {
    let fragment = document.createDocumentFragment();
    svgArray.forEach((svg) => {
        fragment.appendChild(svg);
    })
    document.getElementById("main").appendChild(fragment);
}
