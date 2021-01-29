// Id
const scene = document.getElementById('js--scene');
const camera = document.getElementById('js--camera');
const cameraPlaceholder = document.getElementById('js--camera-placeholder');
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
const pavarottiCirkel = document.getElementById('js--pavarottiCirkel')
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
const janSevillaKlik3 = document.getElementById("js--jan-sevilla-box");
const janSevilla1 = document.getElementById("js--mp3-janSevilla1");
const janSevilla2 = document.getElementById("js--mp3-janSevilla2");
const janSevilla3 = document.getElementById("js--mp3-janSevilla3");
const janSevillaNoot1 = document.getElementById("js--janSevillaNoot1");
const janSevillaNoot2 = document.getElementById("js--janSevillaNoot2");
const janSevillaNoot3 = document.getElementById("js--janSevillaNoot3");

const pavarottiNoot = document.getElementById("js--pavarottiNoot");
const pavarottiLive = document.getElementById("js--mp3-PavarottiLive");

const domingoLocatie = document.getElementById("js--domingoLocatie");
const domingo1 = document.getElementById("js--mp3-domingo1");
const domingo2 = document.getElementById("js--mp3-domingo2");
const domingoNoot1 = document.getElementById("js--domingoNoot1");
const domingoNoot2 = document.getElementById("js--domingoNoot2");
let domingoBool = 1;

const callasLocatie = document.getElementById("js--callasLocatie");
const callasKlik1 = document.getElementById("js--toilet");
const callasKlik2 = document.getElementById("js--wasbak");
const callas1 = document.getElementById("js--mp3-callas1");
const callas2 = document.getElementById("js--mp3-callas2");
const callas3 = document.getElementById("js--mp3-callas3");
const callasNoot1 = document.getElementById("js--callasNoot1");
const callasNoot2 = document.getElementById("js--callasNoot2");
const callasNoot3 = document.getElementById("js--callasNoot3");
let callasBool = 1;
let callas1bool = 1;
let callas2bool = 1;

const introVoice = document.getElementById("js--intro--voice");
const hondVoice = document.getElementById("js--hond--voice");
const pavarottiVoice = document.getElementById("js--pavarotti--voice");

let placeholders = document.getElementsByClassName("placeholder");

carmenKlik1.onclick = function() {
  if(pauseBool == 1) {
    carmenNoot1.setAttribute("src", "img/muzieknootOranje.png");
    carmen1.components.sound.playSound();
    pauseBool = 0;
    carmenKlik1.remove();
    setTimeout(function() {
      pauseBool = 1;
      carmenNoot1.setAttribute("src", "img/muzieknootGroen.png");
    }, 27500);
  }
}
carmenKlik2.onclick = function() {
  if(pauseBool == 1) {
    carmenNoot2.setAttribute("src", "img/muzieknootOranje.png");
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
    janSevillaNoot1.setAttribute("src", "img/muzieknootOranje.png");
    janSevilla1.components.sound.playSound();
    pauseBool = 0;
    janSevillaKlik1.remove();
    setTimeout(function() {
      pauseBool = 1;
      janSevillaNoot1.setAttribute("src", "img/muzieknootGroen.png");
    }, 14500);
  }
}
janSevillaKlik2.onclick = function() {
  if(pauseBool == 1) {
    janSevillaNoot2.setAttribute("src", "img/muzieknootOranje.png");
    janSevilla2.components.sound.playSound();
    pauseBool = 0;
    janSevillaKlik2.remove();
    setTimeout(function() {
      pauseBool = 1;
      janSevillaNoot2.setAttribute("src", "img/muzieknootGroen.png");
    }, 25500);
  }
}

janSevillaKlik3.onclick = function() {
  if(pauseBool == 1) {
    janSevillaNoot3.setAttribute("src", "img/muzieknootOranje.png");
    janSevilla3.components.sound.playSound();
    pauseBool = 0;
    setTimeout(function() {
      pauseBool = 1;
      janSevillaNoot3.setAttribute("src", "img/muzieknootGroen.png");
    }, 11500);
  }
}

callasKlik1.onclick = function() {
  if(pauseBool == 1) {
    if(callas1bool == 1) {
      callas1bool = 0;
      callasNoot1.setAttribute("src", "img/muzieknootOranje.png");
      callas1.components.sound.playSound();
      pauseBool = 0;
      setTimeout(function() {
        pauseBool = 1;
        callasNoot1.setAttribute("src", "img/muzieknootGroen.png");
      }, 21500);
    }
  }
}
callasKlik2.onclick = function() {
  if(pauseBool == 1) {
    if(callas2bool == 1) {
      callas2bool = 0;
      callasNoot2.setAttribute("src", "img/muzieknootOranje.png");
      callas2.components.sound.playSound();
      pauseBool = 0;
      setTimeout(function() {
        pauseBool = 1;
        callasNoot2.setAttribute("src", "img/muzieknootGroen.png");
      }, 21500);
    }
  }
}
let hold = null;

for(let i = 0; i < pickups.length; i++){
  pickups[i].addEventListener('click', function(evt){
    if (hold == null) {
      cameraPlaceholder.innerHTML += '<a-entity class="js--hold" rotation="0 90 0" scale=".3 .3 .3" position=".5 -.3 -.9" gltf-model="#worst-glb"></a-entity>'
      cameraPlaceholder.innerHTML += '<a-box class="js--hold" width=".15" height=".6" depth=".15" rotation="-55 -10 10" position=".4 -.4 -.4" color="#FFD29A"></a-box>'
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

      pauseBool = 0;
      domingoNoot2.setAttribute("src", "img/muzieknootOranje.png");
      domingo2.components.sound.playSound();

      setTimeout(function() {
        deurAnimatie.setAttribute("animation", {autoplay: true});
        domingoNoot2.setAttribute("src", "img/muzieknootGroen.png");
        pauseBool = 1;
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
      pavarottiVoetstuk.setAttribute("visible", "true");
      pavarottiCirkel.setAttribute('visible', 'true')
      if (hold2 == null) {
        cameraPlaceholder.innerHTML += '<a-entity class="js--hold2" rotation="0 90 0" scale="1.5 1.5 1.5" position=".5 -.3 -.9" gltf-model="#tissuedoos-glb"></a-entity>'
        cameraPlaceholder.innerHTML += '<a-box class="js--hold2" width=".15" height=".6" depth=".15" rotation="-55 -10 10" position=".4 -.4 -.4" color="#FFD29A"></a-box>'
        const holdItems = document.getElementsByClassName("js--hold2");
        hold2 = "tissue"
      }
    } else {
      klok.setAttribute("src", "#KlokMiddag-obj");
      klok.setAttribute("mtl", "#KlokMiddag-mtl");
      sky.setAttribute("src", "img/middaglucht.jpg");
      pavarotti.setAttribute("visible", "false");
      pavarottiVoetstuk.setAttribute("visible", "false");
      pavarottiCirkel.setAttribute("visible", "false");
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

    if(pauseBool == 1) {
      pavarottiNoot.setAttribute("src", "img/muzieknootOranje.png");
      pavarottiLive.components.sound.playSound();
      pauseBool = 0;
      setTimeout(function() {
        pauseBool = 1;
        pavarottiNoot.setAttribute("src", "img/muzieknootGroen.png")
      }, 44500);
    }
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

domingoLocatie.onclick = function() {
  if(domingoBool == 1) {
    domingoBool = 0;
    pauseBool = 0;
    domingoNoot1.setAttribute("src", "img/muzieknootOranje.png");
    domingo1.components.sound.playSound();
    setTimeout( function() {
      domingoNoot1.setAttribute("src", "img/muzieknootGroen.png");
      pauseBool = 1;
    }, 7500);
  }
}

callasLocatie.onclick = function() {
  if(callasBool == 1) {
    callasBool = 0;
    pauseBool = 0;
    callasNoot3.setAttribute("src", "img/muzieknootOranje.png");
    callas3.components.sound.playSound();
    setTimeout( function() {
      callasNoot3.setAttribute("src", "img/muzieknootGroen.png");
      pauseBool = 1;
    }, 14500);
  }
}
