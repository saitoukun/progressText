import loadCharacter from './loadCharacter'
import drawSvg from "./drawSvg";

export default class ProgressText {
    constructor(text, fontSize, strokeWidth, color) {
        this.text = text;
        this.fontSize = fontSize;
        this.strokeWidth = strokeWidth;
        this.color = color;
        
      }
      

      set() {
        return loadCharacter(this.text, this.fontSize);
      }
      animate () {
        return //console.log(paths)
      }
}