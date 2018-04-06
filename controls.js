var display = document.getElementById("display");
var color = document.getElementById("colorInp");
var preview = document.getElementById("preview");
var range = document.getElementById("rangeB");
var number = document.getElementById("numB");
var plus = document.getElementById("plusB");
var random = document.getElementById("randB");
var range1 = document.getElementById("range1");
var range2 = document.getElementById("range2");
var range3 = document.getElementById("range3");
var range4 = document.getElementById("range4");
var hair = document.getElementById("hair");
var eyes = document.getElementById("eyes");
var nose = document.getElementById("nose");
var mouth = document.getElementById("mouth");
var auto = document.getElementById("autoB");
var stop = document.getElementById("stopB");
var timer = null;

color.addEventListener("change", function () {
    preview.style.backgroundColor = this.value;
});

number.addEventListener("click", function () {
    changeType("number");
});
range.addEventListener("click", function () {
    changeType("range");
});

range1.addEventListener("change", function () {
    hair.style.width = this.value + "%";
});

range2.addEventListener("change", function () {
    eyes.style.width = this.value + "%";
});

range3.addEventListener("change", function () {
    nose.style.width = this.value + "%";
});

range4.addEventListener("change", function () {
    mouth.style.width = this.value + "%";
});

plus.addEventListener("click", function () {
    createFace()
});

random.addEventListener("click", function () {
    randomFace()

});
function createFace() {
    var newDiv = document.createElement("div");
    var newHair = document.createElement("img");
    var newEyes = document.createElement("img");
    var newNose = document.createElement("img");
    var newMouth = document.createElement("img");

    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.textAlign = "center";
    newDiv.style.backgroundColor = preview.style.backgroundColor;
    newDiv.style.position = "relative";
    newDiv.style.display = "inline-block";
    newDiv.className = "col-sm-3 col-md-2 col-lg-2 col-xl-1"

    newHair.style.width = hair.style.width;
    newHair.style.top = hair.style.top;
    newHair.src = hair.src;
    newHair.className = "items";

    newEyes.style.width = eyes.style.width;
    newEyes.style.top = eyes.style.top;
    newEyes.src = eyes.src;
    newEyes.className = "items";

    newNose.style.width = nose.style.width;
    newNose.style.top = nose.style.top;
    newNose.src = nose.src;
    newNose.className = "items";

    newMouth.style.width = mouth.style.width;
    newMouth.style.top = mouth.style.top;
    newMouth.src = mouth.src;
    newMouth.className = "items";

    newDiv.appendChild(newHair);
    newDiv.appendChild(newEyes);
    newDiv.appendChild(newNose);
    newDiv.appendChild(newMouth);
    display.appendChild(newDiv);
    newDiv.addEventListener("click", function () {
        display.removeChild(newDiv);
    });
}

function randomFace() {
    var letters = '0123456789ABCDEF';
    var randColor = '#';
    for (var i = 0; i < 6; i++) {
        randColor += letters[Math.floor(Math.random() * 16)];
    }

    hairType = Math.floor((Math.random() * 3) + 1);
    eyeType = Math.floor((Math.random() * 3) + 1);
    noseType = Math.floor((Math.random() * 3) + 1);
    mouthType = Math.floor((Math.random() * 3) + 1);
    hair.src = "img/hair" + hairType + ".png";
    eyes.src = "img/eyes" + eyeType + ".png";
    nose.src = "img/nose" + noseType + ".png";
    mouth.src = "img/mouth" + mouthType + ".png";
    preview.style.backgroundColor = randColor;

    hair.style.width = Math.floor((Math.random() * 70)) + "%";
    eyes.style.width = Math.floor((Math.random() * 40)) + "%";
    nose.style.width = Math.floor((Math.random() * 30)) + "%";
    mouth.style.width = Math.floor((Math.random() * 35)) + "%";

    range1.value = parseInt(hair.style.width);
    range2.value = parseInt(eyes.style.width);
    range3.value = parseInt(nose.style.width);
    range4.value = parseInt(mouth.style.width);

}

function changeType(type) {
    if (type == "number") {
        range1.type = "number";
        range2.type = "number";
        range3.type = "number";
        range4.type = "number";
    } else if (type == "range") {
        range1.type = "range";
        range2.type = "range";
        range3.type = "range";
        range4.type = "range";
    }
}

auto.addEventListener("click", function () {
    if (timer == null) {
        timer = setInterval(function () {
            randomFace();
            createFace();
        }, 500);
    }
});

stop.addEventListener("click", function () {
    clearInterval(timer);
    timer = null;
});