  <!DOCTYPE html>
  <html>
    <head>
      <link rel="stylesheet" type="text/css" href="tablas.css">
    </head>
    <body>
        <?php
            function factorial($n)
            {
                if($n == 0 || $n == 1)
                    return 1;
                else
                    return $n * factorial($n - 1);
            }

            $n = $_POST["n"];
            $sum = 0.0;
        ?>
        
        <h2>Aproximación de e con <?php echo $n; ?> iteraciones</h2>
        
        <table border="1">
            <tr>
                <th>Iteración</th>
                <th>Valor aproximado de e</th>
            </tr>
            
            <?php
            for($i = 0; $i < $n; $i++)
            {
                $sum += 1/factorial($i);
                $aproximacion = sprintf('%.15f', $sum);
                echo "<tr>";
                echo "<td>" . ($i + 1) . "</td>";
                echo "<td>" . $aproximacion . "</td>";
                echo "</tr>";
            }
            ?>
        </table>
        
        <?php
            $resultado_final = sprintf('%.15f', $sum);
        ?>
        <br><br>
        <strong>Valor final aproximado de e: <?php echo $resultado_final; ?></strong>
    </body>
  </html>