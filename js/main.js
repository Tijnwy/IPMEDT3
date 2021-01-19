const scene = document.getElementById('js--scene');
const camera = document.getElementById('js--camera');
const sky = document.getElementById("js--sky");
const hond = document.getElementsByClassName('js--hond');
const pickups = document.getElementsByClassName('js--pickup');

let placeholders = document.getElementsByClassName("placeholder");


for(let i = 0; i < placeholders.length; i++){
  placeholders[i].addEventListener('click',
  function(evt){


      let flush = document.createElement("a-cylinder");
      flush.setAttribute("color", "blue");
      flush.setAttribute("animation", "property: rotation; loop: true; to: 20 360 20; dur: 1000")
      flush.setAttribute("position", "-8.2 .65 -8");
      flush.setAttribute("height", ".05");
      flush.setAttribute("radius", ".2");

      scene.appendChild(flush);

  });
}
let hold = null;

for(let i = 0; i < pickups.length; i++){
  pickups[i].addEventListener('click', function(evt){
    if (hold == null) {
      camera.innerHTML += '<a-entity class="js--hold" rotation="0 90 0" scale=".3 .3 .3" position=".5 -.3 -.9" gltf-model="#worst-glb"></a-entity>'
      camera.innerHTML += '<a-box class="js--hold" width=".15" height=".6" depth=".15" rotation="-55 -10 10" position=".4 -.4 -.4" color="#FFD29A"></a-box>'
      const holdItems = document.getElementsByClassName("js--hold");
      hold = "worst"
      this.remove();
      console.log(pickups);
    }
  })
}
console.log(hond)

for(let i = 0; i < hond.length; i++){
  hond[i].addEventListener('click',
  function(evt){
    console.log("brrr");



    if(hold == "worst") {
      let worstHond = document.createElement("a-entity");
      // worstHond.setAttribute("class", "js--pickup clickable");
      worstHond.setAttribute("gltf-model", "#worst-glb");
      worstHond.setAttribute("scale", {x: 0.25, y: 0.25, z: 0.25})
      worstHond.setAttribute("rotation", {x: 0, y: 90, z: 0})
      worstHond.setAttribute("position", {x: 0, y: 1.1, z: -3.25});

      scene.appendChild(worstHond);
      hold = null;

      for(let i = 0; i < holdItems.length; i++){
        holdItems.remove();
      }
      console.log(pickups);



      setTimeout(hondAnimatie = () => {
        // hond.setAttribute("animation", 'property: position; easing: linear; dur: 2000; to: 1.85 0 -1.5');
        // worstHond.setAttribute("animation", 'property: position; easing: linear; dur: 2000; to: 1.85 0 -1.5');
      },1500);
    }
  });
}



























// const getSpace = () => {
//   const BASE_URL = "https://api.nasa.gov/planetary/apod?api_key=eU3v1G9kaCpQH3UOo0ccjACf6kkgb0ogRBjdECN3";
//
//   fetch(BASE_URL) // + spacePhoto
//   .then((data) => {
//     return data.json();
//   })
//   .then( (response) => {
//     sky.setAttribute("src", response.hdurl);
//     console.log(response)
//     console.log(sky)
//   })
// }
// getSpace()

// https://api.nasa.gov/planetary/apod?api_key=eU3v1G9kaCpQH3UOo0ccjACf6kkgb0ogRBjdECN3
