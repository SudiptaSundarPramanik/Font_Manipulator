function setup(){
    canvas=createCanvas(500,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Model is Loaded😸");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}

function preload(){

}

function draw(){
    image(video,0,0,500,400);
}