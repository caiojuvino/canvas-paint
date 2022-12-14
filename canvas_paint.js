const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const colors = [
    "#000000",
    "#FF0000", "#00FF00", "#0000FF",
    "#00FFFF", "#FF00FF", "#FFFF00",
    "#80FF00", "#8000FF", "#FF8000", "#0080FF", "#00FF80", "#FF0080"
]

let colorIndex = -1;

function setSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

setSize();

function clear() {
    context.fillStyle = 'rgb(255, 255, 255)';
    context.fillRect(0, 0, canvas.width, canvas.height);
}

window.onresize = () => setSize();

let drawing = false;
let rectStartPos = null;

canvas.addEventListener("mousemove", function (evt) {
    clear();
    var mousePos = getMousePos(canvas, evt);
    let x = mousePos.x;
    let y = mousePos.y;
    context.font = "30px Courier New";
    context.fillStyle = colors[colorIndex];
    context.textAlign = "center";
    context.fillText(`${x} , ${y}`, canvas.width / 2, canvas.height / 2);

    //drawVLine(x);
    //drawHLine(y);

    if(drawing){
        context.strokeStyle = colors[colorIndex];
        context.strokeRect(rectStartPos.x, rectStartPos.y, x-rectStartPos.x, y-rectStartPos.y);
    }

}, false);

function drawVLine(x){
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, canvas.height);
    context.stroke();
}

function drawHLine(y){
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(canvas.width, y);
    context.stroke();
}

canvas.addEventListener("mousedown", function (evt) {
    colorIndex = colorIndex < 10 ? colorIndex + 1 : 0;
    drawing = true;
    rectStartPos = getMousePos(canvas, evt);
    console.log(rectStartPos);
})
canvas.addEventListener("mouseup", function (evt) {
    drawing = false;
    rectStartPos = null;
    console.log(rectStartPos);
})

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}