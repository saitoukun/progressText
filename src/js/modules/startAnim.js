import drawSvg from "./drawSvg";

export default function startAnim(pathsArray, preProgressRate, progressRate, easingName) {
    console.log(pathsArray)
    console.log(preProgressRate)
    console.log(progressRate)
    console.log(easingName)
    let rate = preProgressRate;

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

    const anim = () => {
        const speed = 0.003;
        rate += speed;
        if (rate <= progressRate) {
            requestAnimationFrame(anim);
        } else if (rate >= progressRate) {
            rate = progressRate;
        }
        let easingProgressRate = getEasingValue(easingName,rate);
        drawSvg(pathsArray,easingProgressRate);
        document.getElementById('progress').innerText = (easingProgressRate * 100 + "%");
    };
    requestAnimationFrame(anim);
}