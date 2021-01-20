const scene = document.getElementById('js--scene');
const camera = document.getElementById('js--camera');
const sky = document.getElementById("js--sky");
const hond = document.getElementsByClassName('js--hond');
const pickups = document.getElementsByClassName('js--pickup');
const bezemKast = document.getElementsByClassName('js--bezemKast');
const klok = document.getElementById('js--klok');

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
      camera.innerHTML += '<a-box id="js--hold" position=".5 -.5 -1" rotation="0 45 0" depth=".5" width=".1" height=".1" color="red"></a-box>'
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
      let worstHond = document.createElement("a-box");
      // worstHond.setAttribute("class", "js--pickup clickable");
      // worstHond.setAttribute("gltf-model", "#X-wing-glb");
      worstHond.setAttribute("depth", ".5")
      worstHond.setAttribute("width", ".1")
      worstHond.setAttribute("height", ".1")
      worstHond.setAttribute("color", "red")
      worstHond.setAttribute("rotation", {x: 0, y: 90, z: 0})
      worstHond.setAttribute("position", {x: 0, y: 1.1, z: -3.25});

      scene.appendChild(worstHond);
      hold = null;

      document.getElementById('js--hold').remove();
      console.log(pickups);



      setTimeout(hondAnimatie = () => {
        // hond.setAttribute("animation", 'property: position; easing: linear; dur: 2000; to: 1.85 0 -1.5');
        // worstHond.setAttribute("animation", 'property: position; easing: linear; dur: 2000; to: 1.85 0 -1.5');
      },1500);
    }
  });
}

for (var i = 0; i < bezemKast.length; i++) {
  bezemKast[i].addEventListener('click',
  function(evt){
    // Lucht
    sky.setAttribute("color", "#black");

    // Klok
    klok.setAttribute("src", "#KlokAvond-obj");
    klok.setAttribute("mtl", "#KlokAvond-mtl");
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
