<?php
require("includes/functions.php");
include("includes/header.php");

openDatabaseConn();
$result = getSingleGame();
include("includes/navigate.php");
?>

<a style="display:block; width:25%; " class="btn btn-info" href="index.php"> Terug </a>

   <?php foreach($result as $game){
?>

    <img class="w-25" src="img/<?= $game['image']?>">
    <h4 class="" >Naam: <?= $game['name']?>   </h4>
    <h4 class="" >Mininmaal aantal spelers: <?= $game['min_players']?>   </h4>
    <h4 class="" >Maximaal aantal spelers: <?= $game['max_players']?>   </h4>
    <h4 class="" >Speeltijd: <?= $game['play_minutes']?>   </h4>
    <h4 class="" >Uitlegtijd: <?= $game['explain_minutes']?>   </h4>
    <h4 class="" >Type: <?= $game['skills']?>   </h4>
    <h4 class="" >Website link: <?= $game['url']?>   </h4>
    <h4 class="" >Uitbreiding: <?= $game['expansions']?>   </h4>
    <p class="" > <span style="font-size: 24px; font-weight:600"> Beschrijving: </span> <?= $game['description']?>   </p>
    <h4 class="" >Youtube: <?= $game['youtube']?>   </h4>


   <?php } 
   include("includes/footer.php")
   ?>


</body>
</html>