<?php
if (isset($_GET['submit'])){include('getReviews.php');
  $file = "reviews.txt";
  $name = $_GET["name"];
  $email = $_GET["email"];
  $review = $_GET["review"];
  $contents = $name . "☃" . $email . "☃" . $review . "☃"."\n";

  file_put_contents($file, $contents, FILE_APPEND);

  
  
}?>
<!DOCTYPE html>
<html>
  <head>
    <title>Review us</title>
  <?php include('Prefabs/header.php');?>
  <link rel="stylesheet" href="DPfiles/dpLoginStyle.css">
    <link rel="stylesheet" href="DPfiles/dpStyle.css" />
    </head>

  <body>
    <div class="loginpage">


     <div class="modal-content animate">
     <!---form class="modal-content animate" action="/comingsoon.html"--->
       <div id="username" class="container" style="background-color:#f1f1f1"><div> <a href="login.html"> </a>.</div> </div>

       <!--Start of Lukes stuff-->
       <form method="GET" class="container">
         <label for="name"><b>Name</b></label>
         <input type="text" placeholder="Your Name" name="name" id="name" required>

         <label for="Email"><b>Email</b></label>
         <input type="text" placeholder="Enter Email" name="email" id="email" required>

         <label for="message"><b>Review</b></label>
         <input type="text" placeholder="Message" name="review"  id="psw" required>

         <div>
           <button type = "submit" name="submit" value="submit">Submit review</button>
         </div>
       </form>
       <!--End of Lukes stuff-->

      <!--This prints a thank you message if the user submits a review-->
       <?php if (isset($_GET['submit'])){echo"<div>Thank you for your review!</div>";}?>



       
     </div>

         <script type="text/javascript">
           function myFunction() {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
    }

             var user = document.getElementById('username');
         var pass = document.getElementById('pass');
          /*-- USER NAME AND PASS--> */
         guestUser="1";
         guestPass="1";

          guestUser2="bshstsa";
          guestPass2="2023";

         function login(){
           if (user.value == guestUser){
             if (pass.value == guestPass){
             window.location.href = "loggedin.html";
           }
           }
             else if (user.value == guestUser2) {
               if (pass.value == guestPass2){
             window.location.href = "loggedin.html";
           }
           }
             else{
               alert("Please try again. Your username or password was incorrect.");
             }
         }



        const menuBtn = document.querySelector(".menu-btn");
        const navigation = document.querySelector(".navigation");

        menuBtn.addEventListener("click", () => {
          menuBtn.classList.toggle("active");
          navigation.classList.toggle("active");
        });
         </script>

      </body>
  </body>
  <?php include('Prefabs/footer.php');?>
</html>