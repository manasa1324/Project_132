img = "";
status1 = "";

function preload()
{
    img = loadImage('balcony.jpg');
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

    fill("#000000");
    text("Chair", 350, 135);
    noFill();
    stroke("#000000");
    rect(340, 115, 220, 300);

    fill("#000000");
    text("Chair", 75, 140);
    noFill();
    stroke("#000000");
    rect(65, 120, 165, 250);
}

function modelLoaded()
{
    console.log("Model Loaded !");
}

function gotResult(error, results)
{
    if (error) 
    {
        console.error(error)
    } 
}

function back()
{
    window.location = "index.html";
}