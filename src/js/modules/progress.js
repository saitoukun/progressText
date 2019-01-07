export default function progress(paths,lengs) {

    let progressRate = 0; //0~100

    animStart();
    function animStart() {
        let speed = 0;
        const acceleration = 0.005;
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
        const totalLeng = lengs.reduce((a, x) => a += x, 0);
        console.log(totalLeng);
    
        paths.forEach((path) => {
            // 進捗率に合わせて0に近づける
            path.style.strokeDashoffset = Math.floor((100 - progressRate) / 100 * path.getTotalLength());
        })
        document.getElementById('progress').innerText = (progressRate + "%")
    };

};
