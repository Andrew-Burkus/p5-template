"use strict";
var canvas;
function preload() {
  window.onresize = function() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    if (canvas)
      canvas.resize(w, h);
    width = w;
    height = h;
  };
}
