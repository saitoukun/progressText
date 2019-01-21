import loadLocalCharacter from './loadLocalCharacter'
import drawSvg from "./drawSvg";
import loadPath from "./loadPath";

export default class ProgressText {
    constructor(text, fontSize, strokeWidth, color) {
        this.text = text;
        this.fontSize = fontSize;
        this.strokeWidth = strokeWidth;
        this.color = color;
        this.pathsArray = loadPath(this.text, this.fontSize);
      }
      
      animate () {
        console.log(this.pathsArray);
        return drawSvg(this.pathsArray)
         //return loadLocalCharacter
      }
}