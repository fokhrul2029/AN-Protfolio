<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set recipient email address
    $to = "almamun20044@gmail.com";  // Replace with your recipient email address

    // Set subject
    $subject = "New Contact Form Submission";

    // Compose the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n\n";
    $email_message .= "Message:\n$message";

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Set mailer to use SMTP
        $mail->isSMTP();

        // Your SMTP configuration
        $mail->Host = 'smtp.example.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'your_username';
        $mail->Password = 'your_password';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Set sender and recipient
        $mail->setFrom($email, $name);
        $mail->addAddress($to);

        // Set email subject and body
        $mail->Subject = $subject;
        $mail->Body = $email_message;

        // Send email
        $mail->send();

        echo "<script>
                alert('Thank you for your message. We will get back to you soon.');
                window.location.href = '../index.html';
             </script>";
    } catch (Exception $e) {
        echo "<script>
                alert('Error sending email. Message could not be sent. Mailer Error: {$mail->ErrorInfo}');
                window.location.href = '../index.html';
             </script>";
    }
} else {
    // Redirect to the form if accessed directly
    header("Location: ../index.html");
    exit();
}
?>
