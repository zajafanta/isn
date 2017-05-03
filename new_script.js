$( document ).ready(function() {
  $("#valid").on("click",process);

var score = 0;
    
function change(id, value) {
document.getElementById(id).innerHTML = value;
 }
    
    
  $.getJSON('questions.json', function (data) {
    console.log(data);
    console.log(data[0].themeQuestion);
  });



function process() {
    var foo = alert($("input[name=group1]:checked").attr("value"));
}
});