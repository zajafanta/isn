$( document ).ready(function() {
  $("#valid").on("click",process);

function change(id, value) {
document.getElementById(id).innerHTML = value;
 }


function process() {
    var foo = $( "input:checked").val();
    console.log(foo);
}
});