export default function getEasingValue(easingName, p) {
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
