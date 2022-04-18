function setup() {
canvas= createCanvas(1920, 755);
video= createCapture(VIDEO);
video.size(350, 300)
video.position(5, 186)
poseNet= ml5.poseNet(video, modelloaded)
poseNet.on('pose', gotPosses)
}
function draw() {
background("#FFFFFF")
}

function modelloaded() {
console.log('Model Loaded!')
}

function gotPosses(results) {
if (results.length>0) {
console.log(results);
}
}