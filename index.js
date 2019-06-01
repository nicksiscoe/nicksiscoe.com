function setMeImg() {
  let rand = Math.floor(Math.random() * 20) + 1;
  document.getElementById("me").src = `./img/me/me${rand}.png`
}

window.onload = setMeImg;
