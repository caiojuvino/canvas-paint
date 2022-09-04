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

canvas.addEventListener("click", function (evt) {
    var mousePos = getMousePos(canvas, evt);
    alert(mousePos.x + ',' + mousePos.y);
}, false);

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}