// Id
const scene = document.getElementById('js--scene');
const camera = document.getElementById('js--camera');
const sky = document.getElementById("js--sky");
const klok = document.getElementById('js--klok');

// Class
const hond = document.getElementsByClassName('js--hond');
const pickups = document.getElementsByClassName('js--pickup');
const holdItems = document.getElementsByClassName("js--hold");
const bezemKast = document.getElementsByClassName('js--bezemKast');
const deurAnimatie = document.getElementById("js--deur-animatie");
const hondAnimatie = document.getElementById("js--hond-animatie");
const places = document.getElementsByClassName('js--place');

const jijKomtErNietDoor = document.getElementById("js--mp3-nietDoor");
const hmmHmm = document.getElementById("js--mp3-hmmHmm");

let placeholders = document.getElementsByClassName("placeholder");

for(let i = 0; i < placeholders.length; i++){
  placeholders[i].addEventListener('click',
  function(evt){

      // dit is vrij nutteloos
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
    }
  })
}

for(let i = 0; i < hond.length; i++){
  hond[i].addEventListener('click',
  function(evt){

    if(hold == "worst") {
      let worstHond = document.createElement("a-entity");
      // worstHond.setAttribute("class", "js--pickup clickable");
      worstHond.setAttribute("gltf-model", "#worst-glb");
      worstHond.setAttribute("scale", {x: 0.25, y: 0.25, z: 0.25})
      worstHond.setAttribute("rotation", {x: 0, y: 90, z: 0})
      worstHond.setAttribute("position", {x: 0, y: 1, z: .75});

      hondAnimatie.appendChild(worstHond);
      hold = null;

      document.getElementsByClassName("js--hold")[0].remove();
      document.getElementsByClassName("js--hold")[0].remove();


      hondAnimatie.setAttribute("animation__1", {autoplay: true});
      hondAnimatie.setAttribute("animation__2", {autoplay: true});
      hondAnimatie.setAttribute("animation__3", {autoplay: true});

      jijKomtErNietDoor.components.sound.stopSound();
      hmmHmm.components.sound.playSound();

      setTimeout(function() {
        deurAnimatie.setAttribute("animation", {autoplay: true});
      }, 29500);
    }
  });
}

for (var i = 0; i < bezemKast.length; i++) {
  bezemKast[i].addEventListener('click',
  function(evt){
    // Klok
    if (klok.getAttribute("src") == "#KlokMiddag-obj") {
      //console.log("Klok gaat naar avond");
      klok.setAttribute("src", "#KlokAvond-obj");
      klok.setAttribute("mtl", "#KlokAvond-mtl");
      sky.setAttribute("src", "img/avondlucht.jpg");
    }
    else {
      //console.log("Klok is gaat naar middag");
      klok.setAttribute("src", "#KlokMiddag-obj");
      klok.setAttribute("mtl", "#KlokMiddag-mtl");
      sky.setAttribute("src", "img/middaglucht.jpg");
    }
  });
}

function pythagoras(x1, z1, x2, z2){
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(z1 - z2, 2))
}

// Lopen
for (var i = 0; i < places.length; i++) {
  places[i].addEventListener('click', function(evt) {
    let att = document.createAttribute('animation');
    let camera_position = camera.getAttribute('position');
    let box_position = this.getAttribute('position');
    let duration = pythagoras(box_position.x, box_position.z, camera_position.x, camera_position.z) * 333;
    att.value = 'property: position; easing: linear; dur: ' + duration + '; to: ' + this.getAttribute('position').x + ' 1.6 ' + this.getAttribute('position').z;
    camera.setAttribute('animation', att.value);
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
