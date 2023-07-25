document.getElementById("fetchDataBtn").addEventListener("click", function() {
    // Send an AJAX request to fetch the data
    $.ajax({
        type: "GET",
        url: "/fetch_data/",
        dataType: "json",
        success: function(responseData) {
            // Display the fetched data on the web page
            displayData(responseData);
        },
        error: function(xhr, status, error) {
            console.error("Request failed. Status: " + xhr.status);
        }
    });
});

// Function to display the fetched data on the web page
function displayData(data) {
    var dataContainer = document.getElementById("dataContainer");
    dataContainer.innerHTML = "";

    // Loop through the data and create HTML elements to display it
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        var itemElement = document.createElement("div");
        itemElement.textContent = "Name: " + item.name +" and the " + ", Age: "+" is " + item.age;
        dataContainer.appendChild(itemElement);
    }
}



function my(){
    $("#dataContainer").toggle();
}