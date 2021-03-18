let burger = document.querySelector(".burger");
let content = document.querySelector(".content")
burger.addEventListener("click",()=>{
    content.classList.toggle("navtoggle")
})

// function initMap(){
//     let map = document.querySelector(".map");
//     map  = new google.maps.Map(map,{
//         center:{lat:-43.342,lan:159.34},
//         zoom:8,
//     })
// }

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }
