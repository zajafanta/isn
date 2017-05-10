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
}
    
    progression();

    
function change(id, value) {
document.getElementById(id).innerHTML = value;
 }


function validation(e) {
   // e.preventDefault();
    var foo = $("input[name=group1]:checked").attr("value");
    console.log(foo);
    if (undefined != foo) {
        progression();
    }
}
    

console.log(questions[0].theme);
    
function changeform(stupidquestion, radio1, radio2, radio3) {
    change("stupidquestion", stupidquestion);
    change("radio1", radio1);
    change("radio2", radio2);
    change("radio3", radio3);
}
    
function Question(intitulé,theme,repJuste,repFausse,identifiant){
    this.intitulé = intitulé;
    this.theme = theme;
    this.repJuste = repJuste;
    this.repFausse = [repFausse[0],repFausse[1]];
    this.identifiant = identifiant;
}
});