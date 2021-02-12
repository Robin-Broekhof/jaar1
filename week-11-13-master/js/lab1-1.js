var weekdagen = ["Maandag, " ,"Dinsdag, " ,"Woensdag, " ,"Donderdag, " ,"Vrijdag, " ,"Zaterdag, " ,"Zondag"] 
var werkdagen = ["Maandag, " ,"Dinsdag, " ,"Woensdag, " ,"Donderdag, " ,"Vrijdag"] 
var weekenddagen = ["Zaterdag, " ,"Zondag"] 
var weekdagen_omgekeerd = ["Zondag, " ,"Zaterdag, " ,"Vrijdag, " ,"Donderdag, " ,"Woensdag, " ,"Dinsdag, " ,"Maandag"] 
var werkdagen_omgekeerd = ["Vrijdag, " ,"Donderdag, " ,"Woensdag, " ,"Dinsdag, " ,"Maandag"] 
var weekenddagen_omgekeerd = ["Zondag, " ,"Zaterdag"]





var h2_tekst1 = document.getElementById("weekdagen_h2");
for(i=0;i <7;i++){
	h2_tekst1.innerHTML += weekdagen[i];
}

var h2_tekst2 = document.getElementById("werkdagen_h2");
for(i=0;i <5;i++){
	h2_tekst2.innerHTML += werkdagen[i];
}

var h2_tekst3 = document.getElementById("weekenddagen_h2");
for(i=0;i <2;i++){
	h2_tekst3.innerHTML += weekenddagen[i];
}


var h2_tekst4 = document.getElementById("weekdagen_omgekeerd_h2");
for(i=0;i <7;i++){
	h2_tekst4.innerHTML += weekdagen_omgekeerd[i];
}


var h2_tekst5 = document.getElementById("werkdagen_omgekeerd_h2");
for(i=0;i <5;i++){
	h2_tekst5.innerHTML += werkdagen_omgekeerd[i];
}


var h2_tekst6 = document.getElementById("weekenddagen_omgekeerd_h2");
for(i=0;i <2;i++){
	h2_tekst6.innerHTML += weekenddagen_omgekeerd[i];
}








