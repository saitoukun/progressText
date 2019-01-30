export default function drawSvg(pathsArray, preProgressRate, progressRate, easingName) {
    let progress = preProgressRate;

    const pathLengths = [];
    for (const path of pathsArray) {
        pathLengths.push(path.getTotalLength());
    }
    const totalLength = pathLengths.reduce((prev, current) => { return prev + current; });
    console.log(pathLengths)

    const getEasingValue = (easingName, p) => {
        switch (easingName) {
            case 'linear': return p;
            case 'easeInQuad': return (p * p);
            case 'easeOutQuad': return (p * (2 - p));
            case 'easeInOutQuad': return p < .5 ? 2 * p * p : -1 + (4 - 2 * p) * p;
            case 'easeInCubic': return p * p * p;
            case 'easeOutCubic': return (--p) * p * p + 1;
            case 'easeInOutCubic': return p < .5 ? 4 * p * p * p : (p - 1) * (2 * p - 2) * (2 * p - 2) + 1;
            case 'easeInQuart': return p * p * p * p;
            case 'easeOutQuart': return 1 - (--p) * p * p * p;
            case 'easeInOutQuart': return p < .5 ? 8 * p * p * p * p : 1 - 8 * (--p) * p * p * p;
            case 'easeInQuint': return p * p * p * p * p;
            case 'easeOutQuint': return 1 + (--p) * p * p * p * p;
            case 'easeInOutQuint': return p < .5 ? 16 * p * p * p * p * p : 1 + 16 * (--p) * p * p * p * p;
            default: return p;
        }
    }

    const getNowIndex = (pathLengths, nowFillValue) => {
        let aaa = 0;//lengthをたす変数
        let countIndex = 0;
        for (const len of pathLengths) {
            aaa += len;
            if (nowFillValue < aaa) {
                return countIndex;
            }
            countIndex++;
        }
        return countIndex;
    }

    const sumArr = () => {
        let sum = 0;
        if (progress == 0) {
            sum = pathLengths[0];
        }
        else if (progress == 1) {
            sum = totalLength
        }
        return (sum);
    }
    let nextFillValue = progress == 0 ? pathLengths[0] : totalLength//次に描画する長さ

    console.log(nextFillValue);

    let preIndex = null;
    const draw = (pathsArray, progress) => {
        let start = preProgressRate * totalLength;
        //開始時の幅 + 変化率 * (最終的な幅 - 開始時の幅)
        let nowFillValue = start + getEasingValue(easingName, progress) * (totalLength - start)
        let nowIndex = getNowIndex(pathLengths, nowFillValue); //アニメーションしているpathのindexs
        let fill = nextFillValue - nowFillValue; //これから描画する値と今の描画する値の差

        if (fill < 0) { //次の文字へ
            if (nowIndex > preIndex) {
                nextFillValue += pathsArray[nowIndex].getTotalLength();
            } else if (nowIndex < preIndex) {
                nextFillValue -= pathsArray[nowIndex].getTotalLength();
            }

            console.log('next')
            console.log(nowIndex)
            console.log(preIndex)
            preIndex = nowIndex;
            return pathsArray[nowIndex - 1].style.strokeDashoffset = 0; //0で完全に表示
        }

        if (nowIndex != pathsArray.length) {
            return pathsArray[nowIndex].style.strokeDashoffset = fill; //0で完全に表示
        }


    }

    const anim = () => {
        const speed = 0.003;
        progress += speed;
        if (progress <= progressRate) {
            requestAnimationFrame(anim);
        } else if (progress >= progressRate) {
            progress = progressRate;
        }
        draw(pathsArray, progress); //progressが変わるたびに呼ばれる
        //update();
        document.getElementById('progress').innerText = (progress * 100 + "%")
    };
    requestAnimationFrame(anim);

    /*
    const update = () => {
        pathsArray.forEach((path, index) => {
            const eachProgress = calculateEachProgress(pathsArray.length, index);
            path.style.strokeDashoffset = path.getTotalLength() - eachProgress * path.getTotalLength(); // 進捗率に合わせて0に近づける
        })
        //eachProgress(1~0の値を返す) 
        function calculateEachProgress(len, index) {
            //0~1
            let eachProg = progress * len / (index + 1);
            if (eachProg > 1) { eachProg = 1 }
            return eachProg
        }
    }
    */

}