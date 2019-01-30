import drawSvg from "./drawSvg";
import loadPath from "./loadPath";
import getEasingValue from './getEasingValue';

export default class ProgressText {
  constructor(id, fontSize, easingName) {
    this.element = document.getElementById(id);
    this.text = this.element.innerText;
    this.style = window.getComputedStyle(this.element);
    this.fontSize = fontSize || this.style.fontSize;
    this.strokeWidth = null;
    this.color = null;
    this.easingName = easingName;
    this.pathsArray = loadPath(this.text, this.fontSize);
    this.preProgressRate = 1;
  
  }

  animate(rate) {
    const post = rate;
    const pre = this.preProgressRate;
    let now = this.preProgressRate;
    const speed = 0.003;
    console.log(speed);
    const anim = () => {
      if(pre <= post){
        now += speed;
        if (now <= post) {
          requestAnimationFrame(anim);
        } else if (now >= post) { //アニメーション終わり
          this.preProgressRate = post;
          now = post;
          console.log(this.preProgressRate)
        }
      } else if(pre > post){
        now -= speed;
        if (now >= post) {
          requestAnimationFrame(anim);
        } else if (now <= post) { //アニメーション終わり
          this.preProgressRate = post;
          now = post;
          console.log(this.preProgressRate)
        }
      }
    
      let easingProgressRate = getEasingValue(this.easingName, now);
      drawSvg(this.pathsArray, easingProgressRate,this.preProgressRate);
      document.getElementById('progress').innerText = (easingProgressRate * 100 + "%");
    };
    requestAnimationFrame(anim);
  }
}