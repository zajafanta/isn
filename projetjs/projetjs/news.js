var recherches=[];//tableau contenant des chaines de caracteres correspondant aux recherches stockees
var recherche_courante;// chaine de caracteres correspondant a la recherche courante
var recherche_courante_news=[]; // tableau d'objets de type resultats (avec titre, date et url)

function ajouter_recherche()
{
	var ValeurAAjouter = $('#zone_saisie').val();	//valeur qui est dans la zone de saisie
	var zoneDeStockage = $("#recherches-stockees");// div recherches-stockees
	if(recherches.indexOf(ValeurAAjouter)==-1){
		recherches.push(ValeurAAjouter); // ajout de la valeur dans la variable global
		zoneDeStockage.append('<p class="titre-recherche"><label>'+ValeurAAjouter+'</label><img src="croix30.jpg" class="icone-croix"/></p>');
		$(".titre-recherche").click(function(event){selectionner_recherche(this);});
		$(".icone-croix").click(function(event){supprimer_recherche(this);});
		$.cookie('recherches', JSON.stringify(recherches),{expires: 1000 }); // initialisation du cookie permettant de récupérer la zone de saisie lors d'un F5

		}

}

function supprimer_recherche(e)
{
	var elem = $(e);
	elem.parent().remove();
	var label = elem.children('label').html();
	recherches.splice(label,1);
	$.cookie('recherches', JSON.stringify(recherches),{expires: 1000 });
}


function selectionner_recherche(e)
{
	recherche_courante = $(e).children('label').text();
	$('#zone_saisie').val(recherche_courante);

	// PARTIE II
	console.log($(e).text());
	var cookieName = $(e).text();
  if($.cookie(cookieName)!=undefined)
	{
		var cookie_liens = JSON.parse($.cookie($(e).text()));
		console.log(cookie_liens);
	}

	if(cookie_liens!=null){
		recherche_courante_news=cookie_liens;
		$('#resultats').text("");
		for(var i = 0;cookie_liens.length>i;i++){
			$('#resultats').append('<p class="titre_result"><a class="titre_news" href="'+recherche_courante_news[i].url+'" target="_blank">'+recherche_courante_news[i].titre+'</a><span class="date_news">'+recherche_courante_news[i].date+'</span><span class="action_news" onclick="supprime_news(this)"><img src="disk15.jpg"/></span></p>')
		}
	}
}


function init()
{

	if($.cookie('recherches')!=undefined){
		var cookie_exist = JSON.parse($.cookie('recherches'));
		for(var i = 0;cookie_exist.length>i;i++){
			$("#recherches-stockees").append('<p class="titre-recherche"><label>'+cookie_exist[i]+'</label><img src="croix30.jpg" class="icone-croix"/></p>');
			$(".titre-recherche").click(function(event){selectionner_recherche(this);});
			$(".icone-croix").click(function(event){supprimer_recherche(this);});
		}
	}

}


function recherche_nouvelles()
{
	var valSaisie = $('#zone_saisie').val();
	if($.cookie(valSaisie)!=undefined)
	{
		recherche_courante_news = JSON.parse($.cookie(valSaisie));
	}
		$('#resultats').text("");
		$('#waits').css("display","block");
		//var dataGet =  $('#zone_saisie').val(); // Contenu de la zone de saisie envoyé en parametre data
		$.ajax({
								type:"GET",
								dataType:"json",
								url:"search.php?data="+valSaisie,
								async: false,
								success : maj_resultats,
		});

}


function maj_resultats(res)
{
	$('#resultats').text("");
	for(var i=0;i<res.length;i++){
		console.log(recherche_courante_news);
		if (indexOf(recherche_courante_news,res[i])==-1){
			$('#resultats').append('<p class="titre_result"><a class="titre_news" href="'+res[i].url+'" target="_blank">'+res[i].titre+'</a><span class="date_news">'+format(res[i].date)+'</span><span class="action_news" onclick="sauve_news(this)"><img src="horloge15.jpg"/></span></p>');
		}else{
			$('#resultats').append('<p class="titre_result"><a class="titre_news" href="'+res[i].url+'" target="_blank">'+res[i].titre+'</a><span class="date_news">'+format(res[i].date)+'</span><span class="action_news" onclick="supprime_news(this)"><img src="disk15.jpg"/></span></p>');
		}

	}
		  //$('#resultats').append('<p class="titre_result"><a class="titre_news" href="'+res[i].url+'" target="_blank">'+res[i].titre+'</a><span class="date_news">'+format(res[i].date)+'</span><span class="action_news" onclick="sauve_news(this)"><img src="horloge15.jpg"/></span></p>');
}



function sauve_news(e)
{
	var elemImg = $(e).children(); //recup <img>
	$(elemImg).attr("src","disk15.jpg");
	$(e).attr("onclick","supprime_news(this)");
	var dateRecherche = $(e).prev().text(); // va chercher le contenu de la balse d'avant ( ici span)
	var titreRecherche = $(e).prev().prev().text(); // va chercher deux balises plus haut et prend le contenu
	var urlRecherche = $(e).prev().prev().attr("href"); //va chercher deux balises plus haut et choppe l'attribut href
	var rechercheSave = {titre:titreRecherche,date:dateRecherche,url:urlRecherche};
	if (indexOf(recherche_courante_news,rechercheSave)==-1)
	{
		recherche_courante_news.push(rechercheSave);
	}
	$.cookie($('#zone_saisie').val(), JSON.stringify(recherche_courante_news),{expires: 1000 });


}


function supprime_news(e)
{
	var elemImg = $(e).children(); //recup <img>
	$(elemImg).attr("src","horloge15.jpg");
	$(e).attr("onclick","sauve_news(this)");
	var dateRecherche = $(e).prev().text(); // va chercher le contenu de la balse d'avant ( ici span)
	var titreRecherche = $(e).prev().prev().text(); // va chercher deux balises plus haut et prend le contenu
	var urlRecherche = $(e).prev().prev().attr("href"); //va chercher deux balises plus haut et choppe l'attribut href
	var rechercheSuppr = {titre:titreRecherche,date:dateRecherche,url:urlRecherche};
	if (indexOf(recherche_courante_news,rechercheSuppr)!=-1)
	{
		recherche_courante_news.splice(indexOf(recherche_courante_news,rechercheSuppr,1)); // Suppr à l'index 'indexSuppr' de 1 item --->
	}
	$.cookie($('#zone_saisie').val(), JSON.stringify(recherche_courante_news),{expires: 1000 });


}
/*
<p class="titre_result">
	<a class="titre_news" href=URL target="_blank">TITRE</a>
	<span class="date_news">DATE</span>
	<span class="action_news" onclick="sauve_news(this)">
		<img src="horloge15.jpg"/>
	</span>
</p>
*/
