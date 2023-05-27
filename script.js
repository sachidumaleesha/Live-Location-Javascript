// Function to get the user's location
function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Create the map
        const map = L.map("map").setView([latitude, longitude], 13);

        // Add a tile layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Add a marker at the user's location
        L.marker([latitude, longitude])
          .addTo(map)
          .bindPopup("You are here")
          .openPopup();
      },
      function (error) {
        console.error("Error getting user location:", error.message);
      }
    );
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

// Call the function to get the user's location and display it on the map
getUserLocation();
