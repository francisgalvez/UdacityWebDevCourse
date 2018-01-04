// Select color input
var colorPicker = $('#colorPicker');

// Select size input
var inputHeight = $('#input_height');
var inputWidth = $('#input_width');

var submit = $('#submit_button');
var canvas = $("#pixel_canvas");

// When size is submitted by the user, call makeGrid()
submit.click(function(event) {
  event.preventDefault();
  makeGrid();
});

function makeGrid() {
  // Remove previous canvas, if exists
  canvas.children().remove();

  var height = inputHeight.val();
  var width = inputWidth.val();

  for(var i = 0; i < height; i++){
    canvas.append("<tr></tr>");
    for(var j = 0; j < width; j++){
      canvas.children().last().append("<td></td>");
    }
  }

  //Cell click listener
  canvas.on("click", "td", function() {
    //Get color from colorPicker
    var color = colorPicker.val();
    //Color cell
    $(this).attr("bgcolor", color);
  });
}
