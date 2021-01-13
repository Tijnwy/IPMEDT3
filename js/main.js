
let placeholders = document.getElementsByClassName("placeholder");
const scene = document.getElementById('js--scene');

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
      console.log("woef");

  });
}
console.log("woef");
