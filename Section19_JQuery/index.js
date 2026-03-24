$("h1").addClass("big-title margin-50");
$("button").eq(0).text("Hi");

$("button").eq(0).click(function () {
    if ($("img").attr("src") === "./images/tom2.png") {
        $("img").attr("src", "./images/tom1.png");
    }
    else {
        $("img").attr("src", "./images/tom2.png");
    }
});

$("h1").click(function (){
    $("h1").removeClass("big-title");
})