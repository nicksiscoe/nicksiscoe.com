function setMeImg() {
  let rand = Math.floor(Math.random() * 20) + 1;
  document.getElementById("me").src = `./img/me/me${rand}.png`
}

function adjustWidth() {
  var parentwidth = $(".parent").width();
  var windowwidth = $(window).width();
  if (windowwidth >= 992) {
    $("header").width(parentwidth);
  } else {
    $("header").css('width', '100%');
  }
}

$(function() {

$(window).resize(
  function() {
    adjustWidth();
  })

})

window.onload = function(e){
  setMeImg();
  adjustWidth();
}
