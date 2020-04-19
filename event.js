$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    setTimeout(function(){ $(".navbar-collapse").collapse('hide'); }, 750);
  });
});