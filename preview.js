/*============DO NOT TOUCH THESE======================*/
var hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth");

hair.style.width = "60%";
hair.style.top = "0%";
eyes.style.width = "20%";
eyes.style.top = "40%";
nose.style.width = "20%";
nose.style.top = "55%";
mouth.style.width = "20%";
mouth.style.top = "75%";

/*==================YOUR WORK STARTS BELOW=====================*/
var hairType = 1;
var eyeType = 1;
var noseType = 1;
var mouthType = 1;

hair.addEventListener("click", function () {
    if (hairType == 1) {
        this.src = "img/hair2.png";
        hairType = 2
    } else if (hairType == 2) {
        this.src = "img/hair3.png";
        hairType = 3
    } else{
        this.src = "img/hair1.png"
        hairType = 1
    }
});

eyes.addEventListener("click", function () {
    if (eyeType == 1) {
        this.src = "img/eyes2.png";
        eyeType = 2
    } else if (eyeType == 2) {
        this.src = "img/eyes3.png";
        eyeType = 3
    } else{
        this.src = "img/eyes1.png"
        eyeType = 1
    }
});

nose.addEventListener("click", function () {
    if (noseType == 1) {
        this.src = "img/nose2.png";
        noseType = 2
    } else if (noseType == 2) {
        this.src = "img/nose3.png";
        noseType = 3
    } else{
        this.src = "img/nose1.png"
        noseType = 1
    }
});

mouth.addEventListener("click", function () {
    if (mouthType == 1) {
        this.src = "img/mouth2.png";
        mouthType = 2
    } else if (mouthType == 2) {
        this.src = "img/mouth3.png";
        mouthType = 3
    } else{
        this.src = "img/mouth1.png"
        mouthType = 1
    }
});
