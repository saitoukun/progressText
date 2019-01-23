export default function drawSvg(pathsArray, preProgressRate, progressRate) {

    let progress = preProgressRate;
    let arriveProgressRate = progressRate * 100;

    //drawに必要なもの
    const pathLengths = [];
    for (const path of pathsArray) {
        pathLengths.push(path.getTotalLength());
    }
    const totalLength = pathLengths.reduce((prev, current) => { return prev + current; });
    let filledPathLength = pathsArray[0].getTotalLength(); //pathの長さを入れておく変数
    let nowIndex = 0; //アニメーションしているpathのindexs

    const startProgress = () => {
        let speed = 0.3;
        const acceleration = 0;
        const count = setInterval(() => {
            speed += acceleration;
            progress += speed;
            if (progress >= arriveProgressRate) {
                clearInterval(count);
                progress = arriveProgressRate;
            }
            //update()
            draw(pathsArray, progress, nowIndex); //progressが変わるたびに呼ばれる
            document.getElementById('progress').innerText = (progress + "%")
        }, 10);
    }
    startProgress();

    const update = () => {
        /*
        pathsArray.forEach((path, index) => {
            const eachProgress = calculateEachProgress(pathsArray.length, index);
            // 進捗率に合わせて0に近づける
            path.style.strokeDashoffset = eachProgress * path.getTotalLength();

            //全て同時にアニメーションする場合
            //path.style.strokeDashoffset =  Math.floor((100 - progressRate) / 100 * path.getTotalLength());
        })
        */

        //eachProgress(1~0の値を返す) 
        function calculateEachProgress(len, index) {
            //0~100
            let eachProg = progress * len / (index + 1);
            if (eachProg > 100) { eachProg = 100 };
            //1~0
            return (100 - eachProg) / 100;
        }
    }

    const draw = (pathsArray, progress, animId) => {
        const advancedNumbers = totalLength / 100 * progress; //今までの進んだ量
        let nowFill = filledPathLength - advancedNumbers;

        if (filledPathLength < advancedNumbers) { //文字のlengthを描画したらnowFillが0になる 次の文字へ
            if (pathsArray.length > nowIndex) {
                nowIndex++;
            }
            filledPathLength += pathsArray[nowIndex].getTotalLength();
            nowFill = 0;
            console.log('next')
            console.log(nowIndex)
        }

        pathsArray[animId].style.strokeDashoffset = nowFill; //0で完全に表示
    }

}