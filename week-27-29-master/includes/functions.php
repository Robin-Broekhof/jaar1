<?php   

function openDatabaseConn(){
    $servername= "localhost";
    $username="root";
    $password="";
    $dbname="week-27-29";
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn-> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $conn;
    }
    catch (PDOException $e){
        echo "connection failed" . $e->getMessage();
    }
}
function getAllGames(){
    $conn = openDatabaseConn();
    $stmt = $conn->prepare("SELECT * FROM games");
    $stmt->execute();
    return $result = $stmt->fetchAll();
}

function getSingleGame(){
    $conn = openDatabaseConn();
    $id = $_GET["id"];
    $stmt = $conn->prepare("SELECT * FROM games where id='$id'");
    $stmt->execute();
    return $result = $stmt->fetchAll();
}
function getAllPlans(){
    $conn = openDatabaseConn();
    $stmt = $conn->prepare("SELECT * FROM planning");
    $stmt->execute();
    return $result = $stmt->fetchAll();
}
function getSinglePlan(){
    $conn = openDatabaseConn();
    $id = $_GET["id"];
    $stmt = $conn->prepare("SELECT * FROM planning where id='$id'");
    $stmt->execute();
    return $result = $stmt->fetchAll();
}
function DeletePlan(){
    $conn = openDatabaseConn();
    $stmt = $conn->prepare("DELETE FROM planning where id='$id'");
    $stmt->execute();
}
function createPlan(){
    $conn = openDatabaseConn();
    if (isset($_POST['submit'])) {
        $spel_naam = $_POST["spel_naam"];
        $tijd = $_POST["tijd"];
        $datum = $_POST["datum"];
        $uitlegger = $_POST["uitlegger"];
        $spelers = $_POST["spelers"];
        $stmt = $conn->prepare("INSERT INTO planning (spel_naam, tijd, datum, uitlegger, spelers) VALUES (:spel_naam, :tijd, :datum, :uitlegger, :spelers);");
        $stmt->bindParam(":spel_naam", $spel_naam);
        $stmt->bindParam(":tijd", $tijd);
        $stmt->bindParam(":datum", $datum);
        $stmt->bindParam(":uitlegger", $uitlegger);
        $stmt->bindParam(":spelers", $spelers);
        $stmt->execute();
    }
}
function updatePlan(){
    if (isset($_POST['submit'])) {
    $id = $_POST['id'];
    $datum = $_POST['datum'];
    $tijd = $_POST['tijd'];
    $uitlegger = $_POST['uitlegger'];
    $spelers = $_POST['spelers'];
    $conn = openDatabaseConn();
    $stmt = $conn->prepare("UPDATE planning SET datum = :datum, tijd = :tijd, uitlegger = :uitlegger, spelers = :spelers WHERE id = '$id'");
    $stmt->bindParam(":tijd", $tijd);
    $stmt->bindParam(":datum", $datum);
    $stmt->bindParam(":uitlegger", $uitlegger);
    $stmt->bindParam(":spelers", $spelers);
    $stmt->execute();
    }
}
function getNameById(){
    $conn = openDatabaseConn();
    $stmt = $conn->prepare("SELECT * FROM games WHERE id=:id");
    $stmt->execute();
    return $stmt->fetchAll();
}

function deleteById(){
    $conn = openDatabaseConn();
    $id = $_GET['id'];

    $stmt = $conn->prepare("DELETE FROM planning WHERE id=:id");
    $stmt->bindParam(":id", $id);
    $stmt->execute();
}








