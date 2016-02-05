//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately


var color= $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $("canvas")[0].getContext("2d");
var lastEvent;
var mouseDown = false;




$(".controls").on("click","li",function() {
  
  //cache the color
  color = $(this).css("background-color");
  //adds class selected
  $(this).addClass("selected");
 
  
  //deselect sibling elements
  $(this).siblings().removeClass("selected");  
});

//When button presessed reveal the button selector
$("#revealColorSelect").click(function() {
    changeColor(); 
   $("#colorSelect").toggle();
                             
                             
 });

 function changeColor() {
 
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color","rgb(" + r + "," + g + ", " + b  + ") ");
   //sliders
                
 }
  $("input[type=range]").on("input",changeColor);

$("#addNewColor").click(function() {
   
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  $newColor.click();
 

});

//change thickness
$("#thickness").on("input", function() {
    context.lineWidth = $("#thickness").val();
});
//round brush strokes
context.lineCap = "round";


$canvas.mousedown(function(e) {

  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e) {


if(mouseDown) {

//On mouse events on the canvas
  //Draw Lines
context.beginPath();
context.moveTo(lastEvent.offsetX,lastEvent.offsetY);
context.lineTo(e.offsetX,e.offsetY);
context.strokeStyle = color;
context.stroke();
lastEvent = e;
}
}).mouseup(function() {

    mouseDown = false;
  
}).mouseleave(function() {
  
  $canvas.mouseup();
});

