import drawSvg from "./drawSvg";
import loadPath from "./loadPath";

export default class ProgressText {
    constructor(id, fontSize, strokeWidth, color, easing) {
        this.element = document.getElementById(id);
        this.text = this.element.innerText;
        this.style = window.getComputedStyle(this.element);
        this.fontSize = fontSize ? fontSize : this.style.fontSize;
        this.strokeWidth = strokeWidth;
        this.color = color;
        this.easing = easing;
        this.pathsArray = loadPath(this.text, this.fontSize);
        this.preProgressRate = 0;
      }
      
      animate (progressRate) {
        drawSvg(this.pathsArray, this.preProgressRate, progressRate);
        this.preProgressRate = progressRate;
      }
}