<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "freekyajmal@gmail.com"; // Replace with your email address
  $subject = "Contact Form Submission";
  $body = "Name: $name\nEmail: $email\nMessage: $message";

  if (mail($to, $subject, $body)) {
    echo "Thank you for your message!";
  } else {
    echo "Error sending email. Please try again later.";
  }
}
?>
