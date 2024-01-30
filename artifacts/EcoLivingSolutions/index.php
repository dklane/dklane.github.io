<?php include('getReviews.php');$reviews = getReviews();

?>
<!DOCTYPE html>
<html>
    <?php include('Prefabs/header.php');?>

    <section class="homeVideos">
        <!--videos-->
     <div class="home">
        <video class="videoPlaying active" src="DPfiles/videos/slide1DP.mp4" autoplay muted loop></video>
        <video class="videoPlaying" src="DPfiles/videos/coverr-neighborhood-in-milan-1656-1080p.mp4" autoplay muted loop></video>
        <video class="videoPlaying" src="DPfiles/videos/coverr-wind-turbines-in-a-field-5831-1080p.mp4" autoplay muted loop></video>
        <!--video content-->
      <
      <div class="content">
        <div class="videoContent active"> 
        <h1>Energy at its Cleanest</h1> 
        <span>Saving the planet one call at a time</span>
    </div>
    <div class="videoContent"> 
        <h1>Revitalize Your Home and Business</h1> 
        <span>Going green can not only help the environemt, but can also improve the public's health</span>
    </div>
    <div class="videoContent"> 
        <h1>Best in the Buisness</h1> 
        <span>Our staff will help you transform your home and buisness into the best and brightest it can be</span>
    </div>
      </div>
      
    <!--video nav buttons-->
    <div class="videoSlideNav">
        <div class="videoBtn active"></div>
        <div class="videoBtn"></div>
        <div class="videoBtn"></div>
    </div>
      </div>
    </section>
  <div class="bodyContent">
    <img src="DPfiles/img/img1.jpg" alt="img1" class="img1">
    <div class="bodyContentText">
      <h3>Mission Statement</h3>
      <h1>Eco Living Solutions</h1>
      <span>Our mission is to assist homeowners with making smart green energy home decisions, as well as assisting in providing basic information like cost, tax rebate information, and safe clean energy solutions.</span>
      <div class="mainTable">
        <table class="table">
          <tr>
          <td>
           <img src="DPfiles/img/tableIcon1.svg" alt="img2" class="tableIcon1"> 

          </td>
          <td>
           <img src="DPfiles/img/tableIcon1.svg" alt="img2" class="tableIcon1">

          </td>
          <td>
           <img src="DPfiles/img/tableIcon1.svg" alt="img2" class="tableIcon1"> 

          </td>
          </tr>

          <tr>
          <td>
            <span>What is green energy?</span>
          </td>
          <td>
            <span>What is clean energy?</span>
          </td>
          <td>
            <span>What's the difference?</span>
          </td>
          </tr>
        </table>
      </div>
    </div>
   
  </div>

  <!----programs section----->
  <div class="contentPrograms">
    <div class="programsContent">
      <h2 class="programsSubtitle">Eco Living Solutions</h2>
      <h1 class="programsTitle">Information</h1>
    </div>
    <div class="mainTable">
      <table class="table2">
        <tr>
        <td>
         <img src="DPfiles/img/money-growing.jpg" alt="money-growing" class="tableprog1"> 

        </td>
        <td>
         <img src="DPfiles/img/Tax_rebate_image.jpg" alt="Tax_rebate_image.jpg" class="tableprog1">

        </td>
        <td>
         <img src="DPfiles/img/Ovens.jpg" alt="Ovens.jpg" class="tableprog1"> 

        </td>
          <td>
           <img src="DPfiles/img/Solar_panels_on_house_roof.jpg" alt="Solar_panels_on_house_roof.jpg" class="tableprog1"> 

          </td>
          <td>
           <img src="DPfiles/img/img2.jpg" alt="img2" class="tableprog1"> 

          </td>
        </tr>

        <tr>
        <td>
          <span>Green Energy Costs</span>
        </td>
        <td>
          <span>Tax Rebate Information</span>
        </td>
        <td>
          <span>Clean Energy Appliances</span>
        </td>
          <td>
            <span>Homeowners Benefits</span>
          </td>
          <td>
            <span>Company Benefits</span>
          </td>
        </tr>
      </table>
    </div>
  </div>
  <!--contact place---->
        <div class="contactPlace">
              <form class="ContactForm">
                <table class="contactTable">
                  <tr>
                    <td>
                      <h1 class="contactTitle">Contact Us!</h1>
                      <br>
                    </td>
                  <td>
                    <textarea type="text" placeholder="Your Name" rows="3" cols="35" id="fname" name="fname" required></textarea>
                    <br>
                  </td>
                  <td>
                    <textarea type="email" placeholder="Your Email" rows="3" cols="35" id="email" name="email" required></textarea><br>
                  </td>
                    <td>
                      <button type="submit" rows="3" cols="40" class="contactButton">Get More Info!</button>
                    </td>
                  </tr>
                </table>
              </form>
        </div>
        <!--our offers section---->

        <div class="ourOffers">
          <div class="ourOffersContent">
            <div class="offers">
            <img src="DPfiles/img/img2.jpg" alt="img2" class="ourOffersImg1">
            <div class="ourOffersContentText1">
              <h1>Clean Energy Appliances</h1>
              <h2>A smarter way to live</h2>
              <span>We offer a variety of appliances and services, in order to improve both your home as well as our planet. </span>
              <br>
              <a href="/" class="ourOffersContentLink">Learn More</a>
              </div>
            </div>
            <div class="offers">
            <div class="ourOffersContentText2">
              <h1>Calculate Your Cost</h1>
              <h2>Plan Ahead for a Green Future</h2>
              <span>We offer a free calculator that will calculate the cost as well as the energy saved of purchasing various green energy products.</span>
              <br>
              <a href="/calc.php" class="ourOffersContentLink">Learn More</a>
              </div>
              <img src="DPfiles/img/img2.jpg" alt="img2" class="ourOffersImg2">
            </div>
            
            <div class="offers">
          <img src="DPfiles/img/img2.jpg" alt="img2" class="ourOffersImg3">
          <div class="ourOffersContentText1">
            <h1>Let Us Know How We Did</h1>
            <h2>Your Feedback Is The Best We Can Improve </h2>
            <span>With your feedback, we can become the best and eficent we can be! If you will scroll up to our Contact Us section, you can not only leave feedback about our work and products, but also ask us any questions you may have!</span>
            <br>
            <a href="/" class="ourOffersContentLink">Learn More</a>
          </div>
            </div>
        </div>
        </div>


<!-----recent projects section------>
<div class="recentProjects">
  <div class="recentProjectsContent">
    <div class="recentProjectsContentText">
    <h1 class="recentProjectsTitle">Recent Projects</h1>
    <h3 class="recentProjectsSubtitle">We have worked on a variety of projects over the years</h3>
    <span> Our projects have a wide range of applications, from homes to businesess, and more. We have worked on a variety of projects over the years, from replacing home appliances such as ovens, microwaves, wahsers, dryers, and dishwashers, to building solar panels atop skyscrapers, to even building solar powered light poles in public parks and playgrounds. </span> 
    </span>
      <br>
    <a class="recentProjectsButton">View More</a>
  </div>
  <div class="recentProjectsSlides">
    <img src="DPfiles/img/img2.jpg" alt="img2" class="recentProjectsImg active">
    <img src="DPfiles/img/img2.jpg" alt="img2" class="recentProjectsImg">
    <img src="DPfiles/img/img2.jpg" alt="img2" class="recentProjectsImg">
  </div>
  <div class="recentProjectsBtns">
        <div class="videoBtn active"></div>
        <div class="videoBtn"></div>
        <div class="videoBtn"></div>
</div>
  </div>
</div>
    
    <!-----Stats stuff---->

        <div class="stats">
          <div class="statsContent">
            <div class="statsContentText">
              <table class="table3">
          
                <tr>
                <td>
                  <h1 class="statsItems">63%</h1>
                  <br>
                  <span>Drop in Green Energy Costs from Last Year</span>
                </td>
                <td>
                  <h1 class="statsItems">95%</h1>
                  <br>
                  <span>Of Our Customers Recieved Tax Rebates</span>
                </td>
                <td>
                  <h1 class="statsItems">57%</h1>
                  <br>
                  <span>Of Buisnesses Had Increased Sales After Going Green</span>
                </td>
                  <td>
                    <h1 class="statsItems">71%</h1>
                    <br>
                    <span>of the Surrounding Area has Gone Green</span>
                  </td>
                  <td>
                    <h1 class="statsItems">78%</h1>
                    <br>
                    <span>Solar stuff</span>
                  </td>
                </tr>
              </table>
          </div>
          </div>
        </div>

        <!-----START OF REVIEWS----->
        <div class="reviews">
          <div class="reviewsHeader">
            <h1 class="reviewsTitle">What Our Customers Say</h1>
          </div>
          <div class="reviewsContent">
            <ul class="reviewsBoxes">
              <li class="reviewsBox">
                <h3 class="stars">
                  <img src="DPfiles/img/stars.svg" alt="star" class="starsRev">
                  <img src="DPfiles/img/stars.svg" alt="star" class="starsRev">
                  <img src="DPfiles/img/stars.svg" alt="star" class="starsRev">
                  <img src="DPfiles/img/stars.svg" alt="star" class="starsRev">
                  <img src="DPfiles/img/stars.svg" alt="star" class="starsRev">
                </h3>
                <h1 class="reviewsBoxTitle"fb>I love it!</h1>
                
                <span class="reviewsText"><?php echo($reviews[0][0])?>
                </span>
                <br>
                <img src="DPfiles/img/user1.png" alt="img2" class="reviewPfp">
                <span class="reviewsName"><?php echo($reviews[0][2])?></span>
                <br>
                <h3 class="reviewsLoc"></h3>
              </li>

            <li class="reviewsBox">
                <h3 class="stars">
                  <img src="DPfiles/img/stars.svg" alt="star" class="starsRev">
                  <img src="DPfiles/img/stars.svg" alt="star" class="starsRev">
                  <img src="DPfiles/img/stars.svg" alt="star" class="starsRev">
                  <img src="DPfiles/img/stars.svg" alt="star" class="starsRev">
                  <img src="DPfiles/img/stars.svg" alt="star" class="starsRev">
                </h3>
                <h1 class="reviewsBoxTitle">I love it!</h1>
                <span class="reviewsText"><?php echo($reviews[1][0])?>
                </span>
              <br>
                <img src="DPfiles/img/user1.png" alt="img2" class="reviewPfp">
                <span class="reviewsName"><?php echo($reviews[1][2])?></span></span>
                <br>
                <h3 class="reviewsLoc"></h3>
              </li>
            </ul>
          
          </div>
        </div>
        
       <!-----END OF REVIEWS----->
            
              





        
        <script>

          
          //Slide
          const btns = document.querySelectorAll(".videoBtn");
          const slides = document.querySelectorAll(".videoPlaying");
          const contents = document.querySelectorAll(".videoContent");

          var sliderNav = function(manual){
            btns.forEach((btn) => {
              btn.classList.remove("active");
            });

            slides.forEach((slide) => {
              slide.classList.remove("active");
            });

            contents.forEach((content) => {
              content.classList.remove("active");
            });

            btns[manual].classList.add("active");
            slides[manual].classList.add("active");
            contents[manual].classList.add("active");
          }

          btns.forEach((btn, i) => {
          btn.addEventListener("click", () => {
            sliderNav(i);
          });
        });

        
        </script>
        
</body>
  <?php include('Prefabs/footer.php');?>
</html>