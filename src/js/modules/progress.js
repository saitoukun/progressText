export default function progress(paths) {

    let progressRate = 0; //0~100

    animStart();
    function animStart() {
        let speed = 0.3;
        const acceleration = 0;
        let count = setInterval(() => {
            speed += acceleration;
            progressRate += speed;
            if (progressRate >= 100) {
                clearInterval(count);
                progressRate = 100;
            }
            update();
        }, 10);
    }

    function update() {

        paths.forEach((path, index) => {
            let eachProgress = calculateEachProgress(paths.length, index);
            // 進捗率に合わせて0に近づける
            path.style.strokeDashoffset = eachProgress * path.getTotalLength();

            //全て同時にアニメーションする場合
            //path.style.strokeDashoffset =  Math.floor((100 - progressRate) / 100 * path.getTotalLength());
        })
        document.getElementById('progress').innerText = (progressRate + "%")
    };

    //eachProgress(1~0の値を返す) 
    function calculateEachProgress(len, index) {
        //0~100
        let eachProg = progressRate * len / (index + 1);
        if (eachProg > 100) { eachProg = 100 };
        //1~0
        return (100 - eachProg) / 100;
    }

};
