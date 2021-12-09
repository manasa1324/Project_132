img = "";
status1 = "";

function preload()
{
    img = loadImage('kitchen.jpg');
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
    text("Table", 295, 225);
    noFill();
    stroke("#000000");
    rect(280, 205, 180, 100);

    fill("#000000");
    text("Micro Oven", 475, 165);
    noFill();
    stroke("#000000");
    rect(460, 150, 150, 110);

    fill("#000000");
    text("Friuts", 115, 315);
    noFill();
    stroke("#000000");
    rect(100, 300, 120, 90);
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
    else
    {
        console.log(results);
    }
}

function back()
{
    window.location = "index.html";
}