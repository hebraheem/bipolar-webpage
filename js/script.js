let trigram = false;
$(".trigram").on("click", function() {
    if("!trigram"){
        $(".trigram").css("display","block");
    }
    trigram = true;
    $(".cancel").css("display","block");
    $(".trigram").css("display","none");
})

let cancel = false;
$(".cancel").on("click", function() {
    if("!cancel"){
        $(".cancel").css("display","block");
    }
    cancel = true;
    $(".trigram").css("display","block");
    $(".cancel").css("display","none");
})

// for modal register and login
$('#myModal').appendTo("body");
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

//For get support form

// let form = document.querySelector(".form");
// let button = document.querySelector("#actbtn");
// let button1 = document.querySelector(".get-support");

// button1.addEventListener("click", showform);
// button.addEventListener("click", showform);


// function showform(){
//     if (form.style.display == "none"){
//         form.style.display = "block"
//     } else {
//         form.style.display = "none"
//     }
// }



//FOR CHECKLIST 

let countChecked = function() {
  let yes = $("input[value='yes']:checked").length

  if (yes > 9) {
      // console.log("you need to see a doc");
      $('#show-here').html("you might need to see a doc")
  } if (yes > 5 && counter <7) {
           $('#show-here').html("you might need to see a doc")
      // console.log("you might need to see a doc")
  }else {
      $('#show-here').html("keep up the good work")
      // console.log("keep up the good work");
  }
 
} 
$('#view-result').on("click", countChecked);

// for game section


let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;

$(".start").on("click",function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
    $("p").css("display", "none")
    $(".start").css("display", "none");
  }
});

$(".btn-game").click(function() {

  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Click the button to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      $("p").css("display", "block");
      $(".start").css("display", "block");


      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(200).fadeOut(200).fadeIn(200);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}





