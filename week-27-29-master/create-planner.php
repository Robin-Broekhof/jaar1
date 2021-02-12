<?php
require("includes/functions.php");
include("includes/header.php");
include("includes/navigate.php");

$result = getAllGames();
$creater = createPlan();
$conn = openDatabaseConn();



?>

<form method="POST">
    <label  for='spel_naam'>Kies het spel</label>

    <select name="spel_naam" id="spel_naam">
        <?php foreach($result as $name){ 
            echo "<option value='" . ($name['id']) . "'>" . ($name['name']) . "</option>";
        } ?>
    </select>
    <h1> Hallo</h1>
    
    <br>
    <label for='datum'>Start datum:</label><input type='date' name='datum' id='startDatum'><br>
    <label for='tijd'>Start tijd:</label><input type="time" name="tijd" id="startTime"><br>
    <label for='uitlegger'>Hoofdspeler:</label><input type="text" name="uitlegger" id="hostName" placeholder="Lisa"><br>
    <label for='spelers'>Deelnemers:</label><input type="text" name="spelers" id="Players" placeholder="Lisa, Ronald, Eric"><br>

    <button name="submit" type='submit'>Submit</button>
</form>

<?php
include("includes/footer.php")
?>









