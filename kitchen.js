img = "";

function preload()
{
    img = loadImage('kitchen.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center()
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw()
{
    image(img, 0, 0, 640, 420);
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