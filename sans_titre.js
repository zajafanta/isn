var questions;

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "questions.json", true);
oReq.send();

function reqListener(e) {
    treeData = JSON.parse(this.responseText);
}
console.info(treeData);
