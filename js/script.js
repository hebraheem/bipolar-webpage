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




