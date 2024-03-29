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
            document.getElementById("textArea").style.fontFamily =
              "customFont";
          })
          .catch(function (error) {
            console.error("خطأ في تحميل الخط:", error);
          });
      };
      reader.readAsDataURL(file);
    }
  }