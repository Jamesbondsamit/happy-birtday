function setup(){
    canvas=createCanvas(640,400);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}
 function draw(){
     image(video,0,0,640,400);
     tint(tint_color);

    fill(0,128,90);
    stroke(45,78,90)
    line(30,20,50,90)
  fill(90,155,90);
  stroke(45,78,90);
  line(90,87,34,56)
  
 }

 function take_snapshot(){
     save("Happy birtday.png");
 }

 function filter_tint(){
     tint_color=document.getElementById("color_name").value;
 }