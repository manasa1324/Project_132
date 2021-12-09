img = "";
status1 = "";

function preload()
{
    img = loadImage('bathroom.jpg');
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
    text("Shower", 390, 100);
    noFill();
    stroke("#000000");
    rect(380, 80, 220, 300);

    fill("#000000");
    text("Plant", 15, 140);
    noFill();
    stroke("#000000");
    rect(5, 120, 160, 170);
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