img = "";
status1 = "";

function preload()
{
    img = loadImage('living.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw()
{
    image(img, 0, 0, 640, 420);

    fill("#00FF00");
    text("Table", 240, 225);
    noFill();
    stroke("#000000");
    rect(220, 205, 410, 200);

    fill("#FFFFFF");
    text("TV", 165, 30);
    noFill();
    stroke("#000000");
    rect(145, 10, 210, 110);
}

function modelLoaded()
{
    console.log("Model Loaded !");
}

function gotResult(error, results)
{
    if (error) 
    {
        console.error(error);
    } 
    else
    {
        console.log(results);
    }
}

function back()
{
    window.location = "index.html";
}