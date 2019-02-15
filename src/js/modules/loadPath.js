import defineCharSvgArray from "./defineCharSvgArray";
export default function loadPath(element, text, svgWidth, strokeWidth, color) {
    const pathsArray = [];
    const svgArray = [];
    const array = text.split("");
    element.innerText = "";
    const charSvg = defineCharSvgArray();

    for (const char of array) {
        const mySvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        mySvg.setAttribute("viewBox", "0 0 1000 1000");

        if (charSvg[char] === undefined) { //スペースになる
            const charPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
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
                charPath.style.stroke = color;
                pathsArray.push(charPath);
                mySvg.appendChild(charPath);
            })
        }
        mySvg.setAttribute("width", svgWidth); //文字の幅
        svgArray.push(mySvg);
    }
    createDom(element,svgArray);
    return pathsArray;
}

// fragmentに全てのsvgを格納してからDOMを操作
const createDom = (element,svgArray) => {
    let fragment = document.createDocumentFragment();
    svgArray.forEach((svg) => {
        fragment.appendChild(svg);
    })
    element.appendChild(fragment);
}
