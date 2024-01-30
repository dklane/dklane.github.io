<?php
  function getReviews()
  {
    //This section goes through all the reviews on "reviews.txt" and adds them to an array
      $file = fopen("reviews.txt", "r");

      $currentLine = fgets($file);
      $reviewArray = [];
      while( $currentLine !== false)
      {
        if (preg_match_all("/([^☃]*)+☃/",$currentLine,$tempArray))
        {
          //print_r($tempArray)."<br>";
          array_push($reviewArray,$tempArray[0]);
        }
        $tempArray = [];
        $currentLine = fgets($file);
      }
      fclose($file);

      //echo "<br>this is the final array<br>";
      //print_r($reviewArray);
    // End of the section that goes through all the reviews on "reviews.txt" and adds them to an array
    
  //This section takes the snowmen out of all the reviews
  $bigCounter = count($reviewArray)-1;
  foreach ($reviewArray as $review)
  {
    //echo("- Big: $bigCounter<br>");
    $littleCounter = count($review)-1;
      foreach ($review as $value)
      {
        //echo("- - Little: $littleCounter<br>");
        $reviewArray[$bigCounter][$littleCounter] = str_replace("☃","",$value);
        $littleCounter--;
      }
    $bigCounter--;
  }
    //echo "<br>this is the cleaned array<br>";
    //print_r($reviewArray);
  //End of the snowman removal section

    // This is the section that chooses the reviews to return
    // It does this by choosing the 4 most recent reviews
    $reviewsToReturn = [];
    array_push($reviewsToReturn, $reviewArray[0]);
    array_push($reviewsToReturn, $reviewArray[1]);
    array_push($reviewsToReturn, $reviewArray[2]);
    array_push($reviewsToReturn, $reviewArray[3]);
    //echo"<br>Newest reviews<br>";
    //print_r($reviewsToReturn);
    // End of the section that chooses the reviews to return

    return $reviewsToReturn;
}?>