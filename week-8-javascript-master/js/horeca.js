	//dit zijn de begin waarde van de items
var fris_aantal = 0;
var wijn_aantal = 0;
var bier_aantal = 0;
var bitterbal_aantal8 = 0;
var bitterbal_aantal16 = 0;
	//dit zijn de const prijzen van de items
const fris_prijs =2;
const wijn_prijs =4;
const bier_prijs =2.50;
const bitterbal_prijs8 =2.70;
const bitterbal_prijs16 =4.90;
	//dit zijn de var voor de totaalprijzen
var totaalprijs_fris = fris_aantal * fris_prijs
var totaalprijs_wijn = wijn_aantal * wijn_prijs
var totaalprijs_bier = bier_aantal * bier_prijs
var totaalprijs_bb8 = bitterbal_aantal8 * bitterbal_prijs8
var totaalprijs_bb16 = bitterbal_aantal16 * bitterbal_prijs16

var totaalprijs = totaalprijs_fris + totaalprijs_wijn +totaalprijs_bier + totaalprijs_bb8 + totaalprijs_bb16


function bestelling(){
	var vraag1 = prompt("Wat wilt u bestellen fris, wijn, bier of snacks")
			//als er fris is ingevoerd bij vraag1
		if(vraag1 == "fris"){
			fris_aantal = parseInt (prompt("Hoeveel fris wilt u?"));
				document.write("aantal bestelde fris = " + " " + fris_aantal + "<br>")
				console.log("fris =" +" "+ fris_aantal)
				alert("De bestelling is toegevoegd.");
				bestelling();
		}
			//als er wijn is ingevoerd bij vraag1
		else if(vraag1 == "wijn"){
			wijn_aantal = parseInt (prompt("Hoeveel wijn wilt u?"));
					document.write("aantal bestelde fris = " + " " + wijn_aantal + "<br>")
					console.log("wijn =" +" "+ wijn_aantal)
					alert("De bestelling is toegevoegd.");
					bestelling();
		}
			//als er bier is ingevoerd bij vraag1
		else if(vraag1 == "bier"){
			bier_aantal = parseInt (prompt("Hoeveel bier wilt u?"));
					document.write("aantal bestelde bier = " + " " + bier_aantal + "<br>")
					console.log("bier =" +" "+ bier_aantal)
					alert("De bestelling is toegevoegd.");
					bestelling();
		}

			//als er snacks is ingevoerd bij vraag1
		else if(vraag1 == "snacks"){
			vraag2 = prompt("Hoeveel bitterballen wilt u bestellen 8 of 16")

				if(vraag2 == 8){
					bitterbal_aantal8 = parseInt (prompt("Hoeveel bitterbalschalen van 8 wilt u bestellen?"))
						document.write("aantal bestelde bitterbal8 = " + " " + bitterbal_aantal8 + "<br>")
						console.log("bitterbal8 =" +" "+ bitterbal_aantal8)
						alert("De bestelling is toegevoegd.");
						bestelling();
				}

				else if(vraag2 == 16){
					bitterbal_aantal16 = parseInt (prompt("Hoeveel bitterbalschalen van 16 wilt u bestellen?"))
						document.write("aantal bestelde bitterbal8 = " + " " + bitterbal_aantal16 + "<br>")
						console.log("bitterbal8 =" +" "+ bitterbal_aantal16)
						alert("De bestelling is toegevoegd.");
						bestelling();
				}

				else{
					alert("U kunt alleen een keuze maken tussen 8 en 16.");
					bestelling_f();
				}
		}
			//als je een verkeerde invoer heb gedaan bij vraag1






		else if(vraag1 == "stop"){
			document.write("totale prijs =" + " " + totaalprijs + "<br>")
		}









		else{
			alert("U kunt alleen kiezen tussen fris, wijn, bier of snacks")
			bestelling();
		}




































}
bestelling()