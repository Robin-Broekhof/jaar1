<?php
    $servername= "localhost";
    $username="root";
    $password="";
    $dbname="week-24-25";


try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn-> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

}
catch (PDOException $e){
    echo "connection failed" . $e->getMessage();
}
$query = $conn->prepare('SELECT * FROM characters ORDER BY name');
$query->execute();
$result = $query->fetchall();

$statement = $conn->prepare('SELECT COUNT(*) FROM characters');
$statement->execute();
$count = $statement->fetchAll();


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>All Characters</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link href="resources/css/style.css" rel="stylesheet"/>
</head>
<body>
<header>
<h1>All <?= $count[0][0] ?> characters</h1>

</header>
<div id="container">
    <?php
        foreach($result as $name){
    ?>
    <img src="resources/images/<?php echo $name["avatar"]?>"  id="image" style="height:100px ; width:100px ; border-radius:50%">
    <?php
                echo "<a href='character.php?id={$name['id']}' href='character.php'>" . $name['name']."</a>"." &emsp;"."<i class=\"fas fa-heart\"></i>".$name['health'] ." &emsp;"."<i class=\"fas fa-fist-raised\"></i>" . $name['attack'] . " &emsp;"."<i class=\"fas fa-shield-alt\"></i>" . $name['defense'] . "<br>" . "<br>";
            }?>



    <a class="item" href="character.php">
        
    </a>
</div>
<footer>&copy; [Robin Broekhof] 2020</footer>
</body>
</html>