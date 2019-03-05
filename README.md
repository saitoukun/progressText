# ProgressText.js

![demo](data/now-loading.gif)

DEMO: https://saitoukun.github.io/progressText/localhost-dev/

## Overview
 Stroke animation with alphanumeric characters.
 Can be used for loading-animations.

## Installing
Including dist/progresText.js or dist/progressbar.min.js from latest tag to your project.

## Usage
    // Assuming we have an empty <div id="container"></div> in HTML
    const id = 'container';
    const progressText = new ProgressText(id, {
        text: 'now loading',
        easingName: 'easeInQuad'});
    //Animate to the progress rate
    progressText.animate(1.0); //value from 0.0 to 1.0

    //Drawing is done by entering the progress rate
    progressText.progress(progressRate);//value from 0.0 to 1.0

## License
MIT License

