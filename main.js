var a = 0;
var tm1 = null;

$(".start").click(function() {
    if(tm1 == null) { tm1 = setInterval("timerCount()",100); }
     });
function timerCount() {
     a += 1;
     var sec = a % 10;
     var byo = Math.floor(a / 10) % 10;
     var fun = Math.floor(a / 100) % 10;
     var ji = Math.floor(a / 1000) % 10;
      $(".timer").text(('' + ji)+ ":" + ('' + fun)+
      ":"+ ('' + byo)+ ":" + sec);
};
     $(".stop").click(function() {
          clearInterval(tm1); tm1 = null;
     });
$(document).ready(function(){
    $(".start").click(function(){
        $(".start").css("opacity", "0.4");
        $(".stop").css("opacity", "1");
        $(".reset").css("opacity", "1");
    });
    $(".stop").click(function(){
        $(".stop").css("opacity", "0.4");
        $(".start").css("opacity", "1");
    });
    $(".reset").click(function(){
        $(".reset").css("opacity", "0.4");
        $(".stop").css("opacity", "0.4");
        $(".start").css("opacity", "1");
        $(".timer").text("0:0:0:0");
        a=0;
    });
})

