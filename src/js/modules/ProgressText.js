import drawSvg from "./drawSvg";
import loadPath from "./loadPath";

export default class ProgressText {
    constructor(text, fontSize, strokeWidth, color) {
        this.text = text;
        this.fontSize = fontSize;
        this.strokeWidth = strokeWidth;
        this.color = color;
        this.pathsArray = loadPath(this.text, this.fontSize);
        this.preProgressRate = 0;
      }
      
      animate (progressRate) {
        drawSvg(this.pathsArray, this.preProgressRate, progressRate)
        this.preProgressRate = progressRate;
      }
}