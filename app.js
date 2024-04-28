// Create a new instance of XMLHttpRequest
var xhr = new XMLHttpRequest();

// Define the URL of the API
var url = "https://restcountries.com/v3.1/all";

// Function to handle the response
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      // Parse the JSON response
      var countriesData = JSON.parse(xhr.responseText);
      
      // Loop through each country's data and print required information
      countriesData.forEach(function(countryData) {
        var countryName = countryData.name.common; // Correctly accessing the country name property
        var region = countryData.region;
        var subRegion = countryData.subregion;
        var population = countryData.population;
        
        console.log("Country: " + countryName + ", Region: " + region + ", Sub-region: " + subRegion + ", Population: " + population);
      });
    } else {
      console.log("Failed to fetch data from the API.");
    }
  }
};

// Open the request
xhr.open("GET", url, true);

// Send the request
xhr.send();