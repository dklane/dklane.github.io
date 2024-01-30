<head>
    <title>Web</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="DPfiles/dpStyle.css" />
    <link rel="stylesheet" href="LHfiles/lhStyle.css" />
   <link rel="icon" type="image/x-icon" href="DPfiles/img/logoGreen.png">
</head>
<body>
    <header>
        
        <!--if we add the phone screen, add the "waffle" here-->
      <div class="topBar">
        <a class="logo" href="/"><img src="DPfiles/img/mainLogo.png" alt="logoImg"></a>
      </div>
      <!---div class="secondTopBar">
          <span>Stuff/Logo</span>
    </div--->
      <nav>
          <div class="waffleMenu"></div>
        <div class="navBar" id="navBar">
            <a class="logo" href="/"></a>
            <a class="nav-items" href="/">Home</a>
            <a class="nav-items" href="calc.php">Calc</a>
            <a class="nav-items" href="contact.php">Contact</a>
            <a class="nav-items" href="reviews.php">Reviews</a>
            <a class="nav-items" href="about.php">About</a>
        </div>
        </nav>
    </header>

 <script>
          // const menuBtn = document.querySelector(".menu-btn");
          // const navigation = document.querySelector(".navigation");

          // menuBtn.addEventListener("click", () => {
          //   menuBtn.classList.toggle("active");
          //   navigation.classList.toggle("active");
          // });


          // nav bar sticky

          window.onscroll = function() {myFunction()};
   
var navBar = document.getElementById("navBar");
   var barSticky = navBar.offsetTop;

   function myFunction() {
     if (window.pageYOffset >= barSticky) {
       navBar.classList.add("sticky");
     }
     else
     {
       navBar.classList.remove("sticky");
     }
     }
</script>

  <style>
    .sticky {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 9990;
      left: 0;
      padding: 1%;
      background-color: black;
      box-shadow: 10px 5px 20px 0px #000000a1;
}

    

    

  </style>
</body>