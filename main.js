function setup()
{
 video = createCapture(VIDEO)
 video.size(550,500);

 canvas = createCanvas(550,550);
 canvas.position(560,150);
 poseNet = ml5.poseNet(video,modelLoaded);
}

function modelLoaded()
{
      console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
   if(results.length>0)
{ 
    console.log(results);

     leftWristX = results[0].pose.leftWrist.x;
  rightWrist = results[0].pose.rightWrist.x
  difference = floor(leftWristX-rightWristX);
 
    
}
  
}

function draw()
{ 
   background('#6C91C2');
   textSize(difference);
  fill('#FFE787');
  text('Anamika' , 50,400);
}

