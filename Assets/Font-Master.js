function loadFont(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const font = new FontFace("customFont", `url(${e.target.result})`);
      font
        .load()
        .then(function (loadedFont) {
          document.fonts.add(loadedFont);
          document.getElementById("textArea").style.fontFamily = "customFont";
        })
        .catch(function (error) {
          console.error("Error:", error);
        });
    };
    reader.readAsDataURL(file);
  }
}
function format(command, value) {
  document.execCommand(command, false, value);
}
