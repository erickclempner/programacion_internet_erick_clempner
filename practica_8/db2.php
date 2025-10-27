<?php
    $servername = "db";
    $username = "root";
    $password = "Pachicolipato24";
    $dbname = "autoss"; 

    
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    // Check connection
    if (mysqli_connect_errno()) {
        die("Failed to connect to MySQL: " . mysqli_connect_error());
    }

    $result = mysqli_query($conn, "SELECT c.id, m.nombre AS modelo, u.nombre AS usuario, c.folio
                                    FROM compra c
                                    JOIN modelo m   ON m.id = c.idModelo
                                    JOIN usuarios u ON u.id = c.idUsuario"
    );

    if (!$result) {
        die("Query Failed: " . mysqli_error($conn));
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Database Connection</title>
    <style>
        /* un poco de estilo */
        table { border-collapse: collapse; width: 50%; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
    </style>
</head>
<body>

    <table>
        <tr>
            <th>ID</th>
            <th>ID Modelo</th>
            <th>ID Usuario</th>
            <th>Folio</th>
        </tr>
        <?php
            if (mysqli_num_rows($result) > 0) {
                while($row = mysqli_fetch_array($result)) {
                    echo "<tr>";
                    echo "<td>" . htmlspecialchars($row['id']) . "</td>";
                    echo "<td>" . htmlspecialchars($row['modelo']) . "</td>";
                    echo "<td>" . htmlspecialchars($row['usuario']) . "</td>";
                    echo "<td>" . htmlspecialchars($row['folio']) . "</td>";
                    echo "</tr>";
                }
            } else {
                echo "<tr><td colspan='4'>No hay resultados en la tabla compra.</td></tr>";
            }
        ?>
    </table>

</body>
</html>

<?php
    mysqli_close($conn);
?>