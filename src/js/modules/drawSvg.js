export default function drawSvg(pathsArray, preProgressRate, progressRate) {

    let progress = preProgressRate;
    let arriveProgressRate = progressRate * 100;

    const pathLengths = [];
    for (const path of pathsArray) {
        pathLengths.push(path.getTotalLength());
    }
    const totalLength = pathLengths.reduce((prev, current) => { return prev + current; });
    let filledPathLength = pathsArray[0].getTotalLength(); //pathの長さを入れておく変数
    let nowIndex = 0; //アニメーションしているpathのindexs

    (() => {
        const requestAnimationFrame = window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame;
        window.requestAnimationFrame = requestAnimationFrame;

        const cancelAnimationFrame = window.cancelAnimationFrame ||
            window.mozcancelAnimationFrame ||
            window.webkitcancelAnimationFrame ||
            window.mscancelAnimationFrame;
        window.cancelAnimationFrame = cancelAnimationFrame;
    })();

    const now = window.performance && (
        performance.now ||
        performance.mozNow ||
        performance.msNow ||
        performance.oNow ||
        performance.webkitNow);

    const getTime = () => {
        return (now && now.call(performance)) || (new Date().getTime());
    }

    const startTime = getTime();
    let speed = 0.3;
    const acceleration = 0;

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

    const anim = () => {
        const requestId = window.requestAnimationFrame(anim);
        speed += acceleration;
        progress += speed;
        if (progress >= arriveProgressRate) {
            const lastTime = getTime();
            const status = (startTime - lastTime) // 描画開始時刻から経過時刻を引く
            console.log(status);
            window.cancelAnimationFrame(requestId);
            progress = arriveProgressRate;
        }
        draw(pathsArray, progress, nowIndex); //progressが変わるたびに呼ばれる
        document.getElementById('progress').innerText = (progress + "%")
    };
    anim();



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