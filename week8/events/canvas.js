function drawPattern() {
    var canvas = document.getElementById("demo2");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    var img = new Image(); 
    img.src = "../images/bg-bike.png";
    img.onload = function() { 
    var pattern = context.createPattern(img, "repeat"); 
    context.fillStyle = pattern;                        
    context.fillRect(10, 10, 100, 100);                  
    context.strokeRect(10, 10, 100, 100);
    }; 
}

function drawGradient() {
    var canvas = document.getElementById("demo3");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    var gradient = context.createLinearGradient(0, 0, 0, 200); 
    gradient.addColorStop(0, "blue"); 
    gradient.addColorStop(1, "white"); 
    context.fillStyle = gradient; 
    context.fillRect(10, 10, 100, 100); 
    context.strokeRect(10, 10, 100, 100);
}

function drawCircle(canvas) {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(50, 50, 30, 0, Math.PI*2, true);
    context.closePath(); 
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3; 
    context.fill(); 
    context.stroke();
}

var button = document.getElementById("saveButton");
button.addEventListener("click", saveDrawing, false);

function saveDrawing() {
    var canvas5 = document.getElementById("demo5");
    window.open(canvas5.toDataURL("image/png"));
}

window.addEventListener("load", drawImageToCanvas, false);

function drawImageToCanvas() {
    var canvas = document.getElementById("demo6");
    var context = canvas.getContext("2d");
    var image = document.getElementById("myImageElem");
    //context.drawImage(image, 0, 0); 
    // draw the image at x=0 and y=0 on the canvas
    context.drawImage(image, 68, 68);
    var imageData = context.getImageData(0, 0, 1, 1);
    var pixelData = imageData.data;
    console.log(pixelData.length);
}

function manipulateImage() {
    var canvas = document.getElementById("demo7");
    var context = canvas.getContext("2d");
    var image = document.getElementById("secondImage");
    context.drawImage(image, 68, 68);
    var imageData = context.getImageData(0, 0, 200, 200);
    
    var red, green, blue, greyscale;
    
    //Notice that our for loop is incrementing i by 4 instead of the usual 1 . This is because each pixel takes up four values in the imageData array—one number each for the R, G, B, and A values.
    for (var i = 0; i < imageData.data.length; i += 4) {
    red = imageData.data[i];
    green = imageData.data[i + 1];
    blue = imageData.data[i + 2];
    
    grayscale = red * 0.3 + green * 0.59 + blue * 0.11; 
    imageData.data[i] = grayscale; 
    imageData.data[i + 1] = grayscale;  
    imageData.data[i + 2] = grayscale;
    }
    context.putImageData(imageData, 0, 0);
}

function makeVideoOldTimey() {
    var video = document.getElementById("video");
    var canvas = document.getElementById("canvasOverlay");
    var context = canvas.getContext("2d");
    
    video.addEventListener("play", function() { 
    draw(video,context,canvas);               
    }, false);  
}

function draw(video, context, canvas) {
    if (video.paused || video.ended) return false;
    
    drawOneFrame(video, context, canvas);
        
    // Start over!
    setTimeout(function(){ draw(video, context, canvas); }, 0);
}

function drawOneFrame(video, context, canvas){
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    try {
    var imageData = context.getImageData(0, 0, canvas.width, 
↵canvas.height);
    var pixelData = imageData.data;
    for (var i = 0; i < pixelData.length; i += 4) {
        var red = pixelData[i];
        var green = pixelData[i + 1];
        var blue = pixelData[i + 2];
        var grayscale = red * 0.3 + green * 0.59 + blue * 0.11;
        pixelData[i] = grayscale;
        pixelData[i + 1] = grayscale;
        pixelData[i + 2] = grayscale;
    }
    
    imageData.data = pixelData;
    context.putImageData(imageData, 0, 0);
    } catch (err) {
    // clear the canvas 
    context.clearRect(0,0,canvas.width,canvas.height);
    canvas.style.backgroundColor = "transparent";
    context.fillStyle = "white";
    context.textAlign = "left";
    context.font = "18px LeagueGothic, Tahoma, Geneva, sans-serif";
    context.fillText("There was an error rendering ", 10, 20);  
    context.fillText("the video to the canvas.", 10, 40);
    context.fillText("Perhaps you are viewing this page from", 10, 
↵70);
    context.fillText("a file on your computer?", 10, 90);
    context.fillText("Try viewing this page online instead.", 10, 
↵130); 
    return false;
    }
}
