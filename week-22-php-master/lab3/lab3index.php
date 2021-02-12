<!DOCTYPE html>
<html lang="en">
	<head>
		 <title>Welcome</title>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="lab3style.css" type="text/css">
	</head>
	<body>
		<form method="POST">
	 		<label for="gebruikersnaam">Gebruikersnaam:</label><br>
			<input type="text" id="gebruikersnaam" name="naam" required/ ><br>
			<label for="email">E-mail:</label><br>
			<input type="email" id="email" name="email" required/ ><br>
			<input type="submit" id="submit">
		</form>
	</body>
</html>
<?php
	print("gebruikersnaam: $_POST[naam] <br>");
	print("e-mail: $_POST[email]");
?>
