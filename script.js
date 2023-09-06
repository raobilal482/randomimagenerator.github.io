document.getElementById('searchButton').addEventListener('click', function() {
  var search = document.getElementById('searchitem').value;
  var randNum = Math.floor(Math.random() * 10);
  var apikey = "rqy1svzHi5YZhcnyiZjhYC4Orh-cydkJewrFRkE4vK0";
  var url = `https://api.unsplash.com/search/photos?page=${randNum}&query=${search}&client_id=${apikey}`;

  // Display "Loading" message
  document.getElementById('randomImage').src = "";
  document.getElementById('randomImage').alt = "Loading";

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(async function(data) {
      if (data.results && data.results.length > 0) {
        var finalresult = data.results[0].urls.full;
        document.getElementById('randomImage').src = finalresult;
        document.getElementById('randomImage').alt = "Random Image";
      } else {
        // Handle no results found
        document.getElementById('randomImage').src = "not-found-image.jpg";
        document.getElementById('randomImage').alt = "Image Not Found";
      }
    })
    .catch(function(error) {
      // Handle errors here, e.g., display an error message
      console.error("Error fetching data:", error);
    });
});
