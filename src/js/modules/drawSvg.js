export default function drawSvg(pathsArray, progress, preProgressRate, postProgressRate, isPlus) {

    const pathLengths = [];
    for (const path of pathsArray) {
        pathLengths.push(path.getTotalLength());
    }
    const totalLength = pathLengths.reduce((prev, current) => { return prev + current; });

    let start = preProgressRate * totalLength;
    //開始時の幅 + 変化率 * (最終的な幅 - 開始時の幅)
    let nowFillValue = start + progress * ((totalLength * postProgressRate) - start);
    let nowIndex = getNowIndex(pathLengths, nowFillValue); //アニメーションしているpathのindexs
    let nextFillValue = sumArr(pathLengths, nowIndex)//次に描画する長さ
    let fill = nextFillValue - nowFillValue; //これから描画する値と今の描画する値の差

    if (nowIndex != pathsArray.length) {
        pathsArray[nowIndex].style.strokeDashoffset = fill; //0で完全に表示
    }

    if (isPlus) {
        pathsArray.forEach((path,index) => {
            if (nowIndex < index) {
                path.style.strokeDashoffset = path.getTotalLength();
            }else if(nowIndex > index){
                path.style.strokeDashoffset = 0;
            }

        })
    } else {
        pathsArray.forEach((path,index) => {
            if (nowIndex > index) {
                path.style.strokeDashoffset = 0;
            }else if (nowIndex < index){
                path.style.strokeDashoffset = path.getTotalLength();
            }
        })
    }
}

const getNowIndex = (pathLengths, nowFillValue) => {
    let addLength = 0;//lengthをたす変数
    let countIndex = 0;
    for (const len of pathLengths) {
        addLength += len;
        if (nowFillValue < addLength) {
            return countIndex;
        }
        countIndex++;
    }
    return countIndex;
}

const sumArr = (arr, n) => {
    let sum = 0;
    for (let i = 0; i < n + 1 && arr.length != i; i++) {
        sum += arr[i];
    }
    return (sum);
}