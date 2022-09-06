const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

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

canvas.addEventListener("mousemove", function (evt) {
    clear();
    var mousePos = getMousePos(canvas, evt);
    context.font = "30px Courier New";
    context.fillStyle = "red";
    context.textAlign = "center";
    context.fillText(`${mousePos.x} , ${mousePos.y}`, canvas.width / 2, canvas.height / 2);
}, false);

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}