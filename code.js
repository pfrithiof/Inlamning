function initMap() {
    
    const peepee = { lat: -47.1915, lng: 52.8371 };
    
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: peepee,
    });
    
    const marker = new google.maps.Marker({
      position: peepee,
      map: map,
    });
  }
  
  window.initMap = initMap;