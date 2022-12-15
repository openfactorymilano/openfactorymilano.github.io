<?php
// Get the form data
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

// Set the recipient email address
$to = "open.factory00@gmail.com";

// Set the email subject
$subject = "Message from " . $name;

// Set the email headers
$headers = "From: " . $name . " <" . $email . ">\r\n";

// Send

