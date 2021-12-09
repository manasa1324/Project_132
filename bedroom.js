img = "";
status1 = "";

function preload()
{
    img = loadImage('bedroom.jpg');
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
    text("Bed", 150, 120);
    noFill();
    stroke("#000000");
    rect(130, 100, 480, 300);

    fill("#000000");
    text("Shelf", 10, 105);
    noFill();
    stroke("#000000");
    rect(5, 90, 120, 190);
}

function modelLoaded()
{
    console.log("Model Loaded !");
    status1 = true;
    objectDetector.detect(img, gotResults);
}

function gotResult(error, results)
{
    if (error) 
    {
        console.error(error)
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