window.onload = function loadDate() {
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById("date").innerHTML = 'Lincoln, NE - ' + new Date().toLocaleDateString('en-US', options);
}
