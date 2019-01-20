export default function drawSvg(paths) {

    let progressRate = 0; //0~100

    const startProgress = () => {
        let speed = 0.3;
        const acceleration = 0;
        const count = setInterval(() => {
            speed += acceleration;
            progressRate += speed;
            if (progressRate >= 100) {
                clearInterval(count);
                progressRate = 100;
            }
            //update()
            draw(paths, progressRate, nowIndex);
            document.getElementById('progress').innerText = (progressRate + "%")
        }, 10);
    }
    startProgress();

    const update = () => {
        draw(paths, progressRate, nowIndex);
        /*
        paths.forEach((path, index) => {
            const eachProgress = calculateEachProgress(paths.length, index);
            // 進捗率に合わせて0に近づける
            path.style.strokeDashoffset = eachProgress * path.getTotalLength();

            //全て同時にアニメーションする場合
            //path.style.strokeDashoffset =  Math.floor((100 - progressRate) / 100 * path.getTotalLength());
        })
        */

        //eachProgress(1~0の値を返す) 
        function calculateEachProgress(len, index) {
            //0~100
            let eachProg = progressRate * len / (index + 1);
            if (eachProg > 100) { eachProg = 100 };
            //1~0
            return (100 - eachProg) / 100;
        }
    }


    //drawに必要なもの
    const pathLengths = [];
    for (const path of paths) {
        pathLengths.push(path.getTotalLength());
    }
    const totalLength = pathLengths.reduce( (prev, current) => { return prev + current; });
    let filledPathLength = paths[0].getTotalLength(); //pathの長さを入れておく変数
    let nowIndex = 0; //アニメーションしているpathのindex
    const draw = (paths, progressRate, animId) => {
        const advancedNumbers = totalLength / 100 * progressRate; //今までの進んだ量
        let nowFill = filledPathLength - advancedNumbers;

        if (filledPathLength < advancedNumbers) { //文字のlengthを描画したらnowFillが0になる 次の文字へ
            if (paths.length > nowIndex) {
                nowIndex++;
            }
            filledPathLength += paths[nowIndex].getTotalLength();
            nowFill = 0;
            console.log('next')
            console.log(nowIndex)
        }

        paths[animId].style.strokeDashoffset = nowFill; //0で完全に表示
    }

}