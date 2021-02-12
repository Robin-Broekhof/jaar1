<?php
require("includes/functions.php");
include("includes/header.php");

openDatabaseConn();
$result = getAllGames();

include("includes/navigate.php")
?>



<?php  foreach($result as $games){ ?>
    <div class="row">
        <div class="col-6 card mb-5 pr-0">
            <img class="w-25" src="img/<?= $games['image'] ?>">
            <h4 class="card-title "> <?= $games['name'] ?> </h4>
            <p class="card-text"> <?= $games['description'] ?> </p>

    <?php echo "<a href='game-details.php?id={$games['id']}'"?> class="btn btn-info card-text">Meer details</a> 


        </div>
    </div>

<?php } 
include("includes/footer.php")
?>

</body>
</html>