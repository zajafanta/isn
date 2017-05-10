var questionsJSON = [
    {
    "theme": "t1",
    "repFausse":["repFausse 1","repFausse 2"],
    "repJuste": "juste",
    "id":1
  },
  {
   "theme": "t2",
    "repFausse":["repFausse 1","repFausse 2"],
    "repJuste": "juste ",
    "id":2
  }
];
var questions = [];

for(var i=0;i<questionsJSON.length;i++){
    questions[i] = new Question(questionsJSON[i].theme,questionsJSON[i].repJuste,questionsJSON[i].repFausse);
}

console.log(questions);

function Question(,repJuste,repFausse){
    this.theme = theme;
    this.repJuste = repJuste;
    this.repFausse = [repFausse[0],repFausse[1]];
    this.id = id;
}