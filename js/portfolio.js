var Portfolio = window.Portfolio = {}



Portfolio.bindHandlers = function() {
  $(".links").on("click", "li", Portfolio.swapView);
  Portfolio.changeImages();
  setInterval(Portfolio.changeImages, 120000);
  $(".container").on("click","img", Portfolio.bigImage);

  $("#close").on("click", function(event) {
    console.log("HI")
     $(".outer-modal").addClass("inactive");});

}




Portfolio.changeImages = function(event) {
  var num = Math.floor(Math.random() * 6) + 1;
  $("#backdrop").find("img").attr("src","./images/"+ num +".jpg");
}


Portfolio.bigImage = function(event) {

  event.preventDefault();
  var src = $(event.currentTarget).attr("src");
  $(".outer-modal").removeClass("inactive");
  $(".big-container").find("img").attr('src',src);

}




Portfolio.swapView = function(event) {
  event.preventDefault();
  $(".selected").removeClass("selected").addClass("inactive");
  var $link =$(event.currentTarget).find("a");
  $($link.attr("href")).removeClass("inactive").addClass("selected");
}
