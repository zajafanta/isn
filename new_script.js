$( document ).ready(function(){
  $("#valid").on("click",validation);
    
var progress = 0;
    
    var questionsJSON = [
    {
    "intitulé":"Suis-je une question ?",
    "theme": "t1",
    "repFausse":["repFausse 1","repFausse 2"],
    "repJuste": "juste",
    "identifiant":1
  },
  {
   "intitulé":"Mon point d'interrogation fait il de moi une question ?",
   "theme": "t2",
    "repFausse":["repFausse 1","repFausse 2"],
    "repJuste": "juste ",
    "identifiant":2
  }
];
    
var questions = [];

for(var i=0;i<questionsJSON.length;i++){
    questions[i] = new Question(questionsJSON[i].intitulé,questionsJSON[i].theme,questionsJSON[i].repJuste,questionsJSON[i].repFausse,questionsJSON[i].identifiant);
}

function progression() {
    changeform();
    changeform(questions[progress].intitulé, questions[progress].repJuste, questions[progress].repFausse[0], questions[progress].repFausse[1]);
    progress++;
    $("input[name=group1]").attr("checked",false);
}
    
progression();

    
function change(id, value) {
document.getElementById(id).innerHTML = value;
 }


function validation(e) {
    if (progress < 10){
    e.preventDefault();
    var foo = $("input[name=group1]:checked");
    var v = foo.attr("value");
    $("#frm")[0].reset();
    console.log(v);
    if (undefined != v) {
        progression();
    }   
    }
    $.cookie("note", note);
    window.location = "projetfin.html";
}
    

console.log(questions[0].theme);
    
function changeform(stupidquestion, radio1, radio2, radio3) {
    change("stupidquestion", stupidquestion);
    change("1radio", radio1);
    change("2radio", radio2);
    change("3radio", radio3);
}
    
function Question(intitulé,theme,repJuste,repFausse,identifiant){
    this.intitulé = intitulé;
    this.theme = theme;
    this.repJuste = repJuste;
    this.repFausse = [repFausse[0],repFausse[1]];
    this.identifiant = identifiant;
}
});