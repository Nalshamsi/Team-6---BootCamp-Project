// Nasreen
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("navbar").style.padding = "5px 5px";
    document.getElementById("navbar").style.backgroundColor ="rgba(41, 115, 115, .7)"
    document.getElementById("logo").style.fontSize = "20px";
  } else {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("navbar").style.backgroundColor ="rgba(41, 115, 115, .9)"
    document.getElementById("logo").style.fontSize = "30px";
  }
}