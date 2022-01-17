video = "";

function setup()
{
   canvas = createCanvas(500, 400);
   canvas.center();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status  = true;
}

function draw()
{
    image(img, 0, 0, 500, 400);

    if(status != ""){
        objectDetector.detect(video, gotResults);
    for(i = 0; i < objects.length; i++) {
       document.getElementById("status").innerHTML = "Status : Object Detected";
       document.getElementById("number_of_objects").innerHTML = "Number of objects detected are :" + objects.length;

       fill("#FF0000");
       percent = floor(objects[i].confidence * 100);
       text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
       noFill();
       stroke("FF0000");
       rect(objects[i].x, objects[i].y, objects[i].width, objects[i].length);   
    }
  }
}

function gotResults(error, results)
{
    if(error){
        console.log(error);
    }
    console.log(results);
}