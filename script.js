function change(id, value) {
document.getElementById(id).innerHTML = value;
 }


function readTextFile(file)
{
	var allText;
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
           }
        }
    }
    rawFile.send(null);
    return allText;
}

function load() {
    var rawQuestions = readTextFile("https://paste.teknik.io/Raw/7pqun");
    alert(rawQuestions);
	var questions = JSON.parse(rawQuestions);
	console.log(questions[0].id);
	console.log(questions[0].themeQuestion);
	console.log(questions[0].contenuQuestion);
	console.log(questions[1].contenuQuestion);
}

$("#submit").onclick(process);

function process() {
    a
}