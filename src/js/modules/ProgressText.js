import drawSvg from "./drawSvg";
import loadPath from "./loadPath";
import getEasingValue from './getEasingValue';

export default class ProgressText {
  constructor(id, fontSize, easingName) {
    this.element = document.getElementById(id);
    this.text = this.element.innerText;
    this.style = window.getComputedStyle(this.element);
    this.strokeWidth = '10px';
    this.charactorSize = fontSize || "32px";
    this.color = null;
    this.easingName = easingName;
    this.pathsArray = loadPath(this.text, this.charactorSize, this.strokeWidth);
    this.preProgressRate = 0;

  }

  animate(rate) {
    const post = rate;
    const pre = this.preProgressRate;
    let now = post > pre ? pre : post; //小さい方
    const end = post > pre ? post : pre; //大きい方
    const isPlus = post > pre ? true : false;
    const speed = 0.003;

    const anim = () => {
      now += speed;
      if (now <= end) {
        requestAnimationFrame(anim);
      } else if (now >= end) { //アニメーション終わり
        this.preProgressRate = post;
        now = end;
      }
      let easingProgressRate = getEasingValue(this.easingName, now);
      drawSvg(this.pathsArray, easingProgressRate, pre, post, isPlus);
      document.getElementById('progress').innerText = (easingProgressRate * 100 + "%");
    };
    requestAnimationFrame(anim);
  }
}