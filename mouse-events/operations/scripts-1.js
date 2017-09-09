function appearFunction() {
    document.getElementById("new").classList.toggle("show");
};



$(".manipulationButton").click(function(){
  $(this).toggleClass("selected");
});



$('button').click(function (){
  $(this).css({width:Math.random()*1000});
});



function color() {
    document.getElementById("changeButtonOne").classList.toggle("switch");
    document.getElementById("changeButtonTwo").classList.toggle("switch");
    document.getElementById("changeButtonThree").classList.toggle("switch");
};
