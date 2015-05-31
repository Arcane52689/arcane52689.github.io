var Portfolio = window.Portfolio = {}



Portfolio.bindHandlers = function() {
  $(".links").on("click", "li", Portfolio.swapView);
  Portfolio.changeImages();
  setInterval(Portfolio.changeImages, 120000);
}




Portfolio.changeImages = function(event) {
  var num = Math.floor(Math.random() * 6) + 1;
  $("#backdrop").find("img").attr("src","./images/"+ num +".jpg");
}





Portfolio.swapView = function(event) {
  event.preventDefault();
  $(".selected").removeClass("selected").addClass("inactive");
  var $link =$(event.currentTarget).find("a");
  $($link.attr("href")).removeClass("inactive").addClass("selected");
}
