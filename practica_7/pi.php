  <!DOCTYPE html>
  <html>
    <body>
        <?php
            $n = $_POST["n"];
            $sum = 0.0;
            for($i = 0; $i < $n; $i++)
            {
                $sum += (pow(-1, $i))/(2 * $i + 1);
            }
            $sum *= 4;
            $resultado = sprintf('%.15f', $sum);
        ?>
      Valor aproximado de pi: <?php echo $resultado; ?>
    </body>
  </html>