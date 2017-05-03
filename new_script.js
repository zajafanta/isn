$( document ).ready(function() {
  $("#valid").on("click",process);

var score = 0;
    
function change(id, value) {
document.getElementById(id).innerHTML = value;
 }


function process() {
    var foo = alert($("input[name=group1]:checked").attr("value"));
}
});