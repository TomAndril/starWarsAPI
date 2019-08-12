<?php
$to = "acatomas@gmail.com"; // Student e-mail
$from = $_POST['email']; // This is the sender's Email address
$first_name = $_POST['nombre']; // This is the sender's Name
$subject = "Email de Star Wars API";
$comments = $first_name . ' te dijo: ' . $_POST['comentarios'];
$headers = "From:" . $from;
$email = mail($to,$subject,$comments,$headers);
if(!$email){
  echo "Hubo un error al procesar tu email, detalle del error". $email; 
}
?>