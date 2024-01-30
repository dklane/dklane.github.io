<?php 
if (isset($_GET['submit']))
{
// Glitches: If you do not put in a value for a purchaseable item, it crashes

// This processes the cost, tax rebate, and energy saved per month of the product sent to it based on the amount of the product that was bought.
function processProductData($productData,$energyCost)
{
  $taxRebate = 0;
  $energySavedPerMonth = 0;

  $PurchaceCost = $productData[1] * $productData[2];
  $installmentCost = $productData[1] * $productData[5];
  $totalCost = $PurchaceCost + $installmentCost;
  if ($productData[3] != 0){$taxRebate = ($productData[3]*$PurchaceCost);}
  $energySavedPerMonth = $productData[1] * $productData[4];

  $overallCost = $totalCost-$taxRebate;
  $costOfEnergySavedPerMonth = $energySavedPerMonth*($_GET["costOfPower"]*0.01);
  $yearsTillEven = round($overallCost/($costOfEnergySavedPerMonth * 12),2);

  $processedData = [$productData[0], $PurchaceCost, $installmentCost, $totalCost, $taxRebate, $energySavedPerMonth,$yearsTillEven];
  return $processedData;
}
// End of formatData Function


  
// This function will take an array of product data and echo a nice formatted info sheet of that product
function formatProductData($productData)
{
  echo("<div background-color:# 0>wow<?div>");
}
// End of formatProductData Function

  
// This section gets all the data submitted by the user and puts it into an array of all the products they purchased
// Data formated as so [name,# buying, cost, tax rebate, energy saved per month in kW, cost of instilation]
$products = array("solarPanels" => ["Solar Panels", 0,250,.3,60,750],
                  "ledLightbulbs" => ["Led Lightbulbs",0,2.75,0,2.56,0],
                 );

$products["solarPanels"][1] = $_GET["solarPanelsOrdered"];
$products["ledLightbulbs"][1] = $_GET["ledLightbulbsOrdered"];
// This is the end of the submitting section of the code

  
// This section processes the data and puts it into a new array of processed data formatted as [product name, cost, tax rebate, energy saved per month]
$processedProducts = array();
$costOfEnergy = $_GET["costOfPower"];
  
foreach($products as $product)
  {
    if ($product[1] != null and $product[1] != 0)
    {
      $processedProduct = processProductData($product,$costOfEnergy);
      array_push($processedProducts, $processedProduct);
    }
  }
// End of the processing section of the code


  
// This calculates the totals of the products purchased
// The total cost to purchace the products, The total cost to install the products, The total cost to purchase and install the products, The total tax rebate, and total energy saved per month
  $totals = array("Total",0,0,0,0,0,0);
  foreach($processedProducts as $productData)
  {
    $totals[1] += $productData[1];
    $totals[2] += $productData[2];
    $totals[3] += $productData[3];
    $totals[4] += $productData[4];
    $totals[5] += $productData[5];
  }
  $overallCost = $totals[3]-$totals[4];
  $costOfEnergySavedPerMonth = $totals[5]*(($_GET["costOfPower"])*.01);
  $yearsTillEven = $overallCost/($costOfEnergySavedPerMonth* 12);
  $totals[6] = round($yearsTillEven,2);
// End of totals calculations


array_unshift($processedProducts,$totals);// This puts all the products and the total into a easy to use array


}?>

<html>
  <head>
    <title>Calculator</title>
    <link rel="stylesheet" href="DPfiles/dpStyle.css" />
    <link rel="stylesheet" href="DPfiles/dpCalc.css" />
  </head>
  <body>

   <?php include('Prefabs/header.php');?>

    <dvi class="calcHeader">
      <div class="calcHeaderText">
        <h1>Calculator</h1>
        <h3>Use this to get ur thinggggggggyes</h3> 
        <span> ya our clac is really great and u should use it becuase it's really great hehehe </span>
      </div>
    </div>
      
<div class="calc">
    <form method="GET">
      
      <label>How many solar panels?: </label>
      <input type="text" name="solarPanelsOrdered" ><br>
      
      <label>How many led lightbulbs?: </label>
      <input type="text" name="ledLightbulbsOrdered"><br>

      <label>Cost of energy per kWh? (In cents): </label>
      <input type="text" name="costOfPower" placeholder="Average in U.S.A. is ¢23" required><br>
      
      <div>
        <input type="submit" name="submit" value="submit">
      </div>
    </form>

   <div class="purchaseData">
    <?php if (isset($_GET['submit'])){
    foreach($processedProducts as $purchaseData){
   
      echo("<div class='dataList'><br>$purchaseData[0]:<br></div>");
      echo("<div class='dataList'>---Purchase cost: $$purchaseData[1]<br></div>");
      echo("<div class='dataList'>---Install cost: $$purchaseData[2]<br></div>");
      echo("<div class='dataList'>---Tax rebate: $$purchaseData[4]<br></div>");
      $overallCost = $purchaseData[3]-$purchaseData[4];
      echo("<div class='dataList'>---Overall cost: $$overallCost <br></div>");
      echo("<div class='dataList'>---Energy saved per month: $purchaseData[5] kW<br></div>");
      echo("<div class='dataList'>---Years till even: $purchaseData[6] <br></div>");
      
    }}?>
     </div>
  </div>
    <?php include('Prefabs/footer.php');?>
  </body>
</html>