<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $typeOfGarment = implode(', ', $_POST['typeOfGarment']);
        $howManyDoYouNeed = implode(', ', $_POST['howManyDoYouNeed']);
        $whichDoYouPrefer = implode(', ', $_POST['whichDoYouPrefer']);
        
        $howManyColorsOne = trim($_POST['howManyColorsOne']);
        $howManyColorsSecond = trim($_POST['howManyColorsSecond']);
        
        $calendar_date = date('Y-m-d', strtotime(trim($_POST['calendar'])));
        
        $firstName = trim($_POST['firstName']);
        $lastName = trim($_POST['lastName']);
        $email = trim($_POST['email']);
        $phone = trim($_POST['phone']);
        

        // Check that data was sent to the mailer.
        if ( empty($firstName) OR empty($lastName) OR empty($phone) OR empty($calendar_date) OR empty($howManyColorsSecond) OR empty($howManyColorsOne)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Please complete the form and try again.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "steven@customemb.net";

        // Set the email subject.
        $subject = "New contact from website";

        // Build the email content.
        $email_content = "Type of garment: $typeOfGarment \n";
        $email_content .= "Quantity: $howManyDoYouNeed \n";
        $email_content .= "Which Do You Prefer: $whichDoYouPrefer \n";
        $email_content .= "Colors on 1st printing location: $howManyColorsOne \n";
        $email_content .= "Colors on 2st printing location: $howManyColorsSecond \n";
        $email_content .= "Terms: $calendar_date \n";
        $email_content .= "First Name: $firstName \n";
        $email_content .= "Last Name: $lastName \n";
        $email_content .= "Email: $email \n";
        $email_content .= "Phone: $phone \n";


        // Build the email headers.
        $email_headers = "From: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Thank You! Your message has been sent.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>
