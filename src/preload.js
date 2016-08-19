var canvas;
/* standard p5 preload */
function preload() {
    window.onresize = function() {
        var w = window.innerWidth;
        var h = window.innerHeight;
        if(canvas) canvas.resize(w, h);
        width = w;
        height = h;
    }
}

export default preload;
