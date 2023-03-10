<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <p>Logg inn her:</p>
    <form method="post">
        <label for="brukernavn">Brukernavn:</label>
        <input type="text" name="brukernavn" /> <br/>
        <label for="passord">Passord:</label>
        <input type="text" name="passord" /> <br/>

        <input type="submit" value="Logg inn" name="submit">
    </form>

    <p>Eller klikk <a href="registration.php">her</a> for å registere ny bruker</p>
    
</body>
<?php
    if(isset($_POST['submit'])){
        $brukernavn = $_POST['brukernavn'];
        $passord = $_POST['passord'];

        $dbs = mysqli_connect('localhost', 'root', '', 'logindb')
            or die('Error connecting to MySQL server');

        $query = "SELECT username, password from users where username='$brukernavn' and password='$passord'";

        $result = mysqli_query($dbs, $query)
            or die('Error querying database.');

        mysqli_close($dbs);

        if($result->num_rows > 0){
            header('location: Home.html');
        }else{
            header('location:failure.html');
        }
    }
?>
</html>