var menuState = 0;

function menuClick() {
  if (menuState == 0){
    document.getElementById("menu-expand").style.display = "none";
    document.getElementById("menu-collapse").style.display = "block";

    menuState = 1;
  }
  else if (menuState == 1){
    document.getElementById("menu-expand").style.display = "block";
    document.getElementById("menu-collapse").style.display = "none";

    menuState = 0;
  }
}