var item = document.getElementById("img");
var keuze1 = document.getElementById("button1")
var keuze2 = document.getElementById("button2")
var keuze3 = document.getElementById("button3")
var title = document.getElementById("title")
var description = document.getElementById("description")
var inventory = document.getElementById("inventoryItem")
var keuzes = document.getElementById("game-buttons")
var item_grab = false

function start1(){
	title.innerText = "In het bos"
	title.style.color = "white"
	description.innerText = "Je maakt een wandeling door een bos. \n Het is een mistige dag en vooral in het bos in het mistig. \n Dit bos staat bekent om waarneming van paranormaal verschijnselen. \n Maar je was nooit afgeschrikt om daardoor niet het bos in te gaan. \n Je hoort allemaal rare geluiden en ziet dingen in de mist."
	description.style.color = "white"
	keuze1.innerText = "verder"
	keuze2.style.display = "none"
	keuze3.style.display = "none"
	document.body.style.backgroundImage = "url(img/start.jpg"
	inventory.style.display = "none" 
	keuze1.onclick = start2;





}


start1()


function start2(){
	title.innerText = "In het bos"
	title.style.color = "white"
	description.innerText = "Je loopt altijd hetzelfde pad door het bos, maar dit keer is er iets anders. \n Je bent op een hele andere pad belandt en bent verdwaald. \n Je hoort rare geluiden en vermoedt dat dit paranormale verschijnselen zijn."
	description.style.color = "white"
	keuze1.innerText = "start het spel"
	keuze2.style.display = "none"
	keuze3.style.display = "none"
	document.body.style.backgroundImage = "url(img/start.jpg"
	keuze1.onclick = level1;
}








function level1(){
	console.log("level")
	title.innerText = "Level1"
	keuze1.style.display = "inline-block"
	keuze2.style.display = "inline-block"
	keuze3.style.display = "inline-block"
	title.style.color = "white"
	description.innerText = "In de verte zie je een soort gele gas dichterbij komen. \n\n Wat doe je? \n Keuze1: Je probeert terug te lopen waar je eerst was. \n Keuze2: Je gaat het pad af en loopt langs de bomen. \n Keuze3: Je loopt door de gele mist heen."
	description.style.color = "white"
	keuze1.innerText = "keuze1"
	keuze2.innerText = "keuze2"
	keuze3.innerText = "keuze3"
	document.body.style.backgroundImage = "url(img/level1.jpg" 
	keuze1.onclick = bad_end; //wip
	keuze2.onclick = level2;
	keuze3.onclick = bad_end;
}



function level2(){
	console.log("level2")
	title.innerText = "Level2"
	keuze1.style.display = "inline-block"
	keuze2.style.display = "inline-block"
	keuze3.style.display = "inline-block"
	title.style.color = "white"
	description.innerText = "Je loopt van het pad en ziet een groot huis staan in de verte. \n\n  Wat doe je? \n  Keuze1: Je loopt op het huisje af.  \n Keuze2: Je loopt voorbij het huisje dieper de bossen in."
	description.style.color = "white"
	keuze1.innerText = "keuze1"
	keuze2.innerText = "keuze2"
	keuze3.style.display = "none"
	document.body.style.backgroundImage = "url(img/level2.jpg" 
	keuze1.onclick = level3;
	keuze2.onclick = bad_end;
}

function level3(){
	console.log("level3")
	title.innerText = "Level3"
	keuze1.style.display = "inline-block"
	keuze2.style.display = "inline-block"
	keuze3.style.display = "inline-block"
	title.style.color = "white"
	description.innerText = "Je bent dicht bij het huisgekomen je ziet de de voordeur op een kier staat. \n\n  Wat doe je? \n  Keuze1: Je gaat via de voordeur naar binnen. \n Keuze2: Je gaat via een raam naar binnen. "
	description.style.color = "white"
	keuze1.innerText = "keuze1"
	keuze2.innerText = "keuze2"
	keuze3.style.display = "none"
	document.body.style.backgroundImage = "url(img/level3.jpg" 
	keuze1.onclick = bad_end;
	keuze2.onclick = level4;
}

function level4(){
	console.log("level4")
	title.innerText = "Level4"
	keuze1.style.display = "inline-block"
	keuze2.style.display = "inline-block"
	keuze3.style.display = "inline-block"
	title.style.color = "green"
	description.innerText = "Je bent het huis binnegegaan je loopt heel voorzichtig door het huis heen. \n Je hoort een raar geluid vanuit de kelder komen, en soort gehuil. \n\n  Wat doe je? \n  Keuze1: Je gaat de kelder naar binnen.  \n Keuze2: Je loopt een andere kamer binnen.  \n Keuze3: Je gaat naar de bovenverdieping."
	description.style.color = "green"
	keuze1.innerText = "keuze1"
	keuze2.innerText = "keuze2"
	keuze3.innerText = "keuze3"
	document.body.style.backgroundImage = "url(img/level4.jpg" 
	keuze1.onclick = bad_end;
	keuze2.onclick = level6;
	keuze3.onclick = level5;
}

function level5(){
	console.log("level5")
	title.innerText = "Level5"
	keuze1.style.display = "inline-block"
	keuze2.style.display = "inline-block"
	keuze3.style.display = "inline-block"
	title.style.color = "white"
	description.innerText = "Je bent op de zolder , mischien ligt er iets dat je kunt gebruiken. \n\n  Wat doe je? \n  Keuze1:Je loopt terug"
	description.style.color = "white"
	keuze1.innerText = "keuze1"
	keuze2.style.display = "none"
	keuze3.style.display = "none"
	document.body.style.backgroundImage = "url(img/level5.jpeg"
	keuze2.onclick = level6;
	var item_mask = document.createElement("img");	
	document.getElementById("game-container").appendChild(item_mask)
	item_mask.src = "img/gasmask.jpg";
	item_mask.id = "item1";
	item1.onclick = function(){
		document.getElementById("item1").style.display = "none";
		item_grab = true
		console.log(item_grab)
	}
	keuze1.onclick = function(){
		document.getElementById("item1").style.display = "none";
		level6();
	}
}

function level6(){
	console.log("level6")
	title.innerText = "Level6"
	keuze1.style.display = "inline-block"
	keuze2.style.display = "inline-block"
	keuze3.style.display = "inline-block"
	title.style.color = "white"
	description.innerText = "De geluiden vanuit de kelder worden steeds luider van doe je.\n\n  Wat doe je? \n  Keuze1: Je verlaat het huis. \n Keuze2: Je gaat kijken in de kelder."
	description.style.color = "white"
	keuze1.innerText = "keuze1"
	keuze2.innerText = "keuze2"
	keuze3.style.display = "none"
	document.body.style.backgroundImage = "url(img/level6.jpg" 
	keuze1.onclick = level7;
	keuze2.onclick = bad_end;
}

function level7(){
	console.log("level7")
	title.innerText = "Level7"
	keuze1.style.display = "inline-block"
	keuze2.style.display = "inline-block"
	keuze3.style.display = "inline-block"
	title.style.color = "white"
	description.innerText = "Je gaat het huis en ziet dat de mist dichterbij komt. \n\n  Wat doe je? \n  Keuze1: Je loopt terug naar het begin. \n Keuze2: Je loopt verder het bos in."
	description.style.color = "white"
	keuze1.innerText = "keuze1"
	keuze2.innerText = "keuze2"
	keuze3.style.display = "none"
	document.body.style.backgroundImage = "url(img/level7.jpg" 
	keuze1.onclick = level8;
	keuze2.onclick = bad_end;
}

function level8(){
	console.log("level8")
	title.innerText = "Level8"
	keuze1.style.display = "inline-block"
	keuze2.style.display = "inline-block"
	keuze3.style.display = "inline-block"
	title.style.color = "white"
	description.innerText = "Je loopt terug en je ziet de mist. \n\n  Wat doe je? \n  Keuze1: Je gaat door de mist lopen. \n Keuze2: Je loopt naar de ander kant van het pad. "
	description.style.color = "white"
	keuze1.innerText = "keuze1"
	keuze2.innerText = "keuze2"
	keuze3.style.display = "none"
	document.body.style.backgroundImage = "url(img/level8.jpg" 
	keuze2.onclick = level10;
	keuze1.onclick = level9;

}

function level9(){
	if(item_grab == true){
		console.log("level9")
		title.innerText = "Level9"
		keuze1.style.display = "inline-block"
		keuze2.style.display = "inline-block"
		keuze3.style.display = "inline-block"
		title.style.color = "white"
		description.innerText = "Je loopt door de gas heen achter hoor je een vreemd geluid. \n\n  Wat doe je? \n  Keuze1: Je rent weg zonder achterom te kijken. \n Keuze2: Je kijkt achter je terwijl je rent. "
		description.style.color = "white"
		keuze1.innerText = "keuze1"
		keuze2.innerText = "keuze2"
		keuze3.style.display = "none"
		document.body.style.backgroundImage = "url(img/level9.jpg" 
		keuze1.onclick = good_end;
		keuze2.onclick = bad_end;
	}
	else{
		 bad_end();
	}
}

function level10(){
	console.log("level10")
	title.innerText = "Level10"
	keuze1.style.display = "inline-block"
	keuze2.style.display = "inline-block"
	keuze3.style.display = "inline-block"
	title.style.color = "white"
	description.innerText = "Je loopt terug en hoort een raar geluid uit wat borjes. \n\n  Wat doe je? \n  Keuze1: Je gaat voorzichtig dichterbij de borjes komen.  \n Keuze2: Je rent weg."
	description.style.color = "white"
	keuze1.innerText = "keuze1"
	keuze2.innerText = "keuze2"
	keuze3.style.display = "none"
	document.body.style.backgroundImage = "url(img/level10.jpg" 
	keuze1.onclick = bad_end;
	keuze2.onclick = bad_end;
}

function good_end(){
	title.innerText = "einde"
	keuze1.style.display = "inline-block"
	keuze2.style.display = "inline-block"
	keuze3.style.display = "inline-block"
	title.style.color = "white"
	description.innerText = "Je bent weer terug op een pad dat je herkent en achter je is geen mist te bekennen. \n"
	description.style.color = "white"
	keuze1.style.display = "none"
	keuze2.style.display = "none"	
	keuze3.style.display = "none"
	document.body.style.backgroundImage = "url(img/good_end.jpg"
}

function bad_end(){
	title.innerText = "Je bent vermist geraakt en je lichaam is nog gevonden."
	title.style.color = "white"
	description.innerText = ""
	description.style.color = "white"
	keuze1.innerText = "probeer het opnieuw"
	keuze2.style.display = "none"
	keuze3.style.display = "none"
	document.body.style.backgroundImage = "url(img/bad_end.jpg" 
	keuze1.onclick = level1
}