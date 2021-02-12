var naamPro;
function naam(){
	naamPro = prompt("Vul u naam in")
		document.write("<br>")
		document.write(naamPro)
}
function leeftijd(){
	var leeftijdPro = prompt("Vul u leeftijd in")
		document.write("<br>")
		document.write(leeftijdPro)
}




var stop = false

while(stop == false){
	naam()
	if(naamPro =="stop"){
		console.log('eerste if ingegaan');
		stop = true
	}
	else if(naamPro !="stop"){
		console.log('tweede if ingegaan');

		leeftijd()
	}
}






















