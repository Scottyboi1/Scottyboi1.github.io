//Main function for the map
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14.7,
      //Centered on UNT campus (google coordinates)
      center: { lat: 33.208, lng: -97.156 },
    });
    //Recycling symbol
    const image = {
      url: "https://static-00.iconduck.com/assets.00/black-universal-recycling-symbol-emoji-256x256-lbi4lgap.png",
      scaledSize: new google.maps.Size(20, 20)
      };
    //Recycling placement and size
    const recycleMarker = new google.maps.Marker({
      position: { lat: 33.208, lng: -97.156 },
      map,
      icon: image,
      scaledSize: new google.maps.Size(1, 1),
    });
  }
  
  window.initMap = initMap;