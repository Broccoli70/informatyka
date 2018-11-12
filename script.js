$(function() {

  //animacja tla

  $(".start")
  .css({
    display: "grid",
  })
  .animate({
    opacity: 1,
  }, 2000, () => {

    $(".start")
    .animate({
      opacity: 0,
    }, 2000, ()=>{ $(".start").css({ display:"none"}); $("html").css({ overflow: "auto", }) });

  })


  //animacja logo

  $(".logo")
  .css({
    display: "grid",
    overflow: "hidden",
  })
  .delay(500)
  .animate({
    opacity: 1,
  }, 2000, () => {

    $(".logo")
    .animate({
      opacity: 0,
    }, 2000, ()=>{ $(".logo").css({ display:"none", overflow: "auto" }) });

  })



  //quiz

  $("button").on("click", (e) => {

    if(e.target.id == "btn3") {
      $("#" + e.target.id).css({background: "#5da16c"})
      $("#txt1").text("Dobrze!");
    }else if ( e.target.id == "btn5") {
      $("#" + e.target.id).css({background: "#5da16c"})
      $("#txt2").text("Dobrze!");
    }else if (e.target.id == "btn9") {
      $("#" + e.target.id).css({background: "#5da16c"})
      $("#txt3").text("Dobrze!");
    }else if (e.target.id == "btn15") {
      $("#" + e.target.id).css({background: "#5da16c"})
      $("#txt4").text("Dobrze!");
    }else {
      $("#" + e.target.id).css({background: "#d46447"})
    }

  })

})
