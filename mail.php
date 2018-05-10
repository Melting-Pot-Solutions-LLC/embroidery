<?php

    $submit = $_POST['submit'];
    $name = $_POST['username'];
    $email = $_POST['email_address'];
    $subject = $_POST['subject'];
    $phone = $_POST['phone'];
    $budge = $_POST['budge'];
    $message = $_POST['messages'];
    
    $full_messages = $name . '<br/>' . $phone . '<br/>' . $message;

    if(isset($submit)){
      if ( $name == "" || $email=="" || $message=="" || $subject=="" || $phone=="" || $budge=="" )
          {
          echo "All fields are required, please fill <a href=\"\">the form</a> again.";
          }
      else{
          $from = "From: $name<$email>\r\nReturn-path: $email";
          $subject = "Dol Contact";
          mail("admin@bootstrapcafe.net", $subject, $full_messages, $from);
          header('Location: thank-you.html#contact');
        }
    }
?>