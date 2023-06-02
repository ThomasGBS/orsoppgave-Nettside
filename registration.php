<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
</head>
<body>
<p>Registrer deg her:</p>
    <form method="post">
        <label for="brukernavn">Brukernavn:</label>
        <input type="text" name="brukernavn" recuired > <br/>
        <label for="passord">Passord:</label>
        <input type="text" name="passord" recuired> <br/>

        <input type="submit" value="Registrer" name="submit">
    </form>

    <p>Eller klikk <a href="index.php">her</a> for å logge inn</p>
</body>

<?php 
    if(isset($_POST['submit'])){

        $brukernavn = $_POST['brukernavn'];
        $passord = $_POST['passord'];

        if($brukernavn != "" && $passord != ""){
            $dbc = mysqli_connect('10.2.3.53', 'thomasg', 'Thomas', 'thomasg')
            or die('Error connecting to MySQL server.');

            $query = "INSERT INTO users VALUES ('$brukernavn', '$passord', NULL)";

            $result = mysqli_query($dbc, $query)
                or die('Error querying database.');

            mysqli_close($dbc);

            if($result){
                echo "Takk for at du lagde bruker! Trykk <a href='index.php'> her </a> for à logge inn";
            }else{
                echo "Noe gikk galt, prov igjen!";
            }
            }

        
    }
    
?>
</html>