<?php

include("config.php");

if (isset($_POST['suscripcion'])){
    if(strlen($_POST['name']) >= 1  && strlen($_POST['correo']) >= 1){
        $nombre = trim($_POST['name']);
        $correo = trim($_POST['correo']);
        $fecha_reg = date("d/m/y");
        $consulta = "INSERT INTO suscriptores(nombre, correo, fecha_reg) VALUES ('$nombre','$correo', '$fecha_reg')";
        
        $resultado = mysqli_query($conn, $consulta);

        if($resultado) {
            echo "¡Te has suscrito exitosamente!";
        }
        else{
            echo "Error al suscribirse: " . $conn->error;
        }
    } else{
        echo "¡Por favor complete los campos";
    }
}

?>