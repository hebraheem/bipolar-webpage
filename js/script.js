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
  console.log(yes)

  if (yes > 9) {
      // console.log("you need to see a doc");
      $('#show-here').html("You are strongly adviced to see a mental health pactitioner");
      $('#show-here').css("color", "red")

  } else if (yes > 5 && yes <7) {
           $('#show-here').html("You are adviced to see a mental health pactitioner")
           $('#show-here').css("color", "yellow")
      // console.log("you might need to see a doc")
  }else {
      $('#show-here').html("keep up the good work, always look after your overall well-being");
      $('#show-here').css("color", "green")
      // console.log("keep up the good work");
  }
 
} 
$('#view-result').on("click", countChecked);






