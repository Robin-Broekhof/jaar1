//De code is mischien een beetje rommelig, ik hadt alle code enzo en toen moest ik alles nest door te kopieren enzo.
//het was echt verwarend om te nesten door te plakken.

alert("Bij een keuze die je moet maken kies het nummer dat bij de keuze staat.")
alert("Je bent gestrand met je vriend Kujo op een wat lijkt een 'onbewoond' eiland.Je moet proberen te overleven todat hulp komt.")

var choice1 = prompt("Na een paar minuten te lopen op het eiland zit je een opening van een grot,jullie twijfelen om in de grot de gaan omdat er mogelijk water is. keuze 1:Je gaat naar binnen. keuze2:Je gaat niet naar binnen.");

if (choice1 == "2"){//De goeie keuzen van keuze 1
	alert("Jullie besluiten de grot niet in te gaan en verder te lopen.")
	alert("Na een tijdje lopen kom je bij een klein riviertje waar je kan drinken.")
	document.write("Je bent niet de grot ingegaan,")
	var choice2 = prompt("Na het drinken van het water voelen jullie je veel beter. keuze1:Ga je het eiland verder ontdekken. keuze2:Terug naar de plek waar jullie gestrand zijn")

	if(choice2 == "1"){//De goeie keuzen van keuze 2
	alert("Jullie lopen verder het eiland in.")
	document.write("Jullie zijn het eiland verder gaan ontdekken,")
	var choice3 = prompt("Via een afstand zie je een onbekende aapsoort stilstaan en vooruit kijken. Jullie staan redelijk ver achter hem. keuze1:Je gaat langzaam dichterbij komen. keuze2:Je vermijdt contact met de aap ")

	if (choice3 == "2"){//De goeie keuzen van keuze 3
	alert("Jullie hebben de aap gepasseerd en hebben honger, jullie zijn een konijn en proberen deze te vangen.")
	document.write("Jullie hebben de aap gepasseerd,")
	var choice4 = prompt("Jullie hebben het konijn gevangen en eten het op, het wordt langzamer hand donker maar jullie zijn moe van de dag. keuze1:Je gaat slapen. keuze2:Je gaat s'nachts verder met ontdekken")

	if (choice4 == "1"){//De goeie keuzen van keuze 4
	alert("Jullie gaan slapen.")
	alert("In de octend gaan jullie weer verder het eiland in.")
	document.write("jullie zijn gaan slapen,")
	var choice5 = prompt("Jullie lopen verder het eiland in, je hoort dat er wat apen via achter dichterbij komen jullie rennen voor jullie leven, je ziet een klein industrieel huisje in de zijkant van de berg. Keuze1:Je vlucht naar binnen. Keuze2:Je rent voorbij het huis.")

	if (choice5 == "1"){//De goeie keuzen van keuze 5
	document.write("Jullie zijn het huisje ingegaan,")
	var choice6 = prompt("Je zet het licht aan en ziet dat het erg groot is aan de binnekant en de apen blijven buitenstaan. Keuze1:Wacht tot de apen weg zijn bij de buitendeur. keuze2:Ga via de deur verder in het complex.")

	if (choice6 == "2"){//De goeie keuzen van keuze 6
	alert("Terwijl jullie door het complex lopen raakt je vriend Kujo ineens heel erg ziek en valt neer, je gaat kijken om er mischien ergens medicijen liggen. Na een paar minuten lopen zie je een gang dat lijkt op een soort ziekenhuis en gaat kijken of er medicijen liggen.")
	document.write("Jullie zijn verder het complex ingegaan,")
	var choice7 = prompt("Je kijkt via een kier naar binnen bij de ziekenhuis achtige kamer,je ziet apen in een kooi vast zitten maar ziet ook medicijen liggen die je nodig hebt. keuze1:Je gaat naar binnen en pakt snel de medicijen keuze2:Je riskeert het niet om naar binnen te gaan.  ")

	if (choice7 == "2"){//De goeie keuzen van keuze 7
	alert("Je bedenkt dat het te gevaarlijk is om je leven te riskeren.")
	alert("Je loopt terug naar je vriend en zegt dat het niet mogelijk is om de benodigde medicijen te pakken.")
	document.write("Je hebt je leven niet geriskeerd voor de medicijen,")
	var choice8 = prompt("Je hoort dat er glas wordt gebroken dat bij de voordeur is, de apen zullen in 1 minuut bij jouw en je vriend zijn wat doen je. keuze1:Je laat hem achter want hij is ziek en kan niet bewegen. keuze2:Je probeert hem draagend mee te nemen en te verstoppen voor de apen.")

	if (choice8 == "1"){//De goeie keuzen van keuze 8
	alert("Je laat je vriend achter en probeert alleen te ontsnappen.")
	alert("Te rent verder het complex in en je ziet een deur met wat lijkt op een soort hoofdkantoor kamer.")
	alert("Je loopt zonder te aarzelen de kamer binnen, op de stoel achter het bureau zie je een skelet dat waarschijnlijk van een mens is.")
	alert("Je loopt naar het skelet toe , op zijn bureau zie je een map van het eiland met een boot teken erop liggen. Daarnast ligt ook nog een pistool met een suppresor.")
	alert("Er ligt ook een map waar een helicopter icon op staat welke map pak je.")
	document.write("Je hebt je vriend achtergelaten en bent gevlucht,")
	var choice9 = prompt("keuze1:Je pakt de map met de boot keuze2:Je pakt de map met de helicopter")

	if (choice9 == "1"){//De goeie keuzen van keuze 9 -pad boot
	alert("Je gaat via een achterdeur uit het grote complex weer naar buiten je volgt de map.")
	alert("Na 10 minuten lopen kom je bij de boot en maak je je klaar om van het eiland te vetrekken.")
	alert("Achter je hoor je een geluid, je draait je om en ziet dat het je vriend is.")
	alert("Maar het valt je op dat hij raar loopt en ziet dat hij rode ogen heeft.")
	alert("Je hebt een dillema ,schiet je hem met het pistool omdat hij wel eens vijandelijk zijn net zoals de apen. Of laat je hem dichterbij komen zodat je hem mee de boot kan nemen en in een ziekenhuis kan laten behandelen als jullie weer terug zijn.")
	document.write("Je pakte de map met de boot erop,")
	var choice10 = prompt("keuze1:Je schiet hem dood. keuze2:Je laat hem dichterbij komen")

	if (choice10 == "1"){//De goeie keuzen van keuze 9-boot
	alert("Je kiest ervoor om hem te schieten, de keuze was juist terwijl hij stervend op de grond ligt lijkt het erg aggresief.")
	document.write("Je hebt je vriend geschoten en bent weggegaan van het eiland met de boot,")
	document.write("Je hebt gewonnen.")
}

		else if (choice10 == "2"){//De slechte keuzen van keuze 9-boot
		alert("Je laat hem dichterbij op de boot komen, hij staat stil en beweegt niet.")
		alert("Opeens kijkt hij op en in een muum van tijd staat die naast je en slaat die je door je torso heen en sterf je te plekken.")
		document.write("Je schiet je vriend niet en laat hem dichtbij komen,")
		document.write("Je bent gedood")
}
}
		if (choice9 == "2"){//De goeie keuzen van keuze 9 -pad heli 
		alert("Je loopt via een trap naar boven, boven aan de trap in een deur naar buiten.")
		alert("Je loopt via een klein brugtje buiten naar de helicopter.")
		document.write("Je pakt de map met de helicopter,")
		var choiceC2 = prompt("keuze1:Je stapt in de helicopter 2:je loopt terug voor geen enkele reden")

		if (choiceC2 == "1"){//De goeie keuzen van keuze C2
		alert("Je stapt de helicopter en en gaat zitten.")
		alert("De helicopter start niet wat gaan je doen")
		document.write("Je bent de helicopter ingestapt,")
		var choiceC3 = prompt("keuze1:je kijkt of de de motor wel werkt. keuze2:kijken of er geen benzine inzit.")

		if (choiceC3 == "2"){//De goeie keuzen van keuze C3
		alert("De benzine was leeg maar er stond een ton met benzine naast de heli dus vulde je hem snel vol.")
		alert("Je stijgt op en verlaat het eiland levend")
		document.write("Je gaat kijken of er genoeg benzine inzat,")
		document.write("Je hebt gewonnen.")
	}

			else if (choiceC3 == "1"){//De slechte keuzen van keuze C3
			alert("Omdat het lang duurt om naar de motor te kijken zijn de apen door de deur gekomen naar buiten")
			document.write("Je probeert te kijken naar de motor maar dat duurt te lang,")
			document.write("Je bent dood")
}
}
			else if (choiceC2 == "2"){//De slechte keuzen van keuze C2
			alert("Je loopt weer terug , maar de apen zijn ook de trap op gegaan en vermoorden je.")
			document.write("Je loopt terug voor geen enkele reden,")
			document.write("Je bent gedood")
}
}
}
		else if (choice8 == "2"){//De slechte keuzen van keuze 8
		alert("Je probeert je vriend te helpen om te verstoppen maar omdat je hem draagt ben je een stuk slomer.")
		alert("De apen komen dichterbij een in een kwestie van een paar seconden zijn jullie beide vermoord.")
		document.write("Je probeert met je vriend te vluchten maar daardoor ben je veel slomer,")
		document.write("Je bent gedood")
}
}
else if (choice7 == "1"){//De slechte keuzen van keuze 7
		alert("Terwijl je de kamer binneloopt kijken de apen in de kooien aandachtig naar jouw.")
		alert("Opeens gaat er 1 aap helemaal tekeer en komt uit zijn kooi en vermoord je.")
		document.write("Je loopt de kamer met de medicijen binnen en wordt vermoord,")
		document.write("Je bent gedood")
}
}
if (choice6 == "1"){//De slechte keuzen van keuze 6
		alert("5 minuten later.......")
		alert("De apen breken via het raam allemaal naar binnen en vermoorden jullie.")
		document.write("Je bleef bij de deur van het huisje,")
		document.write("Je bent gedood")
}
}
else if (choice5 == "2"){//De 2de route vanuit keuze 2
		alert("Jullie rennen snel voorbij en schudden de apen af.")
		alert("Jullie zien een groote gepanserde auto staan en gaan met de auto naar de andere kant van eiland.")
		alert("Na een paar minuten rijden vliegt de auto in de brand maar de deur gaat niet open.")
		document.write("Jullie rende voorbij het huisje,")
		var choiceB2 =prompt("keuze1:Blijf gewoon rustig zitten in de auto. keuze2:Probeer de deur open te maken.")

			if (choiceB2 == "1"){//de slecht keuze van keuze B2
			alert("je vliegt in de brand en gaat dood.")
			document.write("Je bleef in de auto zitten en brandde dood,")
			document.write("Je bent dood")
}
	else if (choiceB2 == "2"){//de slecht keuze van keuze van B2
			alert("je krijgt de deur niet open en brand dood in de auto.")
			document.write("Je kreeg de deur niet open en brandde dood,")
			document.write("Je bent dood")
		}

}

}
		else if (choice4 == "2"){//De slechte keuzen van keuze 4
		alert("Jullie beseffen dat het enorm dom is om s'nachts door te ontdekken en worden vermoord door de apen")
		document.write("Jullie zijn s'nachts verder gegaan met ontdekken van het eiland,")
		document.write("Je bent gedood")
}
}

		else if (choice3 == "1"){//De slechte keuzen van keuze 3
		alert("Terwijl je dichterbij kom zie je dat zijn vacht er heel raar uitziet.")
		alert("Hij draait zich om en jullie kijken elkaar recht in de ogen aan je ziet dat hij felle rode ogen heeft en valt jullie aan.")
		document.write("Jullie kwamen langzaam dichtbij de aap,")
		document.write("Je bent gedood")
}
}
else if (choice2 == "2"){//De slechte keuzen van keuze 2
		alert("Jullie lopen terug naar de plek waar jullie waren gestrand, je hoort elke keer rare geluiden in het bos van achter maar negeren het.")
		alert("Je hoort een schreeuw erg dichtbij er draai je om, je ziet een middelgrote aap staan en opeens rent heel snel op jullie af. Hij vermoord jullie.")
		document.write("Je bent terug gegaan naar de plek waar je gestrand bent,")
		document.write("Je bent gedood")
}
}
else if (choice1 == "1"){//De slechte keuzen van keuze 1
	alert("Jullie lopen de grot in en je ruikt en vreemde lucht, in het donker ziet je iets 2 roden lichtjes.")
	alert("De 2 rode lichtjes komen dichterbij en zonder dat je het kan realizeren ben je dood.")
	document.write("Je bent de grot ingegaan,")
	document.write("Je bent gedood")
}
