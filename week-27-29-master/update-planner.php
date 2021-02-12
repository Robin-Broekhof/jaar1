<?php
require("includes/functions.php");
include("includes/header.php");
include("includes/navigate.php");

openDatabaseConn();
$result = getSinglePlan();
$id = $_GET['id'];

?>


<form action="update-planner2.php" method="post">

    
    <?php foreach($result as $plan){ ?>
    <br>
    <label for='datum'>Start datum:</label><input type='date' name='datum' id='startDatum' value="<?=$plan['datum']?>"><br>
    <label for='tijd'>Start tijd:</label><input type="time"  name="tijd" id="startTime" value="<?=$plan['tijd']?>"><br>
    <label for='uitlegger'>Hoofdspeler:</label><input type="text" name="uitlegger" id="hostName" value="<?=$plan['uitlegger']?>"><br>
    <label for='spelers'>Deelnemers:</label><input type="text" name="spelers" id="Players" value="<?=$plan['spelers']?>"><br>
    <input type="number" name="id" value="<?php echo $id ?>" hidden>
    
    <button name="submit" type='submit'>Submit</button>
</form>


<?php
    }
    ?>





<?php
include("includes/footer.php")
?>


</html>