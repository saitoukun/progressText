export default function drawSvg(pathsArray, preProgressRate, progressRate, easingName) {
    let progress = preProgressRate;

    const pathLengths = [];
    for (const path of pathsArray) {
        pathLengths.push(path.getTotalLength());
    }
    const totalLength = pathLengths.reduce((prev, current) => { return prev + current; });
    console.log(totalLength)
    let filledPathLength = pathsArray[0].getTotalLength(); //pathの長さを入れておく変数
    let nowIndex = 0; //アニメーションしているpathのindexs


    console.log(pathsArray)

    const getEasingValue = (easingName,t) => {
        switch(easingName){
            case 'linear': return t ;
            case 'easeInQuad':  return (t*t) ;
            case 'easeOutQuad': return (t * (2 - t)) ;
            case 'easeInOutQuad': return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t ;
            case 'easeInCubic':return t * t * t ;
            case 'easeOutCubic': return (--t) * t * t + 1 ;
            case 'easeInOutCubic': return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 ;
            case 'easeInQuart': return t * t * t * t ;
            case 'easeOutQuart': return 1 - (--t) * t * t * t ;
            case 'easeInOutQuart': return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t ;
            case 'easeInQuint': return t * t * t * t * t ;
            case 'easeOutQuint': return 1 + (--t) * t * t * t * t ;
            case 'easeInOutQuint': return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t ;
            default : return t ;
        }
    }

    const draw = (pathsArray, progress, animId) => {
        let start = preProgressRate * totalLength;

        //start + progress * (totalLength - start)//開始時の幅 + 変化率 * (最終的な幅 - 開始時の幅)
        let nowTotalFill = start + getEasingValue(easingName,progress) * (totalLength - start) 
        let fill = filledPathLength - nowTotalFill;
        console.log(nowTotalFill);


        if (filledPathLength < nowTotalFill) { //文字のlengthを描画したらfillが0になる 次の文字へ
            if (pathsArray.length > nowIndex) {
                nowIndex++;
            }
            filledPathLength += pathsArray[nowIndex].getTotalLength();
            fill = 0;
            console.log('next')
            console.log(nowIndex)
        }

        pathsArray[animId].style.strokeDashoffset = fill; //0で完全に表示
    }


    const anim = () => {
        const speed = 0.003;
        progress += speed;
        if (progress <= progressRate) {
            requestAnimationFrame(anim);
        } else if (progress >= progressRate) {
            progress = progressRate;
        }
        draw(pathsArray, progress, nowIndex); //progressが変わるたびに呼ばれる
        document.getElementById('progress').innerText = (progress * 100 + "%")
    };
    requestAnimationFrame(anim);


    /*
    const update = () => {

        pathsArray.forEach((path, index) => {
            const eachProgress = calculateEachProgress(pathsArray.length, index);
            // 進捗率に合わせて0に近づける
            path.style.strokeDashoffset = eachProgress * path.getTotalLength();

            //全て同時にアニメーションする場合
            //path.style.strokeDashoffset =  Math.floor((100 - progressRate) / 100 * path.getTotalLength());
        })


        //eachProgress(1~0の値を返す) 
        function calculateEachProgress(len, index) {
            //0~100
            let eachProg = progress * len / (index + 1);
            if (eachProg > 100) { eachProg = 100 };
            //1~0
            return (100 - eachProg) / 100;
        }
    }
    */



}