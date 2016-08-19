import preload from './preload.js';
import setup from './setup.js';
import draw from './draw.js';


// make sure they're in the global namespace
window.preload = preload;
window.setup   = setup;
window.draw    = draw;

