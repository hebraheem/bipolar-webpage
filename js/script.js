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



//FOR CHECKLIST 

let countChecked = function() {
  let yes = $("input[value='yes']:checked").length
  console.log(yes)

  if (yes > 8) {
      // console.log("you need to see a doc");
      $('#show-here').html("You score"+ " " + yes +"," + " " + "You are strongly adviced to see a mental health practitioner");
      $('.result-field').css("display", "block")
      $('#show-here').css("color", "red")

  } else if (yes > 4 && yes <= 8) {
           $('#show-here').html("You score"+ " " + yes +"," + " " + "You are adviced to see a mental health practitioner")
           $('.result-field').css("display", "block")
           $('#show-here').css("color", "orange")
      // console.log("you might need to see a doc")
  }else {
      $('#show-here').html("You score"+ " " + yes +"," + " " + "keep up the good work, always look after your overall well-being");
      $('.result-field').css("display", "block")
      $('#show-here').css("color", "green")
      // console.log("keep up the good work");
  }
 
} 
$('#view-result').on("click", countChecked);






