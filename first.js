statusnew = ""
objects = []

function preload() {
    pikutore = loadImage("img4.jpg")

}

function setup() {
    canvas = createCanvas(500, 400)
    canvas.position(700, 200)
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "status: loading model"
}

function modelLoaded() {
    statusnew= true;
    console.log("Model Loaded Successfully yAyAyAy gimme a whoop whoop and also get me pizza and get teacher one too ;)")
    objectDetector.detect(pikutore, gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.error(error)
        console.log("BEEP BEEP theres somethin wrong. fix it.")
    }
        console.log(results)
        objects = results

    
}

function draw() {
    image(pikutore, 0, 0, 500, 400)
    if (statusnew != "") {
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "status: Model Loaded! You can start now ;)"
            objname = objects[i].label
            objacc = objects[i].confidence
            objx = objects[i].x
            objy = objects[i].y
            objwidth = objects[i].width
            objheight = objects[i].height
            fill("red")
            stroke("black")
            text(objname+" "+objacc+"%",objx+50, objy+50)
            noFill()
            rect(objx,objy,objwidth,objheight)
        }
    }
    

}