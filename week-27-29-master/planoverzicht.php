<?php
require("includes/functions.php");
include("includes/header.php");

openDatabaseConn();
$result = getAllPlans();
//$result2 = getNameById();
include("includes/navigate.php");
?>


<?php  foreach($result as $planner){ ?>
    <div class="row ">
        <div class="col-6 card mb-5 pr-0">
            <h4 class="card-title ">Spel naam: <?= $result2['spel_naam'] ?> </h4>
            <h4 class="card-title ">Tijd: <?= $planner['tijd'] ?> </h4>
            <h4 class="card-title ">Datum: <?= $planner['datum'] ?> </h4>
            <p class="card-text">Uilegger: <?= $planner['uitlegger'] ?> </p>
            <p class="card-text">Spelers: <?= $planner['spelers'] ?> </p>

            <div class="">
             <?php echo "<a href='delete-planner.php?id={$planner['id']}'"?> class="btn btn-danger w-50">Verwijder</a>
             <?php echo "<a href='update-planner.php?id={$planner['id']}'"?> class="btn btn-warning w-50">Update</a>
            </div>
            <?php echo "<a href='planner-details.php?id={$planner['id']}'"?> class="btn btn-info card-text">Meer details</a> 


        </div>
    </div>

<?php } 
include("includes/footer.php")
?>


</body>
</html>