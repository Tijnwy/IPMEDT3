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
const pavarotti = document.getElementById('js--pavarotti');
const pavarottiVoetstuk =document.getElementById('js--pavarottiVoetstuk');
const pickups2 = document.getElementsByClassName('js--pickup2');

// blokkeer acties als er muziek speelt
let pauseBool = 1;

const carmenKlik1 = document.getElementById("js--blikje-carmen1");
const carmenKlik2 = document.getElementById("js--blikje-carmen2");
const carmen1 = document.getElementById("js--mp3-carmen1");
const carmen2 = document.getElementById("js--mp3-carmen2");
const carmenNoot1 = document.getElementById("js--carmenNoot1");
const carmenNoot2 = document.getElementById("js--carmenNoot2");

const janSevillaKlik1 = document.getElementById("js--blikje-jan-sevilla1");
const janSevillaKlik2 = document.getElementById("js--blikje-jan-sevilla2");
const janSevilla1 = document.getElementById("js--mp3-janSevilla1");
const janSevilla2 = document.getElementById("js--mp3-janSevilla2");
const janSevillaNoot1 = document.getElementById("js--janSevillaNoot1");
const janSevillaNoot2 = document.getElementById("js--janSevillaNoot2");
const janSevillaNoot3 = document.getElementById("js--janSevillaNoot3");
const pavarottiLive = document.getElementById("js--mp3-PavarottiLive");

const domingo1 = document.getElementById("js--mp3-domingo1");
const domingo2 = document.getElementById("js--mp3-domingo2");

let placeholders = document.getElementsByClassName("placeholder");

carmenKlik1.onclick = function() {
  if(pauseBool == 1) {
    carmen1.components.sound.playSound();
    pauseBool = 0;
    carmenKlik1.remove();
    setTimeout(function() {
      pauseBool = 1;
      carmenNoot1.setAttribute("src", "img/muzieknootGroen.png");
    }, 55500);
  }
}
carmenKlik2.onclick = function() {
  if(pauseBool == 1) {
    carmen2.components.sound.playSound();
    pauseBool = 0;
    carmenKlik2.remove();
    setTimeout(function() {
      pauseBool = 1;
      carmenNoot2.setAttribute("src", "img/muzieknootGroen.png");
    }, 22500);
  }
}

janSevillaKlik1.onclick = function() {
  if(pauseBool == 1) {
    janSevilla1.components.sound.playSound();
    pauseBool = 0;
    janSevillaKlik1.remove();
    janSevillaNoot1.setAttribute("src", "img/muzieknootGroen.png");
    setTimeout(function() {
      pauseBool = 1;
    }, 12500);
  }
}
janSevillaKlik2.onclick = function() {
  if(pauseBool == 1) {
    janSevilla2.components.sound.playSound();
    pauseBool = 0;
    janSevillaKlik2.remove();
    janSevillaNoot2.setAttribute("src", "img/muzieknootGroen.png");
    setTimeout(function() {
      pauseBool = 1;
    }, 41500);
  }
}



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

      // domingo1.components.sound.stopSound();
      domingo2.components.sound.playSound();

      setTimeout(function() {
        deurAnimatie.setAttribute("animation", {autoplay: true});
      }, 29500);
    }
  });
}
let hold2 = null;

for (var i = 0; i < bezemKast.length; i++) {
  bezemKast[i].addEventListener('click',
  function(evt){
    // Klok
    if (klok.getAttribute("src") == "#KlokMiddag-obj") {
      //console.log("Klok gaat naar avond");
      klok.setAttribute("src", "#KlokAvond-obj");
      klok.setAttribute("mtl", "#KlokAvond-mtl");
      sky.setAttribute("src", "img/avondlucht.jpg");
      pavarotti.setAttribute("visible", "true");
      if (hold2 == null) {
        camera.innerHTML += '<a-entity class="js--hold2" rotation="0 90 0" scale="1.5 1.5 1.5" position=".5 -.3 -.9" gltf-model="#tissuedoos-glb"></a-entity>'
        camera.innerHTML += '<a-box class="js--hold2" width=".15" height=".6" depth=".15" rotation="-55 -10 10" position=".4 -.4 -.4" color="#FFD29A"></a-box>'
        const holdItems = document.getElementsByClassName("js--hold2");
        hold2 = "tissue"
      }
    } else {
      //console.log("Klok gaat naar middag");
      klok.setAttribute("src", "#KlokMiddag-obj");
      klok.setAttribute("mtl", "#KlokMiddag-mtl");
      sky.setAttribute("src", "img/middaglucht.jpg");
      pavarotti.setAttribute("visible", "false");
      if (hold2 = "tissue") {
        document.getElementsByClassName("js--hold2")[0].remove();
        document.getElementsByClassName("js--hold2")[0].remove();
        hold2 = null;
      }
    }
  });
}

pavarottiVoetstuk.addEventListener('click', function(evt) {
  if (hold2 = "tissue") {
    document.getElementsByClassName("js--hold2")[0].remove();
    document.getElementsByClassName("js--hold2")[0].remove();
    pavarottiLive.components.sound.playSound();
  }
});

function pythagoras(x1, z1, x2, z2){
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(z1 - z2, 2))
}

// Lopen
for (var i = 0; i < places.length; i++) {
    places[i].addEventListener('click', function(evt) {
      if(pauseBool == 1) {
        let att = document.createAttribute('animation');
        let camera_position = camera.getAttribute('position');
        let box_position = this.getAttribute('position');
        let duration = pythagoras(box_position.x, box_position.z, camera_position.x, camera_position.z) * 333;
        att.value = 'property: position; easing: linear; dur: ' + duration + '; to: ' + this.getAttribute('position').x + ' 1.6 ' + this.getAttribute('position').z;
        camera.setAttribute('animation', att.value);
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
