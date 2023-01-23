var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};
  function sandy(){
  "use strict";
  mediaButton.classList.toggle("active")
  mainListDiv.classList.toggle("show_list")
}
