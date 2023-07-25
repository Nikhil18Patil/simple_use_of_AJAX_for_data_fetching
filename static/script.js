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

document.getElementById("fetchSpecificDataBtn").addEventListener("click", function() {
    // Get the input name from the HTML and remove leading/trailing spaces
    var inputName = document.getElementById("nameInput").value.trim();

    // Send an AJAX request to fetch the data for the specific name
    $.ajax({
        type: "GET",
        url: "/fetch_data/",
        dataType: "json",
        success: function(responseData) {
            // Filter the data by the input name (case insensitive)
            var specificNameData = responseData.filter(function(item) {
                return item.name.toLowerCase() === inputName.toLowerCase();
            });

            // Display the filtered data on the web page
            displayData(specificNameData);
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