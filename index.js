function setMeImg() {
  var parallax = document.querySelectorAll("body"), speed = 0.85;

   [].slice.call(parallax).forEach(function(el,i){

     windowYOffset = window.pageYOffset,
         elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

     el.style.backgroundPosition = elBackgrounPos;

   });

   window.onscroll = function(){
     [].slice.call(parallax).forEach(function(el,i){

       windowYOffset = window.pageYOffset,
           elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

       el.style.backgroundPosition = elBackgrounPos;

     });
   };


  let rand = Math.floor(Math.random() * 20) + 1;
  document.getElementById("me").src = `./img/me/me${rand}.png`
}

window.onload = setMeImg;
