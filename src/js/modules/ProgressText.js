import drawSvg from "./drawSvg";
import loadPath from "./loadPath";
import getEasingValue from './getEasingValue';

export default class ProgressText {
  constructor(id, obj) {
    this.element = document.getElementById(id);
    this.preProgressRate = 0;
    this.text = obj.text || 'text';
    this.strokeWidth = obj.strokeWidth || '10px';
    this.svgWidth = obj.svgWidth || "32px";
    this.color = obj.color || "#4D4D4D";
    this.easingName = obj.easingName || "linear";
    this.pathsArray = loadPath(this.element, this.text, this.svgWidth, this.strokeWidth, this.color);
  }

  animate(rate) {
    const post = rate;
    const pre = this.preProgressRate;
    let now = post > pre ? pre : post;
    const end = post > pre ? post : pre;
    const isPlus = post > pre ? true : false;
    const speed = 0.003;

    const anim = () => {
      now += speed;
      if (now <= end) {
        requestAnimationFrame(anim);
      } else if (now >= end) {
        this.preProgressRate = post;
        now = end;
      }
      let easingProgressRate = getEasingValue(this.easingName, now);
      drawSvg(this.pathsArray, easingProgressRate, pre, post, isPlus);
    };
    requestAnimationFrame(anim);
  }

  progress(rate){
    const easingProgressRate = getEasingValue(this.easingName, rate);
    drawSvg(this.pathsArray, easingProgressRate, 0, 1, true);
  }

  changeParameter(obj){
    this.text = obj.text || this.text;
    this.strokeWidth = obj.strokeWidth || this.strokeWidth;
    this.svgWidth = obj.svgWidth || this.svgWidth;
    this.color = obj.color || this.color;
    this.easingName = obj.easingName || this.easingName;
    this.pathsArray = loadPath(this.element, this.text, this.svgWidth, this.strokeWidth, this.color);
  }
  

}