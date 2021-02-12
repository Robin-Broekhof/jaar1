<?php
	date_default_timezone_set("Europe/Amsterdam");
	$time = date("H");
	$text = "";
	$background = "";



	if($time <6 ){
		$text = "Goede nacht!";
		$background = "img/night.png";
	}

	elseif($time >=6 && $time <12 ){
		$text = "Goede morgen!";
		$background = "img/morning.png";
	}

	elseif($time >=12 && $time <18 ){
		$text = "Goede middag!";
		$background = "img/afternoon.png";
	}

	elseif($time >=18){
		$text = "Goede avond!";
		$background = "img/evening.png";
	}





?>







<!DOCTYPE html>
<html lang="en">
	<head>
		 <title>Php clock</title>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="style.css" type="text/css">
	</head>

	<body>

		<img src="<?= $background?>" class="foto">

		<div class="tekst"> 
			<h1 id="groot"> <?= $text?> </h1>
			<h1> <?= "Het is nu "    .date("H:i") ?>    </h1>
		</div>

	</body>


</html>



