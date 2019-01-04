
window.addEventListener('DOMContentLoaded', function () {
    const paths = new Array();
    const lengs = new Array();

    let progressRate = 0; //0~100

    let mainDiv = document.getElementById("main")

    //DIV内のテキストを取得
    const tex = document.getElementById('progressText').innerText;
    console.log(tex);

    // loadOwnPath(tex); //<svg><path>...</svg> の形になる
    loadCharacter(tex);

    function loadOwnPath(str) {
        //テキストを分解
        const array = str.split("");
        console.log(array.toString());
        console.log(array.length);

        for (const value of array) {
            const mySvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");	// <svg></svg>
            mySvg.setAttribute("viewBox", "0 0 1000 1000");
            mySvg.setAttribute("width", "100");
            const charPath = document.createElementNS("http://www.w3.org/2000/svg", "path");

            switch (value) {
                case 'M':
                    charPath.setAttribute('d', 'M132,800V363c0-99.5,74.5-183.5,190.5-183.5s188,107,188,179S510,800,510,800s.5-396.5.5-441.5,39-179,178-179,199,87,199,185v435');
                    break;
                case 'a':
                    charPath.setAttribute('d', 'M749,550.5c0-115.5-87-237-239-237s-240,121-240,237S344.5,791,509.5,791s240-137,240-240V785');
                    break;
                case 'A':
                    charPath.setAttribute('d', 'M256.25,799.5v-394c0-32,27-230,253-230s254,186,254,213v411m-506.5-240h507');
                    break;
                case 'B':
                    charPath.setAttribute('d', 'M264,786.5v-596s233,.5,293.5.5S707,216.5,707,331.5s-87.5,150-166.5,150c-40.35,0-204.61-.83-270,0v1H541c131,0,195,55,195,155,0,115-73,149-175,149H264.5');
                    break;

                case 'e':
                    charPath.setAttribute('d', 'M270,543.5H750c0-83-77-230-240-230s-240,140-240,230c0,138,82,246,241,246s215-132,215-132');
                    break;
                case 's':
                    charPath.setAttribute('d', 'M660,439c0-52-48-125-161-125S343.5,385.5,338.5,438.5c-5,52.77,28.42,102.43,161,113,138,11,185,53,173,119-17,93.47-84,119-167,119s-179-36-179-128');
                    break;
                case 'g':
                    charPath.setAttribute('d', 'M739,550.5c0-115.5-87-237-239-237s-240,121-240,237S334.5,791,499.5,791s240-137,240-240V773.37c0,68.13-53,218.13-240,218.13s-216-134-216-134');
                    break;
                default:
                    break;
            }
            mySvg.appendChild(charPath);
            document.getElementById("element").appendChild(mySvg);

            //ストロークアニメーションのための設定
            charPath.style.strokeDasharray = charPath.getTotalLength();
            charPath.style.strokeDashoffset = charPath.getTotalLength();
            paths.push(charPath);
            lengs.push(charPath.getTotalLength());
            console.log(charPath)
        }
        //関数loadCharacterの処理が終わったらアニメーションスタートさせる
        animStart();
    }

    function loadCharacter(str) {
        //テキストを分解
        const array = str.split("");
        for (const value of array) {
            let myXml = new XMLHttpRequest(); //文字の数だけXMLHttpRequestのインスタンスを作成

            //valueが大文字の時
            if (value.match(/^[A-Z]+$/)) {
                console.log("大文字");
                myXml.open("GET", `./SVG/UpperCase/${value}${value}.svg`, true);
                myXml.send(null);
            }

            //valueが小文字の時
            else if (value.match(/^[a-z]+$/)) {
                console.log("小文字");
                myXml.open("GET", `./SVG/LowerCase/${value}.svg`, true);
                myXml.send(null);
            }

            //valueがスペースの時
            else if(value.match(/( |　)+/)){
                console.log("space")
                myXml.open("GET", `./SVG/Symbol/space.svg`, true);
                myXml.send(null);
            }

            //XMLHttpRequest 受信が成功
            myXml.onload = function () {
                const domParser = new DOMParser();
                const svgText = myXml.responseText;
                const parsedSVGDoc = domParser.parseFromString(svgText, 'image/svg+xml');
                const parsedSVG = parsedSVGDoc.childNodes[0];
                parsedSVG.setAttribute("width", "50"); //文字の幅
                mainDiv.appendChild(parsedSVG);

                //ストロークアニメーションのための設定
                const charPath = parsedSVG.querySelectorAll('path')[0];
                charPath.style.strokeDasharray = charPath.getTotalLength();
                charPath.style.strokeDashoffset = charPath.getTotalLength();
                charPath.style.strokeWidth = "5px"; //戦の太さ


                paths.push(charPath);
                lengs.push(charPath.getTotalLength());
            }
        }
        //関数loadCharacterの処理が終わったらアニメーションスタートさせる
        animStart();
    }

    function animStart() {
        let speed = 0;
        const acceleration = 0.01;
        let count = setInterval(() => {
            speed += acceleration;
            progressRate += speed;
            if (progressRate >= 100) {
                clearInterval(count);
                progressRate = 100;
            }
            update();
        }, 10);
    }

    const totalLeng = lengs.reduce((a, x) => a += x, 0);
    console.log(totalLeng);

    function update() {

        paths.forEach((path, index) => {
            // 進捗率に合わせて0に近づける
            path.style.strokeDashoffset = Math.floor((100 - progressRate) / 100 * lengs[index]);
        })

        document.getElementById('progress').innerText = (progressRate + "%")
    };
});
