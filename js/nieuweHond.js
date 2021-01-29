AFRAME.registerComponent("reloader", {
  init: function() {
    const hond = document.querySelectorAll("[hond]");
    const BASE_URL = "https://dog.ceo/api/breeds/image/random";

    this.newHond = function () {
      fetch(BASE_URL)
        .then(response => response.json())
        .then(data => hond[0].setAttribute("src", data.message))
    }
    this.el.addEventListener("click", this.newHond);
  },
  update: function() {
    this.newHond();
  },
  tick: function () {},
  remove: function() {},
  pause: function() {},
  play: function () {}
});
