<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require_once 'config.php';
    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';

    function gMessage() {
        echo"<!DOCTYPE html>
                <html lang='en'>
                
                <head>
                    <meta charset='UTF-8'>
                    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                    <title>Back to the main page | HIGH CAPTURE STUDIO</title>
                    <link rel='stylesheet' href='../css/main.css'>
                    <link rel='icon' type='image/x-icon' href='../img/mutual/favicon/favicon-32x32.png'/>
                </head>
                
                <body>
        
                    <div class='form__afterpage'>
                        <div>
                            <h1>Thank you for your message! We will answer soon.</h1>
                            <a href='../'>
                                <p>Back to main page</p>
                            </a>
                        </div>
                    </div>
                </body>
                </html>";
    };

    function bMessage() {
        echo"<!DOCTYPE html>
                    <html lang='en'>
                    <head>
                        <meta charset='UTF-8'>
                        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                        <title>Back to the main page | HIGH CAPTURE STUDIO</title>
                        <link rel='stylesheet' href='../css/main.css'>
                        <link rel='icon' type='image/x-icon' href='../img/mutual/favicon/favicon-32x32.png'/>
                    </head>
                    <body>
                        <div class='form__afterpage'>
                            <div>
                                <h1>Something went wrong. Please try again later...</h1>
                                <a href='../'>
                                    <p>Back to main page</p>
                                </a>
                            </div>
                        </div>
                    </body>
                </html>";
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        
        $secretKey = SECRET_KEY;

        // The response token from the reCAPTCHA widget
        $responseKey = $_POST['g-recaptcha-response'];

        // The user's IP address (optional)
        $userIP = $_SERVER['REMOTE_ADDR'];

        // The verification URL
        $url = 'https://www.google.com/recaptcha/api/siteverify';

        // The data to send in the POST request
        $data = array(
            'secret' => $secretKey,
            'response' => $responseKey,
            'remoteip' => $userIP
        );

        // Initialize cURL
        $ch = curl_init();

        // Set the URL to send the request to
        curl_setopt($ch, CURLOPT_URL, $url);

        // Specify that this is a POST request
        curl_setopt($ch, CURLOPT_POST, true);

        // Attach the data to the POST request
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));

        // Return the response as a string instead of outputting it directly
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        // Execute the request and capture the response
        $response = curl_exec($ch);

        // Close the cURL session
        curl_close($ch);

        // Decode the JSON response
        $result = json_decode($response, true);

        if ($result['success']) {
            
            $name = $_POST['username'];
            $email = $_POST['email'];
            $phone = $_POST['phone'];
            $textarea = $_POST['message'];
            $message = "Imie i Nazwisko: ".$name."\n"."E-mail: ".$email."\n"."Numer telefonu: ".$phone."\n"."Wiadomość: ".$textarea;
            $mail = new PHPMailer(true);
            $mail -> isSMTP();
            $mail -> Host = MAIL_HOST;
            $mail -> SMTPAuth = true;
            $mail -> Username = MAIL_USER;
            $mail -> Password = MAIL_PASS;
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port= 465;
            $mail->CharSet = 'UTF-8';
            $mail->Encoding = 'base64';
            $mail->setFrom('contact@woodfuels.eu', 'WOODFUELS.EU');
            $mail->addAddress('contact@woodfuels.eu');
            $mail->addAddress('woodfuels.eu@gmail.com');
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = "Wiadomość z HIGH CAPTURE STUDIO";
            $mail->Body = $message;
            if($mail->send()){
                gMessage()
            }
            else {
                    bMessage()
                }
        } 
        else {
                bMessage()
        }
    } 
    else {
       bMessage()
    }
?>

