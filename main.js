statussssssssssssssssssssssssssssssss= "";

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById('status').innerHTML ="Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!!!!!!!!!!!!!!!!!")
    statussssssssssssssssssssssssssssssss=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}