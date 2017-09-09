function appearFunction() {
    document.getElementById("new").classList.toggle("show");
};


$(".manipulationButton").click(function(){
  $(this).toggleClass("selected");
});


$('randomButton').click(function changeWidth(){
  $(this).css({width:Math.random()*1000});
});



function color() {
    document.getElementById("change").classList.toggle("switch");
}
