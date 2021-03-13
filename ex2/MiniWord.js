function changeFont(font) {
    document.getElementById("note_header").style.fontFamily = font.value;
  }
 function changeTextSize() {
    var input = document.getElementById('input').value;

    document.getElementById("note_header").style.fontSize = input + "px";
  }