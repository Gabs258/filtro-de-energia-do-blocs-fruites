var noseX =0
var noseY =0
function preload() {
palhaco = loadImage("https://i.postimg.cc/x8jvfKBz/produto-Foto1-1552604-79143-zoom-61690-zoom-11788-zoom-removebg-preview.png")







}



function setup() {
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300)
video.hide();   

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw() {
image (video,0,0,300,300);
fill("red")
stroke(0,0,0);
circle(noseX,noseY, 20);
image(palhaco, noseX-15, noseY-15, 30,30);
}
function stun() {
save('Dragonusereumlixo.png');



}
function modelLoaded() {
console.log("permkilo")
}
function gotPoses(results) {
if(results.length > 0){
console.log(results)
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
}

}
