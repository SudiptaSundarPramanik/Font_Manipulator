leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    canvas=createCanvas(500,450);
    canvas.position(560,70);
    video.size(500,450);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Model is Loaded😸");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        
    }
}

function preload(){

}

function draw(){
    background("#6C91C2")
    textSize(difference);
    fill("#FFE787");
    text('Sudipta',100,300);
}