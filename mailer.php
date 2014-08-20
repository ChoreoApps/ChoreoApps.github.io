<?php
if(isset($_POST['submit'])) {
$to = "alex.lakas@gmail.com";
$subject = "Choreo rules!";
$email_field = $_POST['email'];
 
$body = "E-Mail: $email_field";
 
echo "Sent to $to!";
mail($to, $subject, $body);
} else {
echo "uh-oh!";
}
?>