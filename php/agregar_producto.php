<?php

include ("config.php");

// Manejo de la solicitud de agregar al carrito
if (isset($_POST['agregar_carrito'])) {
    $producto_id = $_POST['producto_id'];

    // Añadir el producto al carrito (puedes ajustar esta lógica según tu estructura de base de datos)
    $sql = "INSERT INTO carrito (id_producto, cantidad) VALUES ('$producto_id', '1')";

    if ($conn->query($sql) === TRUE) {
        echo "Producto agregado al carrito con éxito";
    } else {
        echo "Error al agregar producto al carrito: " . $conn->error;
    }
}

$conn->close();
?>