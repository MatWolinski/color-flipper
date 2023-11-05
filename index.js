var arrOrRgb = false; //false if arr
var fixedColors = ["red", "green", "blue", "yellow", "orange", "black"];
var rgbColor = [];
var selectedColor;
var displayedColor = [];

$(".top-btn").on("click", function () {
  var clickedBtn = this.id;
  console.log(clickedBtn + " i was clicked");
  if (clickedBtn == "top-1") {
    $("#" + clickedBtn).addClass("selected");
    $("#top-2").removeClass("selected");
    arrOrRgb = false;
  } else {
    $("#" + clickedBtn).addClass("selected");
    $("#top-1").removeClass("selected");
    arrOrRgb = true;
  }
});

$("#generator").on("click", function () {
  // animation
  console.log("generator clicked!");
  $("#generator").addClass("clicked");
  setTimeout(function () {
    $("#generator").removeClass("clicked");
  }, 150);

  //color generation
  if (arrOrRgb == false) {
    selectedColor = selectRandomFixed(arrOrRgb);
    console.log(selectedColor);
    $("body").css("background-color", selectedColor);
    dispColor(arrOrRgb);
  } else {
    selectRandomFixed(arrOrRgb);
    selectedColor =
      "rgb(" + rgbColor[0] + ", " + rgbColor[1] + ", " + rgbColor[2] + ")";
    dispColor(arrOrRgb);
    console.log(selectedColor);
    $("body").css("background-color", selectedColor);
  }
});

function dispColor(arrOrRgb) {
  if (arrOrRgb == false) {
    console.log(selectedColor);
    var lengthOfArr = displayedColor.length - 1;
    console.log(displayedColor[lengthOfArr]);
    $(".display-box b").text(displayedColor[lengthOfArr]);
  } else {
    $(".display-box b").text(selectedColor);
  }
}

function selectRandomFixed(arrOrRgb) {
  if (arrOrRgb == false) {
    var randomNumber = Math.floor(Math.random() * fixedColors.length);
    var randomColor = fixedColors[randomNumber];
    displayedColor.push(randomColor);
    return randomColor;
  } else {
    rgbColor = [];
    var randomNumber1 = Math.floor(Math.random() * 255);
    var randomNumber2 = Math.floor(Math.random() * 255);
    var randomNumber3 = Math.floor(Math.random() * 255);
    rgbColor.push(randomNumber1, randomNumber2, randomNumber3);
    return rgbColor;
  }
}
