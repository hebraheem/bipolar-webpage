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

let form = document.querySelector(".form");
let button = document.querySelector("#actbtn");
button.addEventListener("click", showform);

function showform(){
    if (form.style.display == "none"){
        form.style.display = "block"
    } else {
        form.style.display = "none"
    }
}

// $("#actbtn").click(function(){
//     // let for $(".form");
//     if ($(".form").css("display" == "none")){
//         $(".form").css("display", "block");
//     } else {
//         $(".form").css("display", "none");
//     }
// })




