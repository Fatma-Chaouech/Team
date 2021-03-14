function changeFont(font) {
  document.getElementById("note_header").style.fontFamily = font.value;
}
function changeTextSize() {
  var input = document.getElementById('input').value;

  document.getElementById("note_header").style.fontSize = input + "px";
}
function changeColor() {
  document.getElementById("note_header").style.color = document.getElementById("couleur").value;
}
  
