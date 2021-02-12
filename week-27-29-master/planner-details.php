<?php
require("includes/functions.php");
include("includes/header.php");

openDatabaseConn();
$result = getSinglePlan();
include("includes/navigate.php");
?>

<a style="display:block; width:25%; " class="btn btn-info" href="planoverzicht.php"> Terug </a>
    
   <?php foreach($result as $plan){
?>

      
    
   <h4 class="" >Naam: <?= $plan['spel_naam']?>   </h4>
   <h4 class="" >Spel id: <?= $plan['spel_id']?>   </h4>
   <h4 class="" >Tijd: <?= $plan['tijd']?>   </h4>
   <h4 class="" >Datum: <?= $plan['datum']?>   </h4>
   <h4 class="" >Uitlegger: <?= $plan['uitlegger']?>   </h4>
   <h4 class="" >Spelers: <?= $plan['spelers']?>   </h4>

   
   <?php } 
   include("includes/footer.php")
   ?>


</body>
</html>