export default function countProgress() {
        let speed = 0.3;
        const acceleration = 0;
        let progressRate = 0;
        const countProgressRate = setInterval(() => {
            speed += acceleration;
            progressRate += speed;
            if (progressRate >= 100) {
                clearInterval(countProgressRate);
                progressRate = 100;
            }
            return progressRate;
        }, 10);
        return progressRate;
}
